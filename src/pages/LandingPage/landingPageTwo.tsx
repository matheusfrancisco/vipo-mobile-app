import React from 'react';
import logo from '../../assets/logoOficial.png';
import landingTwo from '../../assets/landingPage/two.png';

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

function LandingPage() {
  const {navigate} = useNavigation();

  function handleNavigateToFormPage() {
    navigate('Form');
  }
  const navigation = useNavigation();


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

            <ImageContainer source={landingTwo}  style={{width: 200, height: 200}}/>
            <AlignText>
              <Title> Responda três perguntas para conhecermos o seu gosto.</Title>
            </AlignText>
            <TouchableOpacity onPress={handleNavigateToFormPage} />
          </BannerOne>
          <Button
            onPress={() => {
              navigation.navigate('LandingPageThree');
            }}
            style={{
              marginLeft: 50,
              marginTop: 50,
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

export default LandingPage;
