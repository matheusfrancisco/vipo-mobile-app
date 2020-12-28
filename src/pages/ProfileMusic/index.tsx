import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Container, HeaderText, TextMusic} from './styles';

import {TextH3, TextMinAsker} from '../../global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Line from '../../components/Line';
import BodyProfileMusic from './Body';
import HeaderSalveInfo from '../../components/HeaderSalveInfo';

const ProfileMusic: React.FC = () => {
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
                navigation.navigate('Profile');
              }}
              onPressBack={undoPage}
            />
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextMinAsker>
                seus gostos musicais
              </TextMinAsker>
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
