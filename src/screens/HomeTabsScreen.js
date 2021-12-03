/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Linking, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import { useTheme, Appbar, TouchableRipple, Switch, Text, IconButton } from 'react-native-paper';
import HomeScreen from './HomeScreen';
import Address from './AddressScreen';
import AddressIcon from '../assets/svgs/AddressIcon';
import WalletIcon from '../assets/svgs/WalletIcon';
import SupportScreen from './SupportScreen';
import OpenChiaIcon from '../assets/svgs/OpenChiaIcon';

const Tab = createMaterialBottomTabNavigator();

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
        name="Support"
        component={SupportScreen}
        options={{
          style: {
            backgroundColor: 'red',
            height: 45,
          },
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color }) => (
            <OpenChiaIcon
              color={color}
              style={{
                marginTop: -5,
              }}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
