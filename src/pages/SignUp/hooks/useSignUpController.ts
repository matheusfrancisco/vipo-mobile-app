import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import ICreateUserDTO from '@/domain/dtos/ICreateUserDTO';
import SignUpControllerFactory from '@/infra/controllers/factories/SignUpControllerFactory';

interface IUseSignUpController {
  loading: boolean;
  createUser: (data: ICreateUserDTO) => Promise<void>;
}

export default function useSignUpController(): IUseSignUpController {
  const [loading, setLoading] = useState(false);

  const controller = useMemo(() => SignUpControllerFactory.getInstance(), []);

  const navigation = useNavigation();

  const createUser = useCallback<IUseSignUpController['createUser']>(
    async (user) => {
      setLoading(true);

      const { error } = await controller.createUser(user);

      setLoading(false);
      if (error) return Alert.alert('Erro no cadastro', error);

      navigation.navigate('RegistrationCompleted');
    },
    [controller, navigation],
  );

  return { createUser, loading };
}
