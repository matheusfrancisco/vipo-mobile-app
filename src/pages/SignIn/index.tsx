import React from 'react';
import { 
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import Input from '../../components/input';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonFacebook from '../../components/facebook';
import ButtonGoogle from '../../components/google';
import logo from '../../assets/logo.png';


import { 
  Container,
  Title,
  ForgotPaswordText,
  ForgotPassword,
  CreateAccountButton,
  CreateAccountButtonText,
  SocialIcon
} from './styles';

const SignIn: React.FC = () => { 
  const navigation = useNavigation();
  
  return  (
    <>
      <KeyboardAvoidingView 
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <Container>
            <Image source={logo} style={{
              width:150,
              height:150,
            }} />
            <View>
              <Title>Seu app para sair</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha"/>

            <Button 
              onPress={() => console.log("Foi")}
            >
              Entrar 
            </Button>
            <SocialIcon>
              <ButtonFacebook
                onPress={() => console.log("Foi")}
              >
                Login with Facebook
              </ButtonFacebook>
              <ButtonGoogle
                onPress={() => console.log("Foi")}
              >
                Login with Google
              </ButtonGoogle>
            </SocialIcon>
            <ForgotPassword onPress={() => {}}>
              <ForgotPaswordText>
                Esqueci minha senha
              </ForgotPaswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton onPress={()=>navigation.navigate}>
        <CreateAccountButtonText> Criar uma conta </CreateAccountButtonText>
      </CreateAccountButton>
    </>
  )
};

export default SignIn;