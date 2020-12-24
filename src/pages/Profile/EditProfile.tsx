import React, { useRef, useCallback } from 'react';
import IconEdit from 'react-native-vector-icons/Entypo';

import {useAuth} from '../../hooks/auth';
import {
  Header,
  IconBorder,
  Container,
  ImageItem,
  AlignIconHeader,
  ContainerButton,
  ContainerForm,
  UserAvatarButton,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView, ScrollView, TextInput, Alert} from 'react-native';
import Footer from '../../components/Footer';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
import getvalidationErrors from '../../utils/getValidationErrors';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import image from '../../assets/profile/profile.jpg'
interface ProfileFormData{
  name: string,
  adress: string,
  email: string

}

const EditProfile: React.FC = () => {
  const {user} = useAuth();
  const navigation = useNavigation();

  const undoPage = () => {
    navigation.goBack();
  };
  const formRef = useRef<FormHandles>(null);
  const emailInputref = useRef<TextInput>(null);
  const adressInputref = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string(),
          email: Yup.string()
            .email('Digite um e-mail válido')
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const {
          name,
          email,
        } = data;
        const formData = {
          name,
          email,
        };

        const response = await api.put('/profile', FormData);
        updateUser(response.data);

        Alert.alert(
          'Perfil atualizado com sucesso',
        );

        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getvalidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }
        
        Alert.alert('Erro na atualização do perfil',
         'Ocorreu um erro ao atualizar seu perfil, tente novamente.'
        );
      }
    },
    [navigation]
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
            <Header >
              <IconBorder onPress={undoPage} >
                <Icon
                  name="chevron-left"
                  color="#fff"
                  onPress={undoPage}
                />
              </IconBorder>
            </Header>
            <UserAvatarButton >
              <ImageItem source={image} />
            </UserAvatarButton>

            <AlignIconHeader >
              <IconEdit name="camera" size={20} color="#fff" />
            </AlignIconHeader>

            <Form initialData={user} ref={formRef} onSubmit={handleSignUp}>
              <ContainerForm>
                <Input
                  autoCapitalize="words"
                  name="name"
                  icon="user"
                  returnKeyType="next"
                  placeholder="Nome"
                  onSubmitEditing={() => {
                    adressInputref.current?.focus();
                  }}
                />
                <Input
                  ref={adressInputref}
                  autoCapitalize="none"
                  name="location"
                  icon="map-pin"
                  returnKeyType="next"
                  placeholder="Endereço"
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
                    emailInputref.current?.focus();
                  }}
                />
              </ContainerForm>
              </Form>
              <ContainerButton>
                <Button onPress={() => formRef.current?.submitForm()}>
                    Salvar
                </Button>
              </ContainerButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </>
  );
};

export default EditProfile;
