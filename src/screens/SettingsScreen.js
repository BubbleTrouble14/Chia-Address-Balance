import React, { useContext, useState } from 'react';

import { SafeAreaView, FlatList, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { useRecoilState, useRecoilValue } from 'recoil';
import ThemeContext from '../contexts/ThemeContext';
import { Button, Paragraph, Dialog, Portal, useTheme, Text, TextInput } from 'react-native-paper';
import { useToast } from 'react-native-fast-toast';
import AddressContext from '../contexts/AddressContext';
import { saveObject } from '../LocalStorage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Settings = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        paddingTop: 16,
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    ></SafeAreaView>
  );
};

export default Settings;
