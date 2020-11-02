import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, Image} from 'react-native';
import {Container, Row, AlignContent, HeaderText, Line} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {TextH3, TextMinAsker} from '../../global';

const ProfileFood: React.FC = () => {
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
            <HeaderText>
              <TextMinAsker>
                Nós ajude a indicar os lugars de acordo com
              </TextMinAsker>
              <TextH3>suas comidas preferidas</TextH3>
            </HeaderText>
            <Line />

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/taste-food/burguer.png')}
                  style={{width: 80, height: 80, borderRadius: 80 / 2}}
                />
                <TextMinAsker>Hambúrguer</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-food/snack.jpeg')}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 80 / 2,
                  }}
                />
                <TextMinAsker>Petisco</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/taste-food/vegan.jpg')}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 80 / 2,
                  }}
                />
                <TextMinAsker>Vegana</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-food/vegetarian.jpg')}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 80 / 2,
                  }}
                />
                <TextMinAsker>Vegetariana</TextMinAsker>
              </AlignContent>
            </Row>
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileFood;
