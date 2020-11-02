import React from 'react';
import IconLocation from 'react-native-vector-icons/Octicons';

import IconEmail from 'react-native-vector-icons/Fontisto';
import IconEdit from 'react-native-vector-icons/Entypo';


import {useAuth} from '../../hooks/auth';
import {
  Header,
  IconBorder,
  Container,
  AlignText,
  ImageItem,
  Colunn,
  AlignLocation,
  AlignIcon,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Footer from '../../components/Footer';
import {Title2, Text16Bold, TextMin} from '../../global';

import Line from '../../components/Line';


const Profile: React.FC = () => {
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
            <Header>
              <IconBorder>
                <Icon
                  name="chevron-left"
                  color="#fff"
                  onPress={() => console.log('Foi')}
                />
              </IconBorder>
            </Header>
            <ImageItem source={require('../../assets/profile/profile.jpg')} />

            <AlignIconHeader>
              <IconEdit name="edit" size={20} color="#fff" />
            </AlignIconHeader>

            <AlignText>
              <Title2>Olá, Theresa !</Title2>
            </AlignText>
            <Colunn>
              <Text16Bold>Minhas Informações</Text16Bold>
            </Colunn>
            <Line />
            <AlignIcon>
              <IconLocation name="location" size={20} color="#470A68" />
              <TextMin> São Paulo - Jardins</TextMin>
            </AlignIcon>
            <AlignIcon>

              <IconEmail name="email" size={20} color="#470A68" />

              <TextMin> example@gmail.com</TextMin>
            </AlignIcon>
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
