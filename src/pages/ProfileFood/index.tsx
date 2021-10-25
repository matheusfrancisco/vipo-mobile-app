import React, { useMemo } from 'react';
import { ImageURISource } from 'react-native';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Formik } from 'formik';

import IProfile from '@/domain/entities/IProfile';

import Header from '../../components/Header';
import Line from '../../components/Line';
import RecommendationsList from '../../components/RecommendationsList';
import { TextMinAsker } from '../../global';
import { Container, HeaderText } from './styles';

type ParamList = {
  ProfileDrink: {
    profileInformations: IProfile;
  };
};

type ProfileFoodParams = RouteProp<ParamList, 'ProfileDrink'>;

interface IFoodOption {
  name: string;
  link: ImageURISource;
}

const foodOptions: IFoodOption[] = [
  { link: require('../../assets/taste-food/burguer.png'), name: 'Hambúrguer' },
  { link: require('../../assets/taste-food/snack.jpeg'), name: 'Petisco' },
  { link: require('../../assets/taste-food/vegan.jpg'), name: 'Vegana' },
  {
    link: require('../../assets/taste-food/vegetarian.jpg'),
    name: 'Vegetariana',
  },
];

const ProfileFood: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { profileInformations },
  } = useRoute<ProfileFoodParams>();

  const initialValues = useMemo(
    () => ({
      foods: foodOptions.reduce(
        (acc, option) => ({
          ...acc,
          [option.name]: profileInformations.foods.includes(option.name),
        }),
        {},
      ),
    }),
    [profileInformations.foods],
  );

  const handleSubmit = (values: typeof initialValues) => {
    const foods = Object.entries(values.foods)
      .map(([name, value]) => (value ? name : undefined))
      .filter((value) => value);

    navigation.navigate('ProfileMusic', {
      profileInformations: { ...profileInformations, foods },
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ submitForm }) => (
        <>
          <Header
            text="Próximo"
            onPress={() => {
              submitForm();
            }}
            onPressBack={navigation.goBack}
          />

          <Container keyboardShouldPersistTaps="handled">
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextMinAsker>suas comidas preferidas</TextMinAsker>
            </HeaderText>
            <Line />

            <RecommendationsList
              recommendations={foodOptions}
              fieldName="foods"
            />
          </Container>
        </>
      )}
    </Formik>
  );
};

export default ProfileFood;
