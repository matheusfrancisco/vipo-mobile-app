import { useAuth } from '@/hooks/auth';
import React from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';
import { Alert } from 'react-native';

import envs from 'react-native-config';

const isExpectedResult = (result: any): result is GoogleLoginResponse =>
  Boolean(result.tokenId);

const SignInWithGoogle: React.FC = () => {
  const auth = useAuth();

  const handleFailure = () =>
    Alert.alert('Aconteceu um erro', 'Não foi possível entrar com o google');

  const handleSuccess = async (
    result: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if (!isExpectedResult(result)) {
      return handleFailure();
    }

    try {
      await auth.signIn({ token: result.tokenId });
    } catch (error) {
      console.error(error);
      handleFailure();
    }
  };

  return (
    <GoogleLogin
      clientId={envs.GOOGLE_AUTH_CLIENT_ID}
      buttonText="Entrar com o Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default SignInWithGoogle;
