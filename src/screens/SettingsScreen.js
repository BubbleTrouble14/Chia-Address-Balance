import React, { useContext, useState } from 'react';

import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, FAB, TouchableRipple } from 'react-native-paper';
import { useRecoilState, useRecoilValue } from 'recoil';
import ThemeContext from '../contexts/ThemeContext';
import {
  Title,
  Button,
  Paragraph,
  Dialog,
  Portal,
  useTheme,
  Text,
  TextInput,
} from 'react-native-paper';
import { useToast } from 'react-native-fast-toast';
import AddressContext from '../contexts/AddressContext';
import { saveObject } from '../LocalStorage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import CurrencySelection from './CurrencySelectionScreen';
import CurrencyContext from '../contexts/CurrencyContext';

const Settings = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { currency } = useContext(CurrencyContext);

  const LeftContent = (props) => <Text style={{ marginEnd: 16 }}>{currency}</Text>;

  return (
    <SafeAreaView
      style={{
        paddingTop: 16,
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <Card
        style={{
          marginLeft: 12,
          marginEnd: 12,
          backgroundColor: theme.colors.surface,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate(CurrencySelection, { name: 'CurrencySelection' })}
      >
        <Card.Title title="Currency" subtitle="Set preferred currency." right={LeftContent} />
      </Card>
    </SafeAreaView>
  );
};

export default Settings;
