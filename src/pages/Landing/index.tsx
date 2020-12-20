import React from 'react';
import logo from '../../assets/logoOficial.png';
import landingOne from '../../assets/apresentation/apresetation1.png';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Container, ImageContainer, AlignText, BannerOne} from './styles';
import {Title} from '../../global';
import Button from '../../components/Button';

function Landing() {
  const {navigate} = useNavigation();

  function handleNavigateToFormPage() {
    navigate('Form');
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Container>
          <BannerOne>
            <Image source={logo} style={{width: 150, height: 40, margin: 20}} />

            <ImageContainer source={landingOne} />
            <AlignText>
              <Title> Encontre seus rolês de forma prática.</Title>
            </AlignText>
            <TouchableOpacity onPress={handleNavigateToFormPage} />
          </BannerOne>
          <Button
            onPress={() => console.log('Foi')}
            style={{
              marginLeft: 50,
              marginTop: 150,
              width: 300,
              height: 50,
              backgroundColor: '#F2994A',
            }}>
            Bora começar
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Landing;
