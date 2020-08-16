import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import ButtonFacebook from '../../components/Facebook';
import ButtonGoogle from '../../components/Google';
import logo from '../../assets/logo.png';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  ForgotPaswordText,
  ForgotPassword,
  CreateAccountButton,
  CreateAccountButtonText,
  SocialIcon,
} from './styles';


interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { signIn, fakeSingIn } = useAuth();
  
  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        
        await fakeSingIn();
        // await signIn({
        //   email: data.email,
        //   password: data.password,
        // })
       
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login',
        );
      }
}, [signIn]);

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

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

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
      <CreateAccountButton onPress={()=>navigation.navigate("SignUp")}>
        <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
};

export default SignIn;
