import React, { useMemo } from 'react';
import { ImageURISource } from 'react-native';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';

import IProfile from '@/domain/entities/IProfile';

import Header from '../../components/Header';
import Line from '../../components/Line';
import RecommendationsList from '../../components/RecommendationsList';
import { TextMinAsker } from '../../global';
import { useEditProfileController } from './hooks';
import { Container, HeaderText } from './styles';

type ParamList = {
  ProfileDrink: {
    profileInformations: IProfile;
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

  const controller = useEditProfileController();

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
      .filter((value) => value) as string[];

    const newProfileInformations = { ...profileInformations, musicals };

    await controller.editProfile(newProfileInformations);
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
