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
import SwitchWithIcons from 'react-native-switch-with-icons';
import SunIcon from './src/assets/pngs/white_sun.png';
import MoonIcon from './src/assets/pngs/moon.png';

import { CurrencyContextProvider } from './src/contexts/CurrencyContext';
import CurrencySelection from './src/screens/CurrencySelectionScreen';
import { color } from 'react-native-reanimated';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

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
  const promises = [getObject('addresses'), getObject('currencyKey'), getObject('isThemeDark')];

  return Promise.all(promises).then(([addresses, currencyKey, isThemeDark]) => {
    return { addresses, currencyKey, isThemeDark };
  });
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
  const [currencyKey, setCurrency] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isThemeDark, setIsThemeDark] = useState(false);

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
                              icon="book"
                              size={24}
                              onPress={() => console.log('Pressed')}
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
