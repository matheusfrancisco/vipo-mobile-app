import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { useAuth } from '@/hooks/auth';
import ProfileControllerFactory from '@/infra/controllers/factories/ProfileControllerFactory';

interface IUseEditProfileController {
  loading: boolean;
  editProfile(profile: {
    drinks: string[];
    foods: string[];
    musicals: string[];
  }): void;
}

export default function useEditProfileController(): IUseEditProfileController {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const auth = useAuth();

  const controller = useMemo(() => ProfileControllerFactory.getInstance(), []);

  const editProfile = useCallback<IUseEditProfileController['editProfile']>(
    async ({ drinks, foods, musicals }) => {
      setLoading(true);

      const { error } = await controller.patchUserProfile({
        userId: auth.user.id,
        drinks,
        foods,
        musicals,
      });

      setLoading(false);

      if (error)
        return Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
        );

      Alert.alert('Perfil atualizado com sucesso');

      navigation.navigate('Profile');
    },
    [auth, controller, navigation],
  );

  return { loading, editProfile };
}
