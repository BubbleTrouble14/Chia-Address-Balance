import React, { useEffect, useState } from 'react';
import BackgroundFetch from 'react-native-background-fetch';
import PushNotification, { Importance } from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Alert, Platform } from 'react-native';
import { getObject, saveObject } from '../LocalStorage';
import { getBalanceWithAddress } from '../Api';

import { loadEvents, persistEvents } from '../utils/Utils';
import { formatToChiaObj } from '../utils/ChiaFormatter';

export const fetchXCHBalanceForAddresses = async () => {
  const addresses = await getObject('addresses');
  const calls = [];
  if (addresses) {
    addresses.forEach((wallet) => {
      calls.push({
        address: wallet.address,
        promise: getBalanceWithAddress(wallet.address, wallet.title),
      });
    });
  }
  const walletBalances = await Promise.all(calls.map((data) => data.promise));
  return { walletBalances };
};

export const sendNotification = (text, amount, title, address) => {
  if (Platform.OS === 'android') {
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: 'chia-address-balance', // (required)
      ticker: 'My Notification Ticker', // (optional)
      autoCancel: true, // (optional) default: true
      largeIcon: 'ic_launcher', // (optional) default: "ic_launcher"
      smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher"
      bigText: `Your balance for ${title || address} changed from ${amount.prev} XCH to ${
        amount.new
      } XCH`, // (optional) default: "message" prop
      // subText: 'This is a subText', // (optional) default: none
      // color: 'red', // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      tag: 'some_tag', // (optional) add tag to message
      group: 'group', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      ongoing: false, // (optional) set whether this is an "ongoing" notification
      // actions: ['Yes', 'No'], // (Android only) See the doc for notification actions to know more
      invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

      when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
      allowWhileIdle: true,
      /* iOS only properties */
      category: '', // (optional) default: empty string
      subtitle: 'My Notification Subtitle', // (optional) smaller title below notification title

      title: `You ${text} ${amount.dif.text}`, // (optional)
      message: `Your balance for ${title || address} changed from ${amount.prev} XCH to ${
        amount.new
      } XCH`, // (required)
    });
  } else if (Platform.OS === 'ios') {
    PushNotificationIOS.addNotificationRequest({
      id: 'chiaNotification',
      title: `You ${text} ${amount.dif.text}`,
      // subtitle: 'Sample Subtitle',
      body: `Your balance for ${title || address} changed from ${amount.prev} XCH to ${
        amount.new
      } XCH`,
      sound: 'customSound.wav',
      badge: 1,
    });
  }
};

export const updateNotification = async () => {
  const newData = await fetchXCHBalanceForAddresses();
  const oldData = await getObject('notificationData');

  if (oldData) {
    newData.walletBalances.forEach((newItem) => {
      oldData.walletBalances.forEach((oldItem) => {
        if (oldItem.address === newItem.address) {
          if (newItem.unspentBalance !== oldItem.unspentBalance) {
            if (newItem.unspentBalance > oldItem.unspentBalance) {
              sendNotification(
                'Received',
                {
                  dif: formatToChiaObj(newItem.unspentBalance - oldItem.unspentBalance),
                  prev: oldItem.xch,
                  new: newItem.xch,
                },
                newItem.title,
                newItem.address
              );
            } else {
              sendNotification(
                'Sent',
                {
                  dif: formatToChiaObj(Math.abs(oldItem.unspentBalance - newItem.unspentBalance)),
                  prev: oldItem.xch,
                  new: newItem.xch,
                },
                newItem.title,
                newItem.address
              );
            }
          }
        }
      });
    });
    saveObject(newData, 'notificationData');
  } else {
    saveObject(newData, 'notificationData');
  }
};

const BackgroundTask = ({ notification, children }) => {
  const notificationEnabled = async () => {
    try {
      if (!notification) {
        await BackgroundFetch.stop();
      }
    } catch (e) {
      console.warn(`[BackgroundFetch] ${notification ? 'start' : 'stop'} falied`, e);
    }
  };

  const onBackgroundFetchEvent = async (taskId) => {
    updateNotification();
    BackgroundFetch.finish(taskId);
  };

  const onBackgroundFetchTimeout = async (taskId) => {
    BackgroundFetch.finish(taskId);
  };

  const init = async () => {
    await BackgroundFetch.configure(
      {
        minimumFetchInterval: 15, // <-- minutes (15 is minimum allowed)
        // Android options
        forceAlarmManager: true, // <-- Set true to bypass JobScheduler.
        stopOnTerminate: false,
        enableHeadless: true,
        startOnBoot: true,
        requiredNetworkType: BackgroundFetch.NETWORK_TYPE_NONE, // Default
        requiresCharging: false, // Default
        requiresDeviceIdle: false, // Default
        requiresBatteryNotLow: false, // Default
        requiresStorageNotLow: false, // Default
      },
      onBackgroundFetchEvent,
      onBackgroundFetchTimeout
    );

    // console.log(notification)
    notificationEnabled(notification);
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      PushNotification.createChannel({
        channelId: 'chia-address-balance', // (required)
        channelName: 'Chia Address Balance', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.import { convertMojoToChia } from './../utils/ChiaFormatter';
      });
      init();
    } else if (Platform.OS === 'ios') {
      // PushNotificationIOS.requestPermissions({
      //   alert: true,
      //   badge: true,
      //   sound: true,
      //   critical: true,
      // }).then(
      //   (data) => {
      //     console.log('PushNotificationIOS.requestPermissions', data);
      //   },
      //   (data) => {
      //     console.log('PushNotificationIOS.requestPermissions failed', data);
      //   }
      // );
    }

    // sendNotification(
    //   'Received',
    //   { dif: formatToChiaObj(40000050220 - 40000000000), prev: 40000000000, new: 40000000220 },
    //   'fdsf',
    //   'dsdg'
    // );

    // init();
  }, []);
  return <>{children}</>;
};

export default BackgroundTask;
