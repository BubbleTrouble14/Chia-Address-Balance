/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable global-require */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  Text,
  NativeModules,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast, { ToastProvider } from 'react-native-toast-notifications';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {
  IconButton,
  Portal,
  Dialog,
  Checkbox,
  Button,
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import merge from 'deepmerge';
import SwitchWithIcons from 'react-native-switch-with-icons';
import BackgroundFetch from 'react-native-background-fetch';
import SunIcon from './src/assets/pngs/white_sun.png';
import MoonIcon from './src/assets/pngs/moon.png';

import { CurrencyContextProvider } from './src/contexts/CurrencyContext';
import CurrencySelection from './src/screens/CurrencySelectionScreen';

import { AddressContextProvider } from './src/contexts/AddressContext';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import Settings from './src/screens/SettingsScreen';
import HomeTabs from './src/screens/HomeTabsScreen';
import { getObject, saveObject } from './src/LocalStorage';
import BackgroundTask from './src/components/BackgroundTask';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export const { SharedStorage } = NativeModules;

const LightTheme = {
  ...CombinedDefaultTheme,
  roundness: 2,
  colors: {
    ...CombinedDefaultTheme.colors,
    accent: '#c57e49',
    primary: '#329f4d',
    background: '#f6f6f6',
    leaves: 'rgba(41, 50, 57, 0.05)',
  },
};

const DarkTheme = {
  ...CombinedDarkTheme,
  roundness: 2,
  colors: {
    ...CombinedDarkTheme.colors,
    background: '#293239',
    text: '#ffffffff',
    surface: '#20272c',
    accent: '#c57e49',
    primary: '#329f4d',
    leaves: 'rgba(245, 245, 245, 0.07)',
  },
};

export const fetchInitData = () => {
  const promises = [
    getObject('addresses'),
    getObject('currencyKey'),
    getObject('isThemeDark'),
    getObject('notification'),
  ];

  return Promise.all(promises).then(([addresses, currencyKey, isThemeDark, notification]) => ({
    addresses,
    currencyKey,
    isThemeDark,
    notification,
  }));
};

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/fr-BE');
  require('intl/locale-data/jsonp/nl-BE');
  require('intl/locale-data/jsonp/it-IT');
  require('intl/locale-data/jsonp/en-US');
  require('intl/locale-data/jsonp/en-IN'); // load the required locale details
}

const Item = ({ theme, title, address, checked, onChecked }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      color: 'white',
      margin: 16,
      // backgroundColor: onPress ? '#FFFFFFFF' : theme.colors.surface,
      // marginVertical: 8,
      // marginHorizontal: 16,
    }}
  >
    <Text style={{ fontSize: 20, color: theme.colors.text }}>{title}</Text>
    <Text
      style={{
        color: theme.colors.primary,
        marginLeft: 16,
        flex: 1,
        fontStyle: 'italic',
      }}
      textBreakStrategy="simple"
      numberOfLines={1}
    >
      {address}
    </Text>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => onChecked(!checked)}
      style={{ flex: 1 }}
    />
  </View>
);

const App = () => {
  const [addresses, setAddress] = useState([]);
  const [currencyKey, setCurrency] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [notification, setNotification] = useState(true);

  const addAddress = (newAddress) => {
    saveObject([...addresses, newAddress], 'addresses');
    setAddress((prevState) => [...prevState, newAddress]);
  };

  const updateAddressTitle = (address, title) => {
    const newAddresses = [...addresses];
    newAddresses.forEach((item) => {
      if (item.address === address) {
        item.title = title;
      }
    });
    saveObject(newAddresses, 'addresses');
    setAddress(newAddresses);
  };

  const updateCheckStatus = (address, checked) => {
    const newAddresses = [...addresses];
    newAddresses.forEach((item) => {
      if (item.address === address) {
        item.checked = checked;
      }
    });
    saveObject(newAddresses, 'addresses');
    setAddress(newAddresses);
  };

  const removeAddress = (selectedAddress) => {
    saveObject(
      addresses.filter((item) => item.address !== selectedAddress),
      'addresses'
    );
    setAddress((prevState) => prevState.filter((item) => item.address !== selectedAddress));
  };

  const updateCurrency = (currencyKey) => {
    saveObject(currencyKey, 'currencyKey');
    setCurrency(currencyKey);
  };

  const saveNotification = async () => {
    saveObject(!notification, 'notification');
    setNotification(!notification);
    if (!notification) {
      await BackgroundFetch.start();
      toast.show('Enabled Notifications');
    } else {
      await BackgroundFetch.stop();
      toast.show('Disabled Notifications');
    }
  };

  const addressValue = { addresses, addAddress, updateAddressTitle, removeAddress };
  const currencyValue = { currencyKey, updateCurrency };

  useEffect(() => {
    fetchInitData()
      .then((data) => {
        if (data.addresses) {
          setAddress(data.addresses);
        }
        if (data.currencyKey) {
          setCurrency(data.currencyKey);
        }
        if (data.isThemeDark) {
          setIsThemeDark(data.isThemeDark);
        }
        if (data.notification !== null) {
          setNotification(data.notification);
        }
        setLoading(false);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  const theme = isThemeDark ? DarkTheme : LightTheme;

  const toggleTheme = useCallback(() => {
    saveObject(!isThemeDark, 'isThemeDark');
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      address={item.address}
      theme={theme}
      checked={Object.prototype.hasOwnProperty.call(item, 'checked') ? item.checked : true}
      onChecked={(checked) => {
        updateCheckStatus(item.address, checked);
      }}
    />
  );

  const Content = () => {
    if (addresses.length > 0) {
      return (
        <FlatList data={addresses} renderItem={renderItem} keyExtractor={(item) => item.address} />
      );
    }
    return (
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Heebo-Regular',
          color: theme.colors.text,
          fontSize: 24,
        }}
      >
        Add chia addresses here.
      </Text>
    );
  };

  if (loading)
    return (
      <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
        {/* <ActivityIndicator size="large" /> */}
      </SafeAreaView>
    );

  return (
    <ThemeContextProvider value={preferences}>
      <AddressContextProvider value={addressValue}>
        <CurrencyContextProvider value={currencyValue}>
          <ToastProvider>
            <SafeAreaProvider style={{ backgroundColor: theme.colors.background }}>
              <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                  <BackgroundTask notification={notification}>
                    <StatusBar backgroundColor={theme.colors.background} barStyle="light-content" />
                    <Stack.Navigator mode="modal">
                      <Stack.Screen
                        name="Home"
                        component={HomeTabs}
                        options={({ route, navigation }) => ({
                          headerStyle: {
                            backgroundColor: theme.colors.background,
                          },
                          headerLeft: (props) => (
                            <IconButton
                              style={{ marginStart: 16 }}
                              icon="cog"
                              onPress={() => navigation.navigate('Settings')}
                            />
                          ),
                          headerTitle: '',
                          headerRight: () => (
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginEnd: 10,
                                alignItems: 'center',
                              }}
                            >
                              {/* <Switch
                              onValueChange={() => {
                                toggleTheme();
                              }}
                              style={{ marginEnd: 16 }}
                              value={isThemeDark}
                            /> */}
                              {Platform.OS === 'android' && (
                                <IconButton
                                  icon={notification ? 'bell-ring' : 'bell-off'}
                                  size={24}
                                  onPress={async () => {
                                    saveNotification();
                                  }}
                                />
                              )}
                              <SwitchWithIcons
                                onValueChange={(value) => toggleTheme()}
                                value={isThemeDark}
                                icon={{ true: MoonIcon, false: SunIcon }}
                                trackColor={{
                                  true: theme.colors.leaves,
                                  false: theme.colors.leaves,
                                }}
                                thumbColor={{
                                  true: theme.colors.accent,
                                  false: theme.colors.accent,
                                }}
                                iconColor={{ true: '#fff', false: '#fff' }}
                              />
                              <IconButton
                                icon="filter"
                                size={24}
                                onPress={() => {
                                  if (addresses.length > 0) {
                                    setShowDialog(true);
                                  } else {
                                    // toast.show('No addresses to filter');
                                  }
                                }}
                              />
                            </View>
                          ),
                        })}
                      />
                      <Stack.Screen
                        options={{
                          headerStyle: {
                            backgroundColor: theme.colors.background,
                          },
                        }}
                        name="Settings"
                        component={Settings}
                      />
                      <Stack.Screen
                        options={{
                          headerStyle: {
                            backgroundColor: theme.colors.background,
                          },
                          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                          title: 'Select Currency',
                        }}
                        name="CurrencySelection"
                        component={CurrencySelection}
                      />
                    </Stack.Navigator>
                  </BackgroundTask>
                  <Toast ref={(ref) => (global.toast = ref)} />
                </NavigationContainer>
                <Portal>
                  <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
                    <Dialog.Title>Address Filter</Dialog.Title>
                    <Dialog.Content>
                      <Content />
                    </Dialog.Content>
                    <Dialog.Actions>
                      <Button
                        onPress={() => {
                          setShowDialog(false);
                        }}
                      >
                        Close
                      </Button>
                    </Dialog.Actions>
                  </Dialog>
                </Portal>
              </PaperProvider>
            </SafeAreaProvider>
          </ToastProvider>
        </CurrencyContextProvider>
      </AddressContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
