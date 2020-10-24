import React from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import InputSearch from '../../components/InputSearch';
import logo from '../../assets/logo.png';
import {Container, Title, SeachInput} from './styles';

const Seach: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <View>
              <Title>PROCURAR UM ROLÊ</Title>
            </View>

            <RectButton
              onPress={() => {
                navigation.navigate('MatcherParty');
              }}>
              <Image
                source={logo}
                style={{
                  width: 150,
                  height: 150,
                }}
              />
            </RectButton>

            <SeachInput>
              <InputSearch name="search" icon="search" placeholder="Search" />
            </SeachInput>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Seach;
