import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {Container, HeaderText} from './styles';
import {TextH3, TextMinAsker} from '../../global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Line from '../../components/Line';
import {useNavigation} from '@react-navigation/native';
import BodyProfileDrink from './Body';

const ProfileDrink: React.FC = () => {
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
            <Header onPress={() => {}} onPressBack={undoPage} />
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextH3>suas bebibas favoritas</TextH3>
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
