import React, { useRef, useState, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import RNPickerSelect from 'react-native-picker-select';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Input from '../../components/Input';
import { Title, TextItalic } from '../../global';
import Client from '../../services/api';
import getvalidationErrors from '../../utils/getValidationErrors';

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

import {
  Container,
  ContainerTextCreateAccount,
  ContainerButton,
  Row,
  DatePickerText,
  Gender,
  GenderText,
  TextTerms,
  ContainerInput,
} from './styles';

//#TODO migrate this form to formik
const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputref = useRef<TextInput>(null);
  const lastName = useRef<TextInput>(null);
  const genderRef = useRef<RNPickerSelect>(null);
  const birthDateRef = useRef(null);
  const passwordInputRef = useRef<TextInput>(null);

  const dateNow = new Date();
  const [date, setDate] = useState(dateNow);
  const [gender, setGender] = useState({ title: 'Gênero' });
  const [selectedGender, setSelectedGender] = useState('');

  useEffect(() => {
    if (selectedGender) {
      return setGender({ title: selectedGender });
    }
    return setGender({ title: 'Gênero' });
  }, [selectedGender]);

  const handleSignUp = async (data: SignUpData) => {
    try {
      formRef.current?.setErrors({});
      const onlyLetters = /^[aA-zZ\s]+$/;

      const schema = Yup.object().shape({
        name: Yup.string()
          .required('O nome obrigatório')
          .matches(onlyLetters, 'Somente letras são permitidas '),
        lastName: Yup.string()
          .required('O sobrenome obrigatório')
          .matches(onlyLetters, 'Somente letras são permitidas '),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(8, 'Deve possuir pelo menos 8 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newUser = {
        ...data,
        gender: selectedGender,
        birthDate: date.toJSON(),
      };

      const res = await Client.http.post('/users', newUser);

      if (res.status == 201) {
        console.log('created');
        navigation.navigate('RegistrationCompleted');
      } else {
        navigation.goBack();
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getvalidationErrors(error);
        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer cadastro');
    }
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Image
              source={logo}
              style={{
                width: 160,
                height: 160,
                marginTop: 130,
              }}
            />
            <ContainerTextCreateAccount>
              <Title>Crie sua conta</Title>
            </ContainerTextCreateAccount>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Row>
                <ContainerInput>
                  <Input
                    autoCapitalize="words"
                    name="name"
                    icon="user"
                    placeholder="Nome"
                    onSubmitEditing={() => {
                      lastName.current?.focus();
                    }}
                  />
                </ContainerInput>
                <ContainerInput>
                  <Input
                    ref={lastName}
                    autoCapitalize="words"
                    name="lastName"
                    icon="user"
                    placeholder="Sobrenome"
                    onSubmitEditing={() => {
                      emailInputref.current?.focus();
                    }}
                  />
                </ContainerInput>
              </Row>

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
                  birthDateRef.current?.onPressDate();
                }}
              />
              <DatePickerText>Data de nascimento: </DatePickerText>
              <DatePicker
                date={date}
                setDate={(selectedDate) => setDate(selectedDate)}
              />
              <Gender>
                <RNPickerSelect
                  ref={genderRef}
                  placeholder={{}}
                  onValueChange={(value) => setSelectedGender(value)}
                  items={[
                    { label: 'Female', value: 'Female' },
                    { label: 'Male', value: 'Male' },
                    { label: 'Neuter', value: 'Neuter' },
                  ]}
                  pickerProps={{
                    accessibilityLabel: gender.title,
                  }}>
                  <GenderText>{gender.title}</GenderText>
                </RNPickerSelect>
              </Gender>
              <TextTerms>
                Ao clicar em Cadastrar, você concorda com nossos
                <TextItalic>
                  {' '}
                  Termos, Política de dados e Política de Cookies.
                </TextItalic>
              </TextTerms>
              <ContainerButton>
                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
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
