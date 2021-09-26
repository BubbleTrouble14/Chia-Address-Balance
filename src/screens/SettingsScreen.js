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
import CurrencySelection, { getCurrencyFromKey } from './CurrencySelectionScreen';
import CurrencyContext from '../contexts/CurrencyContext';

const Settings = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { currencyKey } = useContext(CurrencyContext);

  const LeftContent = (props) => (
    <Text style={{ marginEnd: 16 }}>{getCurrencyFromKey(currencyKey)}</Text>
  );

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
          // backgroundColor: theme.colors.surface,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('CurrencySelection')}
      >
        <Card.Title
          style={{ backgroundColor: theme.colors.surface }}
          title="Currency"
          subtitle="Set preferred currency."
          right={LeftContent}
        />
      </Card>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
        }}
      >
        Powered by XCHscan.com APIs
      </Text>
    </SafeAreaView>
  );
};

export default Settings;
