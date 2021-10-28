/* eslint-disable import/order */
import React, { useCallback } from 'react';
import {
  Platform,
  ScrollView,
  TextInput,
  Alert,
  Text,
  View,
} from 'react-native';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import InputF from '@/components/InputFormik';
import Button from '@/components/Button';
import ButtonGoogle from '@/components/Google';
import logo from '@/assets/logo.png';

import { Formik, ErrorMessage, Form } from 'formik';
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

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  const { signIn } = useAuth();

  const initialValues: SignInFormData = {
    email: '',
    password: '',
  };

  const Submit = useCallback(async (data: SignInFormData) => {
    try {
      console.log(data.email, data.password);
      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  });

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

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={(values) => console.log(values.email)}>
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              submitForm,
              touched,
              errors,
            }) => (
              <View>
                <InputF
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange('email')}
                />

                {touched.email && errors.email ? (
                  <Text style={{ marginTop: -10, marginBottom: 10 }}>
                    {errors.email}
                  </Text>
                ) : null}

                <InputF
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  secureTextEntry
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password ? (
                  <Text style={{ marginTop: -10 }}>{errors.password}</Text>
                ) : null}
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
