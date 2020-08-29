import React, { useRef, useCallback } from "react";
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import api from "../../services/api";

import getvalidationErrors from "../../utils/getValidationErrors";

import logo from "../../assets/logoVertical.png";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

import { Container, Title, BackToSingIn, BackToSingInText } from "./styles";

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const emailInputref = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("O nome obrigatório"),
          email: Yup.string()
            .email("Digite um e-mail válido")
            .required("E-mail obrigatório"),
          password: Yup.string().min(6, "No Mínio 6 dígitos"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        // await api.post('/users', { name, email, password });

        Alert.alert(
          "Cadastro realizado com sucesso",
          "Você já pode fazer login na aplicação"
        );

        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getvalidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert("Erro no cadastro", "Ocorreu um erro ao fazer cadastro");
      }
    },
    [navigation]
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image
              source={logo}
              style={{
                width: 200,
                height: 200,
              }}
            />
            <View>
              <Title>Crie sua conta</Title>
            </View>
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

              <Button onPress={() => formRef.current?.submitForm()}>
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSingIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#8257e6" />
        <BackToSingInText> Voltar para logon </BackToSingInText>
      </BackToSingIn>
    </>
  );
};

export default SignUp;
