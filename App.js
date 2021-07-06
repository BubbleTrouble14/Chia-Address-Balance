/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useCallback, useMemo } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Linking, View, SafeAreaView, StatusBar } from 'react-native';
import HomeTabs from './src/screens/HomeTabsScreen';
import Settings from './src/screens/SettingsScreen';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { AddressContextProvider } from './src/contexts/AddressContext';
import { useEffect } from 'react';
import AddressIcon from './src/assets/svgs/AddressIcon';
import DonateIcon from './src/assets/svgs/DonateIcon';
import WalletIcon from './src/assets/svgs/WalletIcon';
import { ToastProvider } from 'react-native-fast-toast';
import { getObject, saveObject } from './src/LocalStorage';
import { Text } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
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

// const Donate = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// };

const App = () => {
  const [addresses, setAddress] = useState([]);
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

  const value = { addresses, addAddress, removeAddress };

  useEffect(() => {
    getObject('addresses').then((addresses) => {
      if (addresses) {
        setAddress(addresses);
      }
      setLoading(false);
    });
  }, []);

  let theme = isThemeDark ? DarkTheme : LightTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  const HeaderLeft = () => {
    const navigation = useNavigation();
    return (
      <IconButton icon="cog" onPress={() => navigation.navigate(Settings, { name: 'Settings' })} />
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
      <AddressContextProvider value={value}>
        <ToastProvider>
          <PaperProvider theme={theme}>
            <NavigationContainer theme={theme}>
              <StatusBar backgroundColor={theme.colors.background} barStyle="light-content" />
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={HomeTabs}
                  options={{
                    headerStyle: {
                      backgroundColor: theme.colors.background,
                    },
                    headerTitle: () => <HeaderLeft />,
                    headerRight: () => (
                      <Switch
                        onValueChange={() => {
                          toggleTheme();
                        }}
                        value={isThemeDark}
                      />
                    ),
                  }}
                />
                <Stack.Screen name="Settings" component={Settings} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </ToastProvider>
      </AddressContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
