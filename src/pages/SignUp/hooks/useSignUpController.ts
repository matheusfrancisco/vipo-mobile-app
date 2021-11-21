import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import ICreateUserDTO from '@/domain/dtos/ICreateUserDTO';
import SignUpControllerFactory from '@/infra/controllers/factories/SignUpControllerFactory';
import translateApiErrors from '@/utils/translateApiErrors';

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
      if (error) {
        const errorMessage = translateApiErrors(error);
        Alert.alert('Erro no cadastro', errorMessage);
        return;
      }

      navigation.navigate('RegistrationCompleted');
    },
    [controller, navigation],
  );

  return { createUser, loading };
}
