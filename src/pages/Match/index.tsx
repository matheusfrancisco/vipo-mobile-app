import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLocalion from 'react-native-vector-icons/Octicons';

import IRecommendation from '@/domain/entities/IRecommendation';

import Line from '../../components/Line';
import { TextMin, TextH3 } from '../../global';
import RecommendationDetails from './RecommendationDetails';
import {
  ImageBanner,
  Title,
  Description,
  Informations,
  MarginText,
  PositionIcon,
  Footer,
} from './styles';

type ParamList = {
  Match: {
    recommendations: IRecommendation[];
  };
};

type MatchParams = RouteProp<ParamList, 'Match'>;

const Tab = createMaterialTopTabNavigator();

const Match: React.FC = () => {
  const {
    params: { recommendations },
  } = useRoute<MatchParams>();

  const mockedRecommendations = recommendations.map((r) => ({
    id: 1,
    name: r.name,
    instagram: '@sputinick',
    banner: 'https://sputnikbar.com/img/sobre/30-11-2018.jpg',
    description: r.description,
    ticket: 'As pessoas costuman gastar R$ 60,00 neste local',
    bonus: 'Indo pelo App você ganha um shot de boas-vindas quando chegar lá',
    openAt: 'Seg à Dom - 18:00 até 22:00',
    location: 'Vila Madalena',
  }));
  if (mockedRecommendations.length === 0) {
    return null;
  }

  return (
    <Tab.Navigator lazy={true} tabBar={() => null} swipeEnabled={true}>
      {mockedRecommendations.map((recommendation, index) => {
        const hasNextRoute = index < mockedRecommendations.length - 1;
        const nextRoute = `match-route-${index + 1}`;
        return (
          <Tab.Screen
            key={index}
            name={`match-route-${index}`}
            component={function buildRecommendationDetails() {
              return (
                <RecommendationDetails
                  {...recommendation}
                  nextRoute={hasNextRoute ? nextRoute : null}
                />
              );
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default Match;
