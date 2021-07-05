/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Linking, View, SafeAreaView, StatusBar } from 'react-native';
import { useTheme, Appbar, TouchableRipple, Switch, Text, IconButton } from 'react-native-paper';
import HomeScreen from './HomeScreen';
import Address from './AddressScreen';
import AddressIcon from '../assets/svgs/AddressIcon';
import DonateIcon from '../assets/svgs/DonateIcon';
import WalletIcon from '../assets/svgs/WalletIcon';

const Tab = createMaterialBottomTabNavigator();

const Donate = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};

const HomeTabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: theme.colors.background,
      }}
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          style: {
            backgroundColor: 'red',
            height: 45,
          },
          tabBarIcon: ({ color }) => (
            <WalletIcon
              color={color}
              style={{
                marginTop: -5,
                height: 30,
                width: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Addresses"
        component={Address}
        options={{
          style: {
            backgroundColor: 'red',
            height: 45,
          },
          tabBarLabel: 'Addresses',
          tabBarIcon: ({ color }) => (
            <AddressIcon
              color={color}
              style={{
                marginTop: -5,
                height: 30,
                width: 30,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Donate}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();

            Linking.canOpenURL(
              'https://github.com/BubbleTrouble14/BubbleTrouble14/blob/main/README.md'
            ).then((supported) => {
              if (supported) {
                Linking.openURL(
                  'https://github.com/BubbleTrouble14/BubbleTrouble14/blob/main/README.md'
                );
              } else {
                console.log("Don't know how to open URI");
              }
            });
          },
        }}
        options={{
          style: {
            backgroundColor: 'red',
            height: 45,
          },
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color }) => (
            <DonateIcon
              color={color}
              style={{
                marginTop: -5,
                height: 30,
                width: 30,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
