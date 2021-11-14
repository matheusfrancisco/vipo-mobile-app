import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Alert,
  Platform,
} from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import { useEditProfileController } from './hooks';
import {
  HeaderProfile,
  IconBorder,
  Container,
  ContainerButton,
  ContainerForm,
} from './styles';

interface ProfileFormData {
  name: string;
  address: string;
  lastName: string;
}

//#TODO move to a comum place to all components use.
type ParamList = {
  EditProfile: {
    user: ProfileFormData;
  };
};

export type EditProfileParams = RouteProp<ParamList, 'EditProfile'>;

const EditProfile: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { user },
  } = useRoute<EditProfileParams>();

  const formRef = useRef<FormHandles>(null);
  const lastNameInputRef = useRef<TextInput>(null);
  const adressInputref = useRef<TextInput>(null);

  const controller = useEditProfileController();

  const handleSignUp = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          lastName: Yup.string().required(),
          address: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        const { name, lastName, address } = data;

        const formData = {
          name,
          lastName,
          address,
        };
        console.log(formData);

        await controller.editProfile({
          name,
          lastName,
          address,
        });
      } catch (error) {
        // if (error instanceof Yup.ValidationError) {
        //   const errors = getvalidationErrors(error);
        //   formRef.current?.setErrors(errors);
        //   return;
        // }
        console.log(error);

        Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
        );
      }
    },
    [controller],
  );

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
            <HeaderProfile>
              <IconBorder onPress={navigation.goBack}>
                <Icon
                  name="chevron-left"
                  color="#fff"
                  onPress={navigation.goBack}
                />
              </IconBorder>
            </HeaderProfile>

            <Form initialData={user} ref={formRef} onSubmit={handleSignUp}>
              <ContainerForm>
                <Input
                  autoCapitalize="words"
                  name="name"
                  icon="user"
                  returnKeyType="next"
                  placeholder="Nome"
                  onSubmitEditing={() => {
                    lastNameInputRef.current?.focus();
                  }}
                />
                <Input
                  ref={lastNameInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="lastName"
                  icon="user"
                  placeholder="Sobrenome"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    adressInputref.current?.focus();
                  }}
                />
                <Input
                  ref={adressInputref}
                  autoCapitalize="none"
                  name="address"
                  icon="map-pin"
                  returnKeyType="next"
                  placeholder="Endereço"
                />
              </ContainerForm>
            </Form>
            {/* #TODO move save button to bottom */}
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
