import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {useAuth} from '../../hooks/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLocalion from 'react-native-vector-icons/Octicons';
import IconEvil from 'react-native-vector-icons/EvilIcons';

import {
  ImageBanner,
  Title,
  Description,
  Informations,
  MarginText,
  PositionIcon,
  Footer,
} from './styles';

import {TextMin, TextH3} from '../../global';
import Line from '../../components/Line';

const Match: React.FC = () => {
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
          <ImageBanner source={yourMatchs[0]}>
            <Title>{yourMatchs[0].name}</Title>
          </ImageBanner>

          <Description>
            <TextH3>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </TextH3>
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

export default Match;
