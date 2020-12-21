import React, { useRef, useCallback, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
  CheckBox,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getvalidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.png';

import { Title, TextH4, TextMin } from '../../global';

import api from '../../services/api';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

import {
  Container,
  ContainerTextCreateAccount,
  ContainerButton,
  TermsText,
  ColorText,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputref = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const checkRef = useRef<CheckBox>(null);

  const [checked, setChecked] = useState(false);

  const handleSignUp = useCallback(
    async (data: SignUpData) => {
      try {
      
        formRef.current?.setErrors({});
        
        const schema = Yup.object().shape({
          name: Yup.string().required('O nome obrigatório'),
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail obrigatório'),
          password: Yup.string().min(6, 'No Mínio 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const res = await api.post('/users', data);
        
        if (res.status == 201) {
          Alert.alert(
            'Cadastro realizado com sucesso',
            'Você já pode fazer login na aplicação',
          );
        }

        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getvalidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer cadastro');
      }
    },
    [navigation],
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
              style={{
                width: 218,
                height: 218,
                marginTop: 90,
              }}
            />
            <ContainerTextCreateAccount>
              <Title>Crie sua conta</Title>
            </ContainerTextCreateAccount>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                onSubmitEditing={() => {
                  emailInputref.current?.focus();
                }}
              />

              <Input
                ref={emailInputref}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
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
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              /> 
              <CheckBox
                value={checked}
                onValueChange={setChecked}
              />
              
              <TermsText>
                <TextMin>
                  Você concorda com nossos
                  <ColorText>
                    <TextH4>termos de privacidade</TextH4>
                  </ColorText>
                </TextMin>
              </TermsText>
        

              <ContainerButton>
                <Button
                  onPress={() => {
                    if (!checked) {
                      Alert.alert('Por favor, aceite nossos termos de privacidade');
                    } else {
                      formRef.current?.submitForm()
                    }
                  }}
                >
                  Cadastrar
                </Button>
              </ContainerButton>
            </Form>
          </Container>
     

        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
