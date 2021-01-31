import React, { useState } from 'react';
import IconLocation from 'react-native-vector-icons/Octicons';

import IconEmail from 'react-native-vector-icons/Fontisto';
import IconEdit from 'react-native-vector-icons/Entypo';

import {
  IconBorder,
  Container,
  AlignText,
  ImageItem,
  Colunn,
  AlignIcon,
  AlignIconHeader,
  ColorText,
  ButtonEditLike,
  ColorTextButton,
  HeaderProfile,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import Footer from '../../components/Footer';
import { Title2, TextH2, TextMin, TextH5 } from '../../global';

import Line from '../../components/Line';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const Profile: React.FC = () => {
  const navigation = useNavigation();
  //#TODO fix state
  const { profile }  = useSelector((state: any) => state)
  console.log("state profile:", profile)

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
            <HeaderProfile>
              <IconBorder onPress={undoPage}>
              <Icon
                  name="chevron-left"
                  color="#fff"
                  onPress={undoPage}
                />
              </IconBorder>
            </HeaderProfile>
            <ImageItem source={require('../../assets/profile/profile.jpg')} />

            <AlignIconHeader>
            <IconEdit name="edit" size={20} color="#fff" onPress={() => {
                navigation.navigate('EditProfile');
              }}/>
            </AlignIconHeader>

            <AlignText>
              <Title2>Olá, {profile.name} !</Title2>
            </AlignText>
            <Colunn>
              <ColorText>
                <TextH2>Minhas Informações</TextH2>
              </ColorText>
            </Colunn>
            <Line />
            <AlignIcon>
              <IconLocation name="location" size={20} color="#470A68" />
              <TextMin> {profile.address}</TextMin>
            </AlignIcon>
            <AlignIcon>
              <IconEmail name="email" size={20} color="#470A68" />

            <TextMin> {profile.email}</TextMin>
            </AlignIcon>
            <ButtonEditLike  onPress={() => {
                navigation.navigate('ProfileDrink');
              }}>
              <ColorTextButton >
                <TextH5>
                  Altere seus gostos
                </TextH5>
              </ColorTextButton>
            </ButtonEditLike>
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
