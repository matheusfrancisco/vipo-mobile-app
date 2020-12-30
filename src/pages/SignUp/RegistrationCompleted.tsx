import React from 'react';
import {Image, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

import logo from '../../assets/logo.png';

import {Title, TextH3} from '../../global';
import Button from '../../components/Button';
import {Container} from './styles';
import { useNavigation } from '@react-navigation/native';

const RegistrationCompleted: React.FC = () => {
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
            <Image
              source={logo}
              style={{width: 218, height: 218, marginTop: 40}}
            />
            <Title>Cadastro concluído </Title>

            <TextH3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. .
            </TextH3>

            <Button style={{height: 51, width: 330, marginBottom: -50}}
            onPress={() => {
                  navigation.navigate('SignIn')
                }}>
              Fazer Login
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegistrationCompleted;
