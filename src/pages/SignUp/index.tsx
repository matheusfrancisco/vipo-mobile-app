import React from 'react';
import { 
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import Icon  from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile';
import Input from '../../components/input';
import Button from '../../components/button';

import logo from '../../assets/logo.png';


import { 
  Container,
  Title,
  BackToSingIn as BackToSingIn,
  BackToSingInText as BackToSingInText
} from './styles';


const SignUp: React.FC = () => { 
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
              <Title>Crie sua conta</Title>
            </View>
            <Form onSubmit={() => {}}>
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha"/>

              <Button 
                onPress={() => console.log("Foi")}
              >
                Entrar 
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSingIn onPress={()=> navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff"/>
        <BackToSingInText> Voltar para logon </BackToSingInText>
      </BackToSingIn>
    </>
  )
};

export default SignUp;