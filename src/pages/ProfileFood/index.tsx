import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Row, AlignContent, Container, HeaderText} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {TextH3, TextMinAsker} from '../../global';
import Line from '../../components/Line';
import BodyProfileFood from './Body';

const ProfileFood: React.FC = () => {
  const navigation = useNavigation();
  const undoPage = () => {
    navigation.goBack();
  };
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Header
              onPress={() => {
                navigation.navigate('ProfileDrink');
              }}
              onPressBack={undoPage}
            />
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextH3>suas comidas preferidas</TextH3>
            </HeaderText>
            <Line />

            <BodyProfileFood />
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileFood;
