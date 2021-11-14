import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { useAuth } from '@/hooks/auth';
import ProfileControllerFactory from '@/infra/controllers/factories/ProfileControllerFactory';

interface IUseEditUserController {
  loading: boolean;
  editUser(user: { name: string; lastName: string; address: string }): void;
}

export default function useEditUserController(): IUseEditUserController {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const auth = useAuth();

  const controller = useMemo(() => ProfileControllerFactory.getInstance(), []);

  const editUser = useCallback<IUseEditUserController['editUser']>(
    async ({ name, lastName, address }) => {
      setLoading(true);

      const { error, response } = await controller.patchUser({
        id: auth.user.id,
        name,
        lastName,
        address,
      });

      setLoading(false);

      if (error)
        return Alert.alert('Aconteceu um erro ao salvar as informações');

      if (!response) return;

      await auth.updateUser(response);

      Alert.alert('Perfil atualizado com sucesso');

      navigation.goBack();
    },
    [auth, controller, navigation],
  );

  return { loading, editUser };
}
