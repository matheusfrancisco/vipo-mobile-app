import React from 'react';
import {useAuth} from '../../hooks/auth';
import {View} from 'react-native';
import {TitleH1Bold, TextMin} from '../../global';
import Footer from '../../components/Footer';
import Line from '../../components/Line';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconBorder, BoxHistory, PositionIcon} from './styles';
import IconLocalion from 'react-native-vector-icons/Octicons';
import IconEvil from 'react-native-vector-icons/EvilIcons';

const History: React.FC = () => {
  return (
    <>
      <IconBorder>
        <Icon
          name="chevron-left"
          color="#fff"
          onPress={() => console.log('Foi')}
        />
      </IconBorder>
      <TitleH1Bold> Meus últimmos rolês </TitleH1Bold>
      <Line />
      <BoxHistory>
        <PositionIcon>
          <Icon name="calendar" size={20} color="#470A68" />
          <TextMin> Seg à Dom - 18:00 até 22:00</TextMin>
        </PositionIcon>
        <PositionIcon>
          <IconLocalion name="location" size={20} color="#470A68" />

          <TextMin> Jardim das avenidas</TextMin>
        </PositionIcon>
        <PositionIcon>
          <Icon name="money" size={20} color="#470A68" />
          <TextMin> Preço médio - R$ 60,00</TextMin>
        </PositionIcon>
      </BoxHistory>
      <BoxHistory>
        <View />
      </BoxHistory>
      <Footer />
    </>
  );
};

export default History;
