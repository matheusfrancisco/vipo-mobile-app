import { useAuth } from '@/hooks/auth';
import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import envs from 'react-native-config';

import { Container } from './styles';

GoogleSignin.configure({
  webClientId: envs.GOOGLE_AUTH_CLIENT_ID,
  offlineAccess: true,
});

// #tTODO Make this work with the api
const SignInWithGoogle: React.FC = () => {
  const auth = useAuth();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { serverAuthCode } = await GoogleSignin.signIn();

      if (!serverAuthCode) {
        throw new Error('Token not present');
      }

      await auth.signIn({ token: serverAuthCode });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.error('User cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.error('Already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.error('Play services not available');
      } else {
        console.error(error.message);
        Alert.alert(
          'Aconteceu um erro',
          'Não foi possível entrar com o google',
        );
      }
    }
  };

  return (
    <Container>
      <Icon.Button name="google" backgroundColor="#ff0000" onPress={signIn}>
        Entrar com o Google
      </Icon.Button>
    </Container>
  );
};

export default SignInWithGoogle;
