/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useMemo } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Linking, View, SafeAreaView, StatusBar, UIManager, Platform } from 'react-native';
import HomeTabs from './src/screens/HomeTabsScreen';
import Settings from './src/screens/SettingsScreen';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AddressContextProvider } from './src/contexts/AddressContext';
import { useEffect } from 'react';
import { ToastProvider } from 'react-native-fast-toast';
import { getObject, saveObject } from './src/LocalStorage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  createStackNavigator,
  TransitionSpecs,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { Switch, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { getExchangeRates } from './src/Api';
import { CurrencyContextProvider } from './src/contexts/CurrencyContext';
import CurrencySelection from './src/screens/CurrencySelectionScreen';
import { addDataToExchangeO } from './src/Utils';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const LightTheme = {
  ...CombinedDefaultTheme,
  roundness: 2,
  colors: {
    ...CombinedDefaultTheme.colors,
    accent: '#ff9800',
    primary: '#35AB52',
    // primary: '#273038',
    // accent: '#35AB52',
  },
};

const DarkTheme = {
  ...CombinedDarkTheme,
  roundness: 2,
  colors: {
    ...CombinedDarkTheme.colors,
    // background: '#303030',
    // background: '#273038',
    background: '#182d40',
    surface: '#101e2b',
    accent: '#ff9800',
    primary: '#35AB52',

    // primary: '#273038',
    // accent: '#35AB52',
  },
};

export const fetchInitData = () => {
  const promises = [
    getObject('addresses'),
    getObject('currency'),
    getExchangeRates(),
    getObject('isThemeDark'),
  ];

  return Promise.all(promises).then(([addresses, currency, exchange, isThemeDark]) => {
    return { addresses, currency, exchange, isThemeDark };
  });
};

const addDataToExchange = (data) => {
  const obj = {
    USD: {
      value: 1,
      icon: '🇪🇺',
      title: 'United States Dollar',
    },
  };
  Object.entries(data['exchange_rates']).forEach((entry) => {
    const [key, value] = entry;
    obj[key] = addDataToExchangeO([key, value]);
  });
  return obj;
};

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/fr-BE');
  require('intl/locale-data/jsonp/nl-BE');
  require('intl/locale-data/jsonp/it-IT');
  require('intl/locale-data/jsonp/en-US');
  require('intl/locale-data/jsonp/en-IN'); // load the required locale details
}

const App = () => {
  const [addresses, setAddress] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [exchange, setExchange] = useState();
  const [loading, setLoading] = useState(true);
  const [isThemeDark, setIsThemeDark] = useState(false);

  const addAddress = (newAddress) => {
    saveObject([...addresses, newAddress], 'addresses');
    setAddress((prevState) => [...prevState, newAddress]);
  };

  const removeAddress = (selectedAddress) => {
    saveObject(
      addresses.filter((item) => item.address !== selectedAddress),
      'addresses'
    );
    setAddress((prevState) => prevState.filter((item) => item.address !== selectedAddress));
  };

  const updateCurrency = (currency) => {
    saveObject(currency, 'currency');
    setCurrency(currency);
  };

  const addressValue = { addresses, addAddress, removeAddress };
  const currencyValue = { currency, updateCurrency, exchange, setExchange };

  useEffect(() => {
    fetchInitData()
      .then((data) => {
        if (data.addresses) {
          setAddress(data.addresses);
        }
        if (data.currency) {
          setCurrency(data.currency);
        }
        if (data.exchange) {
          setExchange(addDataToExchange(data.exchange));
        }
        if (data.isThemeDark) {
          setIsThemeDark(data.isThemeDark);
        }
        setLoading(false);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  let theme = isThemeDark ? DarkTheme : LightTheme;

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
                          <Switch
                            onValueChange={() => {
                              toggleTheme();
                            }}
                            style={{ marginEnd: 16 }}
                            value={isThemeDark}
                          />
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
                </NavigationContainer>
              </PaperProvider>
            </SafeAreaProvider>
          </ToastProvider>
        </CurrencyContextProvider>
      </AddressContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
