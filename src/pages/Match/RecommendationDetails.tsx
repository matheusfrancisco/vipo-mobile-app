import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
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

import { TextMin, TextH3 } from '../../global';
import Line from '../../components/Line';
import { useNavigation } from '@react-navigation/native';
import IRecommendation from './IRecommendation';
interface IProp extends IRecommendation {
  nextRoute: string | null;
}

const RecommendationDetails: React.FC<IProp> = ({
  id,
  name,
  instagram,
  banner,
  description,
  ticket,
  bonus,
  openAt,
  location,
  nextRoute,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <ImageBanner source={{ uri: banner }}>
            <Title>{name}</Title>
          </ImageBanner>

          <Description>
            <TextH3>{description}</TextH3>
          </Description>
          <Line />

          <Informations>
            <PositionIcon>
              <Icon name="calendar" size={30} color="#470A68" />
            </PositionIcon>
            <MarginText>
              <TextMin> {openAt}</TextMin>
            </MarginText>
          </Informations>

          <Informations>
            <PositionIcon>
              <IconLocalion name="location" size={30} color="#470A68" />
            </PositionIcon>
            <MarginText>
              <TextMin>{location}</TextMin>
            </MarginText>
          </Informations>

          <Informations>
            <PositionIcon>
              <Icon name="money" size={30} color="#470A68" />
            </PositionIcon>
            <MarginText>
              <TextMin>{ticket}</TextMin>
            </MarginText>
          </Informations>
        </ScrollView>

        <Footer>
          <IconEvil
            name="close"
            size={30}
            color="red"
            onPress={() => {
              nextRoute && navigation.navigate(nextRoute);
            }}
          />
          <Icon name="send-o" size={30} color="#000" />
          <IconEvil
            onPress={() => {
              navigation.navigate('CheckMatch');
            }}
            name="heart"
            size={40}
            color="green"
          />
        </Footer>
      </KeyboardAvoidingView>
    </>
  );
};

export default RecommendationDetails;
