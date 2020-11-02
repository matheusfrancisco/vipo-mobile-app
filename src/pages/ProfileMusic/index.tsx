import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerImage,
  ContainerContent,
  HeaderText,
  Next,
} from './styles';

import {TextH3, TextMinAsker} from '../../global';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Line from '../../components/Line';

const ProfileMusic: React.FC = () => {
  const navigation = useNavigation();

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
              <TextH3>seus gostos musicais</TextH3>
            </HeaderText>
            <Line />

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/style-music/eletronica.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker> Eletronica</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/funk.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Funk</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/pagode.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Pagode</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/rock.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Rock</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/style-music/forró.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Forró</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/jazz.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Jazz</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/pop.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Pop</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/reggae.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Reggae</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/style-music/samba.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker> Samba</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/sertanejo.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Sertanejo</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/hiphop.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Hip Hop</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/mpb.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>MPB</TextMinAsker>
              </AlignContent>
            </Row>

            <Row>
              <AlignContent>
                <Image
                  source={require('../../assets/style-music/indie.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker> Indie</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/reggaeton.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Reggaeton</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/rap.jpg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Rap</TextMinAsker>
              </AlignContent>

              <AlignContent>
                <Image
                  source={require('../../assets/style-music/rockalternativo.jpeg')}
                  style={{width: 60, height: 60, borderRadius: 60 / 2}}
                />
                <TextMinAsker>Rock </TextMinAsker>
                <TextMinAsker> Alternativo</TextMinAsker>
              </AlignContent>
            </Row>
          </Container>
        </ScrollView>
        <Next />
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default ProfileMusic;
