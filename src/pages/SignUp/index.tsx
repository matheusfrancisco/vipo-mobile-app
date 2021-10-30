import React, { useState, useEffect } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';

import Input from '../../components/InputFormik';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import getvalidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/logo.png';

import { Title, TextItalic } from '../../global';

import Client from '../../services/api';
import RNPickerSelect from 'react-native-picker-select';

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
import { Formik } from 'formik';

interface SignUpData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  date: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  /* const dateNow = new Date();
  const [date, setDate] = useState(dateNow);
  const [gender, setGender] = useState({ title: 'Gênero' });
  const [selectedGender, setSelectedGender] = useState(''); */

  /*   useEffect(() => {
    if (selectedGender) {
      return setGender({ title: selectedGender });
    }
    return setGender({ title: 'Gênero' });
  }, [selectedGender]);
 */
  /* const handleSignUp = async (data: SignUpData) => {
    try {
      const onlyLetters = /^[aA-zZ\s]+$/;

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

        return;
      }

      Alert.alert('Erro no cadastro', 'Ocorreu um erro ao fazer cadastro');
    }
  };
 */

  const initialValues: SignUpData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    date: new Date().toDateString(),
  };

  const handleSignUp = (values: SignUpData) => {
    console.log(values);
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

            <Formik initialValues={initialValues} onSubmit={handleSignUp}>
              {({ handleSubmit }) => (
                <View>
                  <Row>
                    <ContainerInput>
                      <Input
                        name="name"
                        icon="user"
                        placeholder="Nome"
                        require={true}
                      />
                    </ContainerInput>
                    <ContainerInput>
                      <Input
                        name="lastName"
                        icon="user"
                        placeholder="Sobrenome"
                        require={true}
                      />
                    </ContainerInput>
                  </Row>

                  <Input
                    name="email"
                    icon="mail"
                    placeholder="E-mail"
                    require={true}
                  />

                  <Input
                    secureTextEntry
                    name="password"
                    icon="lock"
                    placeholder="Senha"
                    require={true}
                  />

                  <DatePicker />

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
