import React, { useMemo } from 'react';
import { Alert, ImageURISource } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Container, HeaderText } from './styles';

import { TextMinAsker } from '../../global';
import Header from '../../components/Header';
import Line from '../../components/Line';
import RecommendationsList from '../../components/RecommendationsList';
import { Formik } from 'formik';
import Client from '../../services/api';

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

interface IMusicOption {
  name: string;
  link: ImageURISource;
}

const musicOptions: IMusicOption[] = [
  {
    link: require('../../assets/style-music/eletronica.jpeg'),
    name: 'Eletronica',
  },
  { link: require('../../assets/style-music/funk.jpg'), name: 'Funk' },
  { link: require('../../assets/style-music/pagode.jpg'), name: 'Pagode' },
  { link: require('../../assets/style-music/rock.jpg'), name: 'Rock' },
  { link: require('../../assets/style-music/forró.jpg'), name: 'Forró' },
  { link: require('../../assets/style-music/jazz.jpeg'), name: 'Jazz' },
  { link: require('../../assets/style-music/pop.jpg'), name: 'Pop' },
  { link: require('../../assets/style-music/reggae.jpeg'), name: 'Reggae' },
  { link: require('../../assets/style-music/samba.jpg'), name: 'Samba' },
  {
    link: require('../../assets/style-music/sertanejo.jpg'),
    name: 'Sertanejo',
  },
  { link: require('../../assets/style-music/hiphop.jpg'), name: 'Hip Hop' },
  { link: require('../../assets/style-music/mpb.jpg'), name: 'MPB' },
  { link: require('../../assets/style-music/indie.jpg'), name: 'Indie' },
  {
    link: require('../../assets/style-music/reggaeton.jpg'),
    name: 'Reggaeton',
  },
  { link: require('../../assets/style-music/rap.jpg'), name: 'Rap' },
  {
    link: require('../../assets/style-music/rockalternativo.jpeg'),
    name: 'Rock Alternativo',
  },
];

type ProfileMusicParams = RouteProp<ParamList, 'ProfileDrink'>;

const ProfileMusic: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { profileInformations },
  } = useRoute<ProfileMusicParams>();

  const initialValues = useMemo(
    () => ({
      musicals: musicOptions.reduce(
        (acc, option) => ({
          ...acc,
          [option.name]: profileInformations.musicals.includes(option.name),
        }),
        {},
      ),
    }),
    [profileInformations.musicals],
  );

  const handleSubmit = async (values: typeof initialValues) => {
    const musicals = Object.entries(values.musicals)
      .map(([name, value]) => (value ? name : undefined))
      .filter((value) => value);

    const newProfileInformations = { ...profileInformations, musicals };

    try {
      await Client.http.patch('profiles', {
        profileInformations: newProfileInformations,
      });
    } catch (error) {
      console.error(error.message);
      Alert.alert('Aconteceu um erro ao salvar as informações');
    }

    navigation.navigate('Profile');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ submitForm }) => (
        <>
          <Header
            text="Salvar"
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
              <TextMinAsker>seus gostos musicais</TextMinAsker>
            </HeaderText>
            <Line />

            <RecommendationsList
              recommendations={musicOptions}
              fieldName="musicals"
            />
          </Container>
        </>
      )}
    </Formik>
  );
};

export default ProfileMusic;
