import React from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import Input from '../../components/InputFormik';
import Select from '../../components/SelectItem';
import { TextItalic, Title } from '../../global';
import Client from '../../services/api';
import {
  Container,
  ContainerTextCreateAccount,
  Row,
  ContainerInput,
  TextTerms,
} from './styles';

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
  { id: 'Neutral', name: 'Neutro' },
];

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const onlyLetters = /^[aA-zZ\s]+$/;

  //#TODO create all validators
  const SignUpSchema = Yup.object().shape({
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
    gender: Yup.string().required('Você deve escolher um gênero'),
  });

  const handleSignUp = async (data: SignUpData) => {
    try {
      const res = await Client.http.post('/users', data);

      if (res.status === 201) {
        navigation.navigate('RegistrationCompleted');
      } else {
        navigation.goBack();
      }
    } catch (error: any) {
      const { data } = error.response;
      Alert.alert('Erro no cadastro', data.message);
    }
  };

  const initialValues: SignUpData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: new Date().toDateString(),
    gender: '',
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

            <Formik
              initialValues={initialValues}
              onSubmit={handleSignUp}
              validationSchema={SignUpSchema}>
              {({ handleSubmit }) => (
                <View>
                  <Row>
                    <ContainerInput>
                      <Input
                        name="name"
                        icon="user"
                        placeholder="Nome"
                        required={true}
                      />
                    </ContainerInput>
                    <ContainerInput>
                      <Input
                        name="lastName"
                        icon="user"
                        placeholder="Sobrenome"
                        required={true}
                      />
                    </ContainerInput>
                  </Row>

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

                  <Button title="Submit" onPress={handleSubmit}>
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
