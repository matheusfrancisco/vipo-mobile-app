import React, {useCallback, useRef} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
  Text
} from 'react-native';
import * as Yup from 'yup';

import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';

import getValidationErrors from '../../utils/getValidationErrors';
import {useAuth} from '../../hooks/auth';

import {Title3, TextMinAsker} from '../../global';

import {Container, TitleHeader } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const ResetPassword: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {fakeSingIn} = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
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

        Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login');
      }
    },
    [fakeSingIn],
  );

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
              style={{width: 170, height: 170, marginTop: 40}}
            />
            <TitleHeader>
              <Title3>Esqueceu sua senha ?</Title3>
            </TitleHeader>
            <TextMinAsker>
              Não esquenta, vamos dar um jeito nisso..
            </TextMinAsker>
            <Form ref={formRef} onSubmit={handleSignIn}>
                <Input
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                />
              </Form>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Button
                onPress={() => {
                  // formRef.current?.submitForm();
                  navigation.navigate('EmailSend')
                }}
                style={{
                  marginBottom: -60,
                  marginTop: 40,
                  width: 300,
                  height: 45,
                }}>
                Recuperar senha
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ResetPassword;
