import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Container, HeaderText } from './styles';
import { TextMinAsker } from '../../global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Line from '../../components/Line';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import BodyProfileDrink from './Body';

interface IProfileDrink {
    profileInformations: {
        foods: Array<string>;
        drinks: Array<string>;
        musicals: Array<string>;
    }
  }

type ParamList = {
    ProfileDrink: {
      profileInformations: IProfileDrink;
    };
  };

export type EditProfileParams = RouteProp<ParamList, 'ProfileDrink'>;


const ProfileDrink: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: { profileInformations },
  } = useRoute<EditProfileParams>();

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
              text="Próximo"
              onPress={() => {
                navigation.navigate('ProfileFood');
              }}
              onPressBack={undoPage}
            />
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextMinAsker>suas bebibas favoritas</TextMinAsker>
            </HeaderText>
            <Line />
            <BodyProfileDrink />
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileDrink;
