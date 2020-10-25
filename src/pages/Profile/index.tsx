import React from 'react';
import {useAuth} from '../../hooks/auth';
import Search from '../Search';
import HeaderProfile from '../../components/HeaderProfile';
import {Header, IconBorder, Container, AlignText} from './styles';
import {Icon} from 'react-native-vector-icons/Icon';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import Footer from '../../components/Footer';
import {Title2} from '../../global';

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
            <Header />
            <AlignText>
              <Title2>Olá, Theresa !</Title2>
            </AlignText>
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
