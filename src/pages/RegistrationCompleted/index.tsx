import React, { useCallback, useRef } from "react";
import {
  Text
} from "react-native";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { FormHandles } from "@unform/core";

import logo from "../../assets/logo.png";

import {Title, TextDescription} from "../../global"
import Button from "../../components/Button"
import {
  Container,
  ContainerTitle,
  ContainerTextDescription,

} from "./styles";

const RegistrationCompleted: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);



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
                width: 218,
                height: 218,
                marginTop: 40,
              }}
            />
            <Title>Cadastro concluído </Title>
         
            <TextDescription> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. .</TextDescription>
         
            <Button  style={{
                height: 51,
                width: 330,
                marginBottom: -50
              }}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegistrationCompleted;
