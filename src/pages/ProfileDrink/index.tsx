import React, { useMemo } from 'react';
import { ImageURISource } from 'react-native';
import { Container, HeaderText } from './styles';
import { TextMinAsker } from '../../global';
import Header from '../../components/Header';
import Line from '../../components/Line';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import RecommendationsList from '../../components/RecommendationsList';

interface IProfileDrink {
  foods: Array<string>;
  drinks: Array<string>;
  musicals: Array<string>;
}

type ParamList = {
  ProfileDrink: {
    profileInformations: IProfileDrink;
  };
};

export type EditProfileParams = RouteProp<ParamList, 'ProfileDrink'>;

interface IDrinkOption {
  name: string;
  link: ImageURISource;
}

const drinksOptions: Array<IDrinkOption> = [
  {
    name: 'Cachaça',
    link: require('../../assets/taste-drink/sugarcaneliquor.jpg'),
  },
  {
    name: 'Café',
    link: require('../../assets/taste-drink/coffee.jpg'),
  },
  {
    name: 'Cerveja',
    link: require('../../assets/taste-drink/beer.jpg'),
  },
  {
    name: 'Cerveja artesanal',
    link: require('../../assets/taste-drink/craftbeer.jpg'),
  },
  {
    name: 'Chopp',
    link: require('../../assets/taste-drink/chopp.jpg'),
  },
  {
    name: 'Gin',
    link: require('../../assets/taste-drink/gin.jpeg'),
  },
  {
    name: 'Tequila',
    link: require('../../assets/taste-drink/tequila.jpg'),
  },
  {
    name: 'Vinho',
    link: require('../../assets/taste-drink/wine.jpeg'),
  },
  {
    name: 'Vodca',
    link: require('../../assets/taste-drink/vodkadrink.png'),
  },
  {
    name: 'Whisky',
    link: require('../../assets/taste-drink/whisky.png'),
  },
  {
    name: 'Champagne',
    link: require('../../assets/taste-drink/champagne.jpg'),
  },
  {
    name: 'Conhaque',
    link: require('../../assets/taste-drink/brandy.jpeg'),
  },
  {
    name: 'Refrigerante',
    link: require('../../assets/taste-drink/soda.jpg'),
  },
  {
    name: 'Suco',
    link: require('../../assets/taste-drink/juice.jpg'),
  },
  {
    name: 'Saquê',
    link: require('../../assets/taste-drink/saque.jpg'),
  },
  {
    name: 'Licor',
    link: require('../../assets/taste-drink/liquor.jpg'),
  },
];

const ProfileDrink: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { profileInformations },
  } = useRoute<EditProfileParams>();

  const initialValues = useMemo(
    () => ({
      drinks: drinksOptions.reduce(
        (acc, option) => ({
          ...acc,
          [option.name]: profileInformations.drinks.includes(option.name),
        }),
        {},
      ),
    }),
    [profileInformations.drinks],
  );

  const handleSubmit = (values: typeof initialValues) => {
    const drinks = Object.entries(values.drinks)
      .map(([name, value]) => (value ? name : undefined))
      .filter((value) => value);

    navigation.navigate('ProfileFood', {
      profileInformations: { ...profileInformations, drinks },
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
            onPressBack={() => navigation.goBack()}
          />

          <Container keyboardShouldPersistTaps="handled">
            <HeaderText>
              <TextMinAsker>
                Nos ajude a indicar os lugares de acordo com
              </TextMinAsker>

              <TextMinAsker>suas bebibas favoritas</TextMinAsker>
            </HeaderText>

            <Line />

            <RecommendationsList
              recommendations={drinksOptions}
              fieldName="drinks"
            />
          </Container>
        </>
      )}
    </Formik>
  );
};

export default ProfileDrink;
