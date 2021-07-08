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

// const addresses = [
//   {
//     address: 'xch13v9r3wkceh6h5juecgzcfyf5x6ll9p2ehh03m2z46qyrdutp258qy4zu42',
//     title: 'Main Address',
//   },
//   {
//     address: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Farmer Address',
//   },
// ];

const Address = () => {
  const theme = useTheme();
  const { addresses, addAddress, removeAddress } = useContext(AddressContext);
  const [visible, setVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [inputText, setTextInput] = useState('');
  const [inputTitleText, setTextTitleInput] = useState('');
  const [selectedAddress, setSelectedAddress] = useState();
  const toast = useToast();

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const showDeleteDialog = () => setDeleteVisible(true);

  const hideDeleteDialog = () => setDeleteVisible(false);

  const Item = ({ title, address }) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        borderRadius: 6,
        color: 'white',
        backgroundColor: theme.colors.surface,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}
    >
      <Text>{title}</Text>
      <MaterialCommunityIcons
        // style={styles.icon}
        name="delete"
        color={theme.colors.text}
        size={26}
        onPress={() => {
          setSelectedAddress(address);
          showDeleteDialog();
        }}
      />
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} address={item.address} />;
  // if (addresses.length === 0) {
  //   return (
  //     <SafeAreaView style={styles.backgroundEmpty}>
  //       <FAB style={styles.fab} color="#273038" icon="plus" onPress={showDialog} />
  //       <Text style={styles.helpText}>Add chia addresses here.</Text>
  //     </SafeAreaView>
  //   );
  // }

  const Content = () => {
    if (addresses.length > 0) {
      return (
        <FlatList data={addresses} renderItem={renderItem} keyExtractor={(item) => item.address} />
      );
    } else {
      return (
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontFamily: Platform.OS === 'android' ? 'OpenSans-Regular' : 'OpenSans Regular',
            color: theme.colors.text,
            fontSize: 24,
          }}
        >
          Add chia addresses here.
        </Text>
      );
    }
  };

  return (
    <SafeAreaView
      style={
        addresses.length > 0
          ? {
              paddingTop: 16,
              backgroundColor: theme.colors.background,
              flex: 1,
            }
          : {
              paddingTop: 16,
              backgroundColor: theme.colors.background,
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }
      }
    >
      <Content></Content>
      {/* <FlatList data={addresses} renderItem={renderItem} keyExtractor={(item) => item.address} /> */}
      <FAB
        style={{
          // backgroundColor: '#35AB52',
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        // color="#273038"
        icon="plus"
        onPress={showDialog}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Add Chia Address</Dialog.Title>
          <Dialog.Content>
            <TextInput
              placeholder="Enter a Name for Address"
              onChangeText={(text) => {
                setTextTitleInput(text);
              }}
            ></TextInput>
            <TextInput
              style={{ marginTop: 16 }}
              placeholder="Enter Chia Address"
              onChangeText={(text) => {
                setTextInput(text);
              }}
            ></TextInput>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                // setTextInput('xch13v9r3wkceh6h5juecgzcfyf5x6ll9p2ehh03m2z46qyrdutp258qy4zu42');
                let formattedInputText = inputText;
                formattedInputText = formattedInputText.replace(/\s/g, '');
                if (
                  formattedInputText.length === 62 &&
                  formattedInputText.includes('xch') &&
                  inputTitleText.length > 0
                ) {
                  if (
                    addresses.some(
                      (val) => val.address === formattedInputText //inputText
                    )
                  ) {
                    toast.show('Already added Address');
                  } else {
                    const address = {
                      address: formattedInputText,
                      title: inputTitleText,
                    };
                    addAddress(address);
                    setTextInput('');
                    setTextTitleInput('');
                    hideDialog();
                  }
                } else {
                  if (inputTitleText.length === 0) {
                    toast.show('Please enter a title name for the address');
                  } else toast.show('Chia address not valid');
                }
              }}
            >
              Save
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Portal>
        <Dialog visible={deleteVisible} onDismiss={hideDeleteDialog}>
          <Dialog.Title>Delete</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Are you sure you want to delete this item?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                hideDeleteDialog();
                removeAddress(selectedAddress);
              }}
            >
              Yes
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

export default Address;
