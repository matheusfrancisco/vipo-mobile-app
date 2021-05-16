import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Container, HeaderText } from './styles';

import { TextMinAsker } from '../../global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Line from '../../components/Line';
import BodyProfileMusic from './Body';

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

type ProfileMusicParams = RouteProp<ParamList, 'ProfileDrink'>;

const ProfileMusic: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { profileInformations },
  } = useRoute<ProfileMusicParams>();

  console.log(profileInformations);

  const undoPage = () => {
    navigation.goBack();
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Header
              text="Salvar"
              onPress={() => {
                navigation.navigate('Profile');
              }}
              onPressBack={undoPage}
            />
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextMinAsker>seus gostos musicais</TextMinAsker>
            </HeaderText>
            <Line />

            <BodyProfileMusic />
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileMusic;
