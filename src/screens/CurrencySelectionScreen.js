import React, { useContext, useState } from 'react';

import { SafeAreaView, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { FAB, List } from 'react-native-paper';
import { useRecoilState, useRecoilValue } from 'recoil';
import ThemeContext from '../contexts/ThemeContext';
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  useTheme,
  Text,
  TextInput,
  TouchableRipple,
  Card,
  Title,
} from 'react-native-paper';
import { useToast } from 'react-native-fast-toast';
import AddressContext from '../contexts/AddressContext';
import { saveObject } from '../LocalStorage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyContext from '../contexts/CurrencyContext';

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '14%',
      }}
    />
  );
};

const Item = ({ item, onPress, backgroundColor }) => (
  <Card
    onPress={onPress}
    style={{
      marginEnd: 16,
      marginLeft: 16,
      marginTop: 8,
      borderRadius: 10,
      backgroundColor: backgroundColor,
    }}
  >
    <Card.Title title={item.key} subtitle={item.value.title} />
  </Card>
);

const CurrencySelection = ({ navigation }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);
  const { currency, exchange, updateCurrency } = useContext(CurrencyContext);

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

  if (!exchange) return <Text>No Data</Text>;

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      <FlatList
        data={Object.entries(exchange)
          .flatMap((item) => {
            const [key, value] = item;
            return { key, value };
          })
          .filter((item) => item.key !== currency)}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
};

export default CurrencySelection;
