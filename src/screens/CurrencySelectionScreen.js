import React, { useContext, useState } from 'react';

import { SafeAreaView, FlatList } from 'react-native';
import { useTheme, Card } from 'react-native-paper';
import CurrencyContext from '../contexts/CurrencyContext';

const Item = ({ item, onPress, backgroundColor }) => (
  <Card
    onPress={onPress}
    style={{
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 10,
      backgroundColor: backgroundColor,
    }}
  >
    <Card.Title title={Object.entries(item)[1][0]} subtitle={item.title} />
  </Card>
);

export const currencies = [
  { key: 0, USD: '$', title: 'United States Dollar' },
  { key: 1, EUR: '€', title: 'Euro' },
  { key: 2, CAD: '$', title: 'Canadian Dollar' },
  { key: 3, GBP: '£', title: 'Pound sterling' },
  { key: 4, AUD: '$', title: 'Australian Dollar' },
  { key: 5, SGD: '$', title: 'Singapore Dollar' },
  { key: 6, JPY: '¥', title: 'Japanese Yen' },
  { key: 7, INR: '₹', title: 'Indian Rupee' },
  { key: 8, MYR: 'RM', title: 'Malaysian Ringgit' },
  { key: 9, CNY: '¥', title: 'Chinese Yuan' },
  { key: 10, CHF: 'Fr', title: 'Swiss Franc' },
  { key: 11, HKD: 'HK$', title: 'Hong Kong Dollar' },
  { key: 12, BRL: 'R$', title: 'Brazilian Real' },
  { key: 13, DKK: 'kr.', title: 'Danish Krone' },
  { key: 14, NZD: '$', title: 'New Zealand Dollar' },
  { key: 15, TRY: '₺', title: 'Turkish Lira' },
  { key: 16, THB: '฿', title: 'Thai Baht' },
  { key: 17, TWD: 'NT$', title: 'New Taiwan Dollar' },
  { key: 18, KRW: '₩', title: 'South Korean Won' },
  { key: 19, ETH: 'ETH', title: 'Ethereum' },
  { key: 20, BTC: '₿', title: 'Bitcoin' },
  { key: 21, ETC: 'ETC', title: 'Ethereum Classic' },
];

export const getCurrencyFromKey = (key) => {
  return Object.keys(currencies.find((currency) => currency.key === key))[1];
};

const CurrencySelection = ({ navigation }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);
  const { currency, updateCurrency } = useContext(CurrencyContext);

  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => {
        navigation.goBack();
        updateCurrency(item.key);
      }}
      backgroundColor={theme.colors.surface}
    />
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <FlatList
        style={{ paddingRight: 16, paddingLeft: 16 }}
        data={currencies}
        renderItem={renderItem}
        keyExtractor={(item) => item.key.toString()}
      />
    </SafeAreaView>
  );
};

export default CurrencySelection;
