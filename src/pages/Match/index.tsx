import React from 'react';
<<<<<<< HEAD
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {useAuth} from '../../hooks/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLocalion from 'react-native-vector-icons/Octicons';
import IconEvil from 'react-native-vector-icons/EvilIcons';
=======
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useAuth} from '../../hooks/auth';
>>>>>>> Add page feedback

import {
  ImageBanner,
  Title,
  Description,
  Line,
  Informations,
  MarginText,
  PositionIcon,
  Footer,
} from './styles';
import {TextDescription, TextMin} from '../../global';

const MatchParty: React.FC = () => {
  const yourMatchs = [
    {
      id: 1,
      name: 'SputNickBar',
      instagram: '@sputinick',
      uri: 'https://sputnikbar.com/img/sobre/30-11-2018.jpg',
      description:
        'UUUUUUUUUUUUUm bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!',
      ticket: 'As pessoas costuman gastar R$ 60,00 neste local',
      bonus: 'Indo pelo App você ganha um shot de boas-vindas quando chegar lá',
      openHour: '19:00',
      closeHour: '05:00',
    },
  ];

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
<<<<<<< HEAD
          <ImageBanner source={yourMatchs[0]}>
            <Title>{yourMatchs[0].name}</Title>
          </ImageBanner>

          <Description>
            <TextDescription>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </TextDescription>
          </Description>
          <Line />

          <Informations>
            <PositionIcon>
              <Icon name="calendar" size={30} color="#470A68" />
            </PositionIcon>
            <MarginText>
              <TextMin> Seg à Dom - 18:00 até 22:00</TextMin>
            </MarginText>
          </Informations>

          <Informations>
            <PositionIcon>
              <IconLocalion name="location" size={30} color="#470A68" />
            </PositionIcon>
            <MarginText>
              <TextMin> Jardim das avenidas</TextMin>
            </MarginText>
          </Informations>

          <Informations>
            <PositionIcon>
              <Icon name="money" size={30} color="#470A68" />
            </PositionIcon>
            <MarginText>
              <TextMin> Preço médio - R$ 60,00</TextMin>
            </MarginText>
          </Informations>
=======
          <Wrapper>
            <ImageBanner source={yourMatchs[0]}>
              <Title>{yourMatchs[0].name}</Title>
              <Week> Agenda da semana </Week>
            </ImageBanner>
            <Container>
              <Insta>{yourMatchs[0].instagram}</Insta>
              <Line />
            </Container>
            <Informations>
              <Description>{yourMatchs[0].description}</Description>
              <DescriptionInfo>
                <PubInformations>
                  <TextMatch style={{marginBottom: 8}}>
                    {`${yourMatchs[0].openHour} - ${yourMatchs[0].closeHour}`}
                  </TextMatch>
                  <TextMatch>República +</TextMatch>
                </PubInformations>
                <PubTicket>{yourMatchs[0].ticket}</PubTicket>
              </DescriptionInfo>
              <Offert>
                <TextMatch style={{textAlign: 'center'}}>
                  {yourMatchs[0].bonus}
                </TextMatch>
              </Offert>
              <Liked>
                <LikedIcons>
                  <ILeft
                    name="chevron-left"
                    onPress={() => console.log('back')}
                  />
                  <Dislike
                    name="thumbs-o-down"
                    onPress={() => console.log('dislike')}
                  />
                  <Like
                    name="thumbs-o-up"
                    onPress={() => console.log('like')}
                  />
                  <INext
                    name="chevron-right"
                    onPress={() => console.log('next')}
                  />
                </LikedIcons>
                <Calendar name="calendar" />
                <Share name="share-square" />
              </Liked>
            </Informations>
          </Wrapper>
>>>>>>> Add page feedback
        </ScrollView>

        <Footer>
          <IconEvil name="close" size={30} color="red" />
          <Icon name="send-o" size={30} color="#000" />
          <IconEvil name="heart" size={40} color="green" />
        </Footer>
      </KeyboardAvoidingView>
    </>
  );
};

export default MatchParty;
