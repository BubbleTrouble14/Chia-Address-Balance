import React, { useEffect, useState, useContext } from 'react';
import AddressContext from '../contexts/AddressContext';

import LogoIcon from '../assets/svgs/LogoIcon';
import { useTheme, Appbar, TouchableRipple, Switch, Text, IconButton } from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Platform,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import getSymbolFromCurrency from 'currency-symbol-map';
import Pattern from '../assets/svgs/Pattern';

import { getBalance, getCurrentPrice, getExchangeRates } from '../Api';
import { getObject, saveObject } from './../LocalStorage';
import ThemeContext from '../contexts/ThemeContext';
import CurrencyContext from '../contexts/CurrencyContext';
import { addDataToExchangeO } from '../Utils';

const formatPrice = (price, currency) => {
  const currencyOptions = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).resolvedOptions();

  const value = price.toLocaleString('en-US', {
    ...currencyOptions,
    style: 'decimal',
  });
  return value;
};

const getPrice = (chiaCoins, currentPrice, currency, exchange) => {
  if (chiaCoins) {
    return formatPrice(
      (chiaCoins / Math.pow(10, 12)) * currentPrice * exchange[currency].value,
      currency
    );
  } else {
    return formatPrice(0, currency);
  }
};

const CuteImage = ({ isThemeDark, chiaCoins }) => {
  if (isThemeDark) {
    if (chiaCoins > 0.001) {
      return (
        <Image
          style={{ height: 300, width: 200 }}
          source={require('../assets/pngs/girl_happy.png')}
        ></Image>
      );
    } else {
      return (
        <Image
          style={{ height: 300, width: 200 }}
          source={require('../assets/pngs/girl_sad.png')}
        ></Image>
      );
    }
  } else if (chiaCoins > 0.001) {
    return (
      <Image
        style={{ height: 300, width: 200 }}
        source={require('../assets/pngs/boy_happy.png')}
      ></Image>
    );
  } else {
    return (
      <Image
        style={{ height: 300, width: 200 }}
        source={require('../assets/pngs/boy_sad.png')}
      ></Image>
    );
  }
};

const WalletBalance = (props) => {
  const { state, setState, addresses, refreshing, setRefreshing } = props;
  const theme = useTheme();
  const { currency, exchange, updateExchange } = useContext(CurrencyContext);
  const { isThemeDark } = useContext(ThemeContext);
  const [chiaCoins, setChiaCoins] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const fetchBalanceForAddresses = async (currentPriceCall, wallets) => {
    const promises = wallets.map((data) => data.promise);

    const exchangeRate = await getExchangeRates();
    const currentPrice = await currentPriceCall;
    const walletBalances = await Promise.all(promises);
    return { exchangeRate, currentPrice, walletBalances };
    // return currentPrice
    //   .then((currentPrice) => {
    //     if (currentPrice) {
    //       setCurrentPrice(currentPrice.price);
    //       let coins = 0;
    //       return Promise.all(promises)
    //         .then((wallet) => {
    //           wallet.forEach((wallet, index) => {
    //             return wallet.netBalance;
    //             // coins = coins + wallet.netBalance;
    //             // setChiaCoins((prevCoins) => prevCoins + wallet.netBalance);
    //           });
    //           setState('Success');
    //           console.log('Updated coin count');
    //         })
    //         .catch((error) => {
    //           console.error(error);
    //         });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
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

  const totalChiaCount = (walletBalances) => {
    let val = 0;
    walletBalances.forEach((item) => {
      val = val + item.netBalance;
    });
    return val;
  };

  useEffect(() => {
    if (refreshing) {
      const calls = [];
      addresses.forEach((wallet) => {
        calls.push({ address: wallet.address, promise: getBalance(wallet.address) });
      });
      fetchBalanceForAddresses(getCurrentPrice(), calls)
        .then((data) => {
          updateExchange(addDataToExchange(data.exchangeRate));
          setCurrentPrice(data.currentPrice.price);
          setChiaCoins(totalChiaCount(data.walletBalances));
          setRefreshing(false);
          setState('Success');
          console.log('Fetched Data');
        })
        .catch((err) => {
          console.log(err);
          setRefreshing(false);
          setState('Error');
        });
    }
  }, [refreshing]);

  useEffect(() => {
    if (addresses.length > 0) {
      const calls = [];
      addresses.forEach((wallet) => {
        calls.push({ address: wallet.address, promise: getBalance(wallet.address) });
      });
      fetchBalanceForAddresses(getCurrentPrice(), calls)
        .then((data) => {
          updateExchange(addDataToExchange(data.exchangeRate));
          setCurrentPrice(data.currentPrice.price);
          setChiaCoins(totalChiaCount(data.walletBalances));
          console.log('Fetched Data');
          setState('Success');
        })
        .catch((err) => {
          console.log(err);
          setState('Error');
        });
    } else {
      setState('No Addresses');
    }
  }, [addresses]);

  if (state === 'Success') {
    // saveObject(data, 'data');
    return (
      <View
        style={{
          marginTop: 16,
          alignItems: 'center',
        }}
      >
        <CuteImage isThemeDark={isThemeDark} chiaCoins={chiaCoins} />
        <Text
          style={{
            fontFamily: 'Heebo-Extrabold',
            fontSize: 36,
            color: theme.colors.text,
            marginTop: 16,
          }}
        >
          {chiaCoins ? (chiaCoins / Math.pow(10, 12)).toFixed(2) + ' XCH' : 0 + ' XCH'}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 0 }}>
          <Text
            style={{
              fontFamily: 'Heebo-Regular',
              fontSize: 19,
              marginEnd: 8,
              textAlignVertical: 'center',
              color: theme.colors.text,
            }}
          >
            {getSymbolFromCurrency(currency)}
          </Text>
          <Text
            style={{
              fontFamily: 'Heebo-Regular',
              textAlignVertical: 'center',
              fontSize: 20,
              color: theme.colors.text,
            }}
          >
            {getPrice(chiaCoins, currentPrice, currency, exchange)}
          </Text>
        </View>
      </View>
    );
  } else if (state === 'Error') {
    return (
      <View>
        <Text
          style={{
            marginTop: 16,
            fontSize: 24,
            color: theme.colors.text,
          }}
        >
          Could not fetch data.
        </Text>
      </View>
    );
  } else if (state === 'No Addresses') {
    return (
      <View>
        <Text
          style={{
            marginTop: 16,
            fontSize: 24,
            color: theme.colors.text,
          }}
        >
          No Chia Address added.
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text
          style={{
            marginTop: 16,
            fontSize: 24,
            color: theme.colors.text,
          }}
        >
          Harvesting Chia ...
        </Text>
      </View>
    );
  }
};

const HomeScreen = () => {
  const theme = useTheme();
  const [state, setState] = useState('Loading');
  const { addresses } = useContext(AddressContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    if (addresses.length > 0) {
      setRefreshing(true);
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        // paddingTop: 30,
        // backgroundColor: theme.colors.background,
        // alignItems: 'center',
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          paddingTop: 30,
          backgroundColor: theme.colors.background,
          alignItems: 'center',
          // justifyContent: 'center',
        }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 60 }}>
          <Pattern color={theme.colors.leaves} />
        </View>
        <Text
          style={{
            fontFamily: 'Heebo-Extrabold',
            color: theme.colors.text,
            fontSize: 40,
            textAlign: 'center',
            marginEnd: 16,
            marginStart: 16,
          }}
        >
          Chia Address
        </Text>
        <Text
          style={{
            fontFamily: 'Heebo-Regular',
            color: theme.colors.text,
            fontSize: 30,
            color: theme.colors.primary,
            textAlign: 'center',
            marginEnd: 16,
            marginStart: 16,
          }}
        >
          Balance
        </Text>
        <WalletBalance
          state={state}
          addresses={addresses}
          refreshing={refreshing}
          setRefreshing={(refreshing) => setRefreshing(refreshing)}
          setState={(state) => setState(state)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
