import { useCallback, useMemo, useState } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import IGetNightOutRecommendationDTO from '@/domain/dtos/IGetNightOutRecommendationDTO';
import MatchsControllerFactory from '@/infra/controllers/factories/MatchsControllerFactory';

interface IUseMatchesController {
  loading: boolean;
  getMatches(payload: IGetNightOutRecommendationDTO): Promise<void>;
}

export default function useMatchesController(): IUseMatchesController {
  const [loading, setLoading] = useState(true);

  const controller = useMemo(() => MatchsControllerFactory.getInstance(), []);
  const navigation = useNavigation();

  const getMatches = useCallback<IUseMatchesController['getMatches']>(
    async (payload) => {
      setLoading(true);

      const { error, response } = await controller.getRecommendation(payload);

      setLoading(false);

      if (error) {
        console.error(error);
        return Alert.alert('Erro', 'Houve um erro ao buscar as recomendações');
      }

      navigation.navigate('Match', { recommendations: response });
    },
    [controller, navigation],
  );

  return { loading, getMatches };
}
