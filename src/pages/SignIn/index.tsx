import React, { useCallback, useRef } from 'react';
import { Platform, ScrollView, TextInput, Alert, Text } from 'react-native';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '@/components/Input';
import Button from '@/components/Button';
import ButtonFacebook from '@/components/Facebook';
import ButtonGoogle from '@/components/Google';
import logo from '@/assets/logo.png';

import getValidationErrors from '@/utils/getValidationErrors';
import { useAuth } from '@/hooks/auth';

import { Title, TextH3 } from '@/global';

import {
  ButtonText,
  Container,
  ContainerTextLoginSocial,
  KeyboardAvoidingView,
  SocialIcon,
  TitleHeader,
  VipoLogo,
} from './styles';
import SignInWithGoogle from '@/pages/SignIn/SignInWithGoogle';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});

interface SignInFormData {
  email: string;
  password: string;
}
//#TODO migrate this form to formik

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { signIn } = useAuth();

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

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        if (error.isAxiosError) {
          console.error(error.response.data);
        }

        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login');
      }
    },
    [signIn],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <VipoLogo source={logo} />

          <TitleHeader>
            <Title>Faça seu login</Title>
          </TitleHeader>

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
            <ButtonText onPress={() => navigation.navigate('ResetPassword')}>
              <TextH3>Esqueceu sua senha?</TextH3>
            </ButtonText>

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
              style={{ marginTop: 40 }}>
              Entrar
            </Button>

            <ButtonText onPress={() => navigation.navigate('SignUp')}>
              <Text>
                Ainda não tem conta? <TextH3>Crie aqui</TextH3>
              </Text>
            </ButtonText>

            <ContainerTextLoginSocial>
              <TextH3>Ou faça seu login com</TextH3>
            </ContainerTextLoginSocial>

            <SocialIcon style={{ marginTop: 30 }}>
              <ButtonFacebook onPress={() => console.log('Foi')}>
                Login with Facebook
              </ButtonFacebook>

              {/*
              #TODO Verify if this button's style matches the signinwithgoogle style
              If not, use the lib hook on this component to auth via google

              <ButtonGoogle onPress={() => console.log('Foi')}>
                Login with Google
              </ButtonGoogle> */}

              <SignInWithGoogle />
            </SocialIcon>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
