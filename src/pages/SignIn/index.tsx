import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonFacebook from '../../components/facebook';
import ButtonGoogle from '../../components/google';
import logo from '../../assets/logo.png';


import {
  Container,
  Title,
  ForgotPaswordText,
  ForgotPassword,
  CreateAccountButton,
  CreateAccountButtonText,
  SocialIcon
} from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  
  const handleSingIn = useCallback((data: object) =>{
    console.log(data);
  }, []);

  return  (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container>
            <Image source={logo} style={{
              width:150,
              height:150,
            }} />
            <View>
              <Title>Seu app para sair</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSingIn}>
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha"/>

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
              <SocialIcon>
              <ButtonFacebook
                onPress={() => console.log("Foi")}
              >
                Login with Facebook
              </ButtonFacebook>
              <ButtonGoogle
                onPress={() => console.log("Foi")}
              >
                Login with Google
              </ButtonGoogle>
            </SocialIcon>
            </Form>
            <ForgotPassword onPress={() => {}}>
              <ForgotPaswordText>
                Esqueci minha senha
              </ForgotPaswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={()=>navigation.navigate("SingUp")}>
        <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
};

export default SignIn;
