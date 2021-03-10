import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';

import getvalidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.png';

import { Title, TextItalic } from '../../global';

import api from '../../services/api';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

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

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputref = useRef<TextInput>(null);
  const lastName = useRef<TextInput>(null);
  const genderRef = useRef<RNPickerSelect>(null);
  const birthDateRef = useRef<DatePicker>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const dateNow = new Date();
  const [date, setDate] = useState(dateNow.toJSON());
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

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome obrigatório'),
        lastName: Yup.string().required('O sobrenome obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'No Mínio 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newUser = {
        ...data,
        gender: selectedGender,
        birthDate: date,
      };
      
      const res = await api.post('/users', newUser);

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
                    icon="mail"
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
                    icon="mail"
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
                ref={birthDateRef}
                style={{ width: 330 }}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1760-05-01"
                maxDate="2020-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 15,
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderRadius: 10,
                    borderColor: '#dadfe2',
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
              <Gender>
                <RNPickerSelect
                  ref={genderRef}
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
