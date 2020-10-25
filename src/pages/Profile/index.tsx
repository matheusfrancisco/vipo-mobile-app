import React from 'react';
import {useAuth} from '../../hooks/auth';
import Search from '../Search';
import HeaderProfile from '../../components/HeaderProfile';
import {Header, IconBorder, Container, AlignText, ImageItem} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Footer from '../../components/Footer';
import {Title2, TextBold, Text16Bold} from '../../global';

const Home: React.FC = () => {
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

            <AlignText>
              <Title2>Olá, Theresa !</Title2>
            </AlignText>
            <Text16Bold>Minhas Informações</Text16Bold>
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
