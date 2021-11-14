import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { useAuth } from '@/hooks/auth';
import ProfileControllerFactory from '@/infra/controllers/factories/ProfileControllerFactory';

interface IUseEditProfileController {
  loading: boolean;
  editProfile(profile: {
    name: string;
    lastName: string;
    address: string;
  }): void;
}

export default function useEditProfileController(): IUseEditProfileController {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const auth = useAuth();

  const controller = useMemo(() => ProfileControllerFactory.getInstance(), []);

  const editProfile = useCallback<IUseEditProfileController['editProfile']>(
    async ({ name, lastName, address }) => {
      setLoading(true);

      const { error, response } = await controller.patchUserProfile({
        id: auth.user.id,
        name,
        lastName,
        address,
      });

      setLoading(false);

      if (error)
        return Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
        );

      if (!response) return;

      await auth.updateUser(response);

      Alert.alert('Perfil atualizado com sucesso');

      navigation.goBack();
    },
    [auth, controller, navigation],
  );

  return { loading, editProfile };
}
