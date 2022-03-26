import React from 'react';
import { SafeAreaView, Linking, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Text, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OpenChiaIcon from '../assets/svgs/OpenChiaIcon';

const SupportScreen = () => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ padding: 16, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          I have now joined the OpenChia team. This will hopefully allow me to further improve the
          Chia Address Balance app. If you like my work and want to leave a donation the best way to
          help would be to join the OpenChia pool for whom I have also developed an app used for
          reporting your farm’s performance in the pool.
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingTop: 56,
          }}
        >
          <Button
            onPress={() => {
              Linking.canOpenURL('https://github.com/BubbleTrouble14/Chia-Wallet-Balance').then(
                (supported) => {
                  if (supported) {
                    Linking.openURL('https://github.com/BubbleTrouble14/Chia-Wallet-Balance');
                  } else {
                    console.log("Don't know how to open URI");
                  }
                }
              );
            }}
            icon={<MaterialCommunityIcons name="github" size={56} color="#fff" />}
            title="Github"
            buttonStyle={{ backgroundColor: theme.colors.accent, borderRadius: 8 }}
          />
          <View style={{ width: 36 }} />
          <Button
            onPress={() => {
              Linking.canOpenURL('https://openchia.io/').then((supported) => {
                if (supported) {
                  Linking.openURL('https://openchia.io/');
                } else {
                  console.log("Don't know how to open URI");
                }
              });
            }}
            icon={
              <OpenChiaIcon
                name="github"
                style={{ margin: 4, marginEnd: 6 }}
                size={48}
                color="#fff"
              />
            }
            buttonStyle={{ backgroundColor: theme.colors.primary, borderRadius: 8 }}
            title="OpenChia"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 32,
          }}
        >
          <Button
            onPress={() => {
              Linking.canOpenURL('https://discord.com/invite/2URS9H7RZn').then((supported) => {
                if (supported) {
                  Linking.openURL('https://discord.com/invite/2URS9H7RZn');
                } else {
                  console.log("Don't know how to open URI");
                }
              });
            }}
            icon={<MaterialCommunityIcons name="discord" size={36} color="#fff" />}
            title="Discord"
            buttonStyle={{ backgroundColor: '#5865F2', borderRadius: 8 }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 32,
          }}
        >
          <Button
            onPress={() => {
              Linking.canOpenURL('https://www.spacescan.io/').then((supported) => {
                if (supported) {
                  Linking.openURL('https://www.spacescan.io/');
                } else {
                  console.log("Don't know how to open URI");
                }
              });
            }}
            // icon={<MaterialCommunityIcons name="discord" size={36} color="#fff" />}
            title="spacescan.io"
            buttonStyle={{ backgroundColor: '#131C23', borderRadius: 8 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SupportScreen;
