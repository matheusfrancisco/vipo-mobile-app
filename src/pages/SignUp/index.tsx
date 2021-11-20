import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Input from '../../components/InputFormik';
import Select from '../../components/SelectItem';
import { TextItalic, Title } from '../../global';
import { useSignUpController } from './hooks';
import { Container, ContainerTextCreateAccount, TextTerms } from './styles';

interface SignUpData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: string;
  gender: string;
}

const genderOptions = [
  { id: 'Male', name: 'Homem' },
  { id: 'Female', name: 'Mulher' },
  { id: 'Neuter', name: 'Neutro' },
];

const initialValues: SignUpData = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  birthDate: new Date().toDateString(),
  gender: '',
};

const onlyLettersRegex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

//#TODO create all validators
const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('O nome obrigatório')
    .trim()
    .matches(onlyLettersRegex, 'Somente letras são permitidas '),
  lastName: Yup.string()
    .required('O sobrenome obrigatório')
    .trim()
    .matches(onlyLettersRegex, 'Somente letras são permitidas '),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .trim()
    .required('E-mail obrigatório'),
  password: Yup.string().min(8, 'Deve possuir pelo menos 8 dígitos'),
  gender: Yup.string().required('Você deve escolher um gênero'),
});

const SignUp: React.FC = () => {
  const controller = useSignUpController();

  const handleSignUp = async ({
    name,
    lastName,
    email,
    gender,
    birthDate,
    password,
  }: SignUpData) =>
    controller.createUser({
      name,
      lastName,
      email,
      gender,
      birthDate: new Date(birthDate),
      password,
    });

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

            <Formik
              initialValues={initialValues}
              onSubmit={handleSignUp}
              validationSchema={SignUpSchema}>
              {({ handleSubmit, errors, isValid }) => (
                <View>
                  <Input
                    name="name"
                    icon="user"
                    placeholder="Nome"
                    required={true}
                  />
                  <Input
                    name="lastName"
                    icon="user"
                    placeholder="Sobrenome"
                    required={true}
                  />
                  <Input
                    name="email"
                    icon="mail"
                    placeholder="E-mail"
                    required={true}
                  />

                  <Input
                    secureTextEntry
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    required={true}
                  />
                  <DatePicker
                    placeholder="Data de nascimento:"
                    name="birthDate"
                    required
                  />

                  <Select
                    required
                    label={'Escolha um gênero:'}
                    items={genderOptions}
                    defaultValue="Gênero"
                  />

                  <TextTerms>
                    Ao clicar em Cadastrar, você concorda com nossos
                    <TextItalic>
                      {' '}
                      Termos, Política de dados e Política de Cookies.
                    </TextItalic>
                  </TextTerms>

                  <Button
                    title="Submit"
                    onPress={handleSubmit}
                    disabled={!isValid}>
                    Cadastrar
                  </Button>
                </View>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
