import React, { useEffect, useState } from 'react';
import logo from '../../assets/logoOficial.png';
import landingOne from '../../assets/landingPage/one.png';

import {useNavigation} from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Container, ImageContainer, AlignText, BannerOne, ContainerBanner} from './styles';
import {Title} from '../../global';
import Button from '../../components/Button';
import { setFirstAccess, hasAccess } from '../../hooks/firstAccess';

function LandingPage() {
  const {navigate} = useNavigation();
  const navigation = useNavigation();

  function handleNavigateToFormPage() {
    navigate('Form');
  }

  const resolveAccesse = async () => {
    return await hasAccess()
  }

  useEffect(() => {
    resolveAccesse().then(access => {
      if (access === 'true')  {
        navigation.navigate('SignIn')
      } else {
        setFirstAccess()
      }

    })
  }, [])

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
            <ContainerBanner>
              <Image source={logo} style={{width: 150, height: 40, margin: 20}} />
              <Button
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
                style={{
                  marginRight: 20,
                  marginTop: 25,
                  width: 60,
                  height: 30,
                  backgroundColor: '#F2994A',
                }}
                >
              Pular
              </Button>
            </ContainerBanner>

            <ImageContainer source={landingOne} style={{width: 300, height: 200}}/>
            <AlignText>
              <Title> Encontre seus rolês de forma prática.</Title>
            </AlignText>
            <TouchableOpacity onPress={handleNavigateToFormPage} />
          </BannerOne>

          <Button
            onPress={() => {
              navigation.navigate('LandingPageTwo');
            }}
            style={{
              marginLeft: 50,
              marginTop: 150,
              width: 300,
              height: 50,
              backgroundColor: '#F2994A',
            }}>
            Próximo
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LandingPage;
