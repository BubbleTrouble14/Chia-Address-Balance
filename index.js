/**
 * @format
 */

import { AppRegistry } from 'react-native';
import BackgroundFetch from "react-native-background-fetch";
import App from './App';
import { name as appName } from './app.json';
import { fetchXCHBalanceForAddresses, sendNotification, updateNotification } from './src/components/BackgroundTask';
import { getObject, saveObject } from './src/LocalStorage';


const headlessTask = async (event) => {
    if (event.timeout) {
      console.log('[BackgroundFetch] 💀 HeadlessTask TIMEOUT: ', event.taskId);
      BackgroundFetch.finish(event.taskId);
      return;
    }
    console.log('[BackgroundFetch] 💀 HeadlessTask start: ', event.taskId);

    updateNotification()

    BackgroundFetch.finish(event.taskId);
  };
  
  
BackgroundFetch.registerHeadlessTask(headlessTask);

AppRegistry.registerComponent(appName, () => App);
