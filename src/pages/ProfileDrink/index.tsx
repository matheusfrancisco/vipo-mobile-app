import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, Image} from 'react-native';
import {Row, AlignContent, Container, HeaderText, TextDrink} from './styles';
import {TextH3, TextMinAsker} from '../../global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Line from '../../components/Line';

const ProfileDrink: React.FC = () => {
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
                Nós ajude a indicar os lugares de acordo com
              </TextMinAsker>
              <TextDrink>
                <TextH3>suas bebibas favoritas</TextH3>
              </TextDrink>
            </HeaderText>
            <Line />

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/sugarcaneliquor.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker> Cachaça</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/coffee.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Café</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/beer.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Cerveja</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/craftbeer.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Cerveja </TextMinAsker>
                <TextMinAsker> artesanal</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/chopp.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Chopp</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/gin.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Gin</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/tequila.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Tequila</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/wine.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Vinho</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/vodkadrink.png')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker> Vodca</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/whisky.png')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Whisky</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/champagne.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Champagne</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/brandy.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Conhaque</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/soda.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker> Refrigerante </TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/juice.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Suco</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/saque.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Saquê</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/taste-drink/liquor.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Licor</TextMinAsker>
              </AlignContent>
            </Row>
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileDrink;
