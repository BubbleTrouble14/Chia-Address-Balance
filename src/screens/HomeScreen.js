import React, { useEffect, useState, useContext } from 'react';
import AddressContext from '../contexts/AddressContext';

import LogoIcon from '../assets/svgs/LogoIcon';
import { useTheme, Appbar, TouchableRipple, Switch, Text, IconButton } from 'react-native-paper';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import getSymbolFromCurrency from 'currency-symbol-map';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { getBalance, getCurrentPrice } from '../Api';
import { getObject, saveObject } from './../LocalStorage';
import ThemeContext from '../contexts/ThemeContext';
import CurrencyContext from '../contexts/CurrencyContext';

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

const WalletBalance = (props) => {
  const { state, setState } = props;
  const theme = useTheme();
  const { addresses } = useContext(AddressContext);
  const { currency, exchange } = useContext(CurrencyContext);
  const [chiaCoins, setChiaCoins] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const fetchBalanceForAddresses = (currentPrice, wallets) => {
    const promises = wallets.map((data) => data.promise);
    currentPrice
      .then((currentPrice) => {
        if (currentPrice) {
          setCurrentPrice(currentPrice.price);
          return Promise.all(promises)
            .then((wallet) => {
              wallet.forEach((wallet, index) => {
                setChiaCoins((prevCoins) => prevCoins + wallet.netBalance);
              });
              setState('Success');
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (addresses.length > 0) {
      setChiaCoins(0);
      const calls = [];
      addresses.forEach((wallet) => {
        calls.push({ address: wallet.address, promise: getBalance(wallet.address) });
      });
      fetchBalanceForAddresses(getCurrentPrice(), calls);
    } else {
      setState('No Addresses');
    }
  }, [addresses]);

  if (state === 'Success') {
    // saveObject(data, 'data');
    return (
      <View
        style={{
          marginTop: 32,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'OpenSans-Bold',
            fontSize: 36,
            color: theme.colors.text,
          }}
        >
          {chiaCoins ? (chiaCoins / Math.pow(10, 12)).toFixed(2) + ' XCH' : 0 + ' XCH'}
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
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
              fontFamily: 'OpenSans-Regular',
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

  return (
    <SafeAreaView
      style={{
        paddingTop: 30,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        flex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: 'OpenSans-Bold',
          color: theme.colors.text,
          fontSize: 40,
          textAlign: 'center',
          marginEnd: 16,
          marginStart: 16,
        }}
      >
        Chia Wallet Balance
      </Text>
      <LogoIcon
        color={theme.colors.primary}
        style={{
          width: 256,
          height: 256,
        }}
      />
      <WalletBalance state={state} setState={(state) => setState(state)} />
    </SafeAreaView>
  );
};

export default HomeScreen;
