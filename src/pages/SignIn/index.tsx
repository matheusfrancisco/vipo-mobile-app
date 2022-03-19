/* eslint-disable import/order */
import React, { useCallback } from 'react';
import { Alert, Platform, ScrollView, Text, View } from 'react-native';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import Input from '@/components/InputFormik';
import Button from '@/components/Button';
import logo from '@/assets/logo.png';

import { Formik } from 'formik';
import { useAuth } from '@/hooks/auth';

import { Title, TextH3, TextH3Link } from '@/global';

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

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um e-mail válido')
      .required('E-mail obrigatório')
      .trim(),
    password: Yup.string().required('Senha obrigatória'),
  });

  const navigation = useNavigation();

  const { signIn } = useAuth();

  const initialValues: SignInFormData = {
    email: '',
    password: '',
  };

  const onSubmit = useCallback(
    async (data: SignInFormData) => {
      const { error } = await signIn({
        email: data.email,
        password: data.password,
      });

      if (error) Alert.alert('Erro no login', error);
    },
    [signIn],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView keyboardShouldPersistTaps="handled" scrollEnabled={false}>
        <Container>
          <VipoLogo source={logo} />

          <TitleHeader>
            <Title>Faça seu login</Title>
          </TitleHeader>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <View>
                <Input
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  required={true}
                />

                <Input
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  secureTextEntry
                  required={true}
                />

                <ButtonText
                  onPress={() => navigation.navigate('ResetPassword')}>
                  <TextH3Link>Esqueceu sua senha?</TextH3Link>
                </ButtonText>

                <Button
                  title="Submit"
                  onPress={handleSubmit}
                  style={{ marginTop: 40 }}>
                  Entrar
                </Button>

                <ButtonText onPress={() => navigation.navigate('SignUp')}>
                  <Text style={{ color: '#470a68' }}>
                    Ainda não tem conta? <TextH3Link>Crie aqui</TextH3Link>
                  </Text>
                </ButtonText>
              </View>
            )}
          </Formik>

          <ContainerTextLoginSocial>
            <TextH3>Ou faça seu login com</TextH3>
          </ContainerTextLoginSocial>

          <SocialIcon style={{ marginTop: 20 }}>
            {/*
              #TODO Verify if this button's style matches the signinwithgoogle style
              If not, use the lib hook on this component to auth via google
              <ButtonGoogle onPress={() => console.log('Foi')}>
                Login with Google
              </ButtonGoogle> */}

            <SignInWithGoogle />
          </SocialIcon>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
