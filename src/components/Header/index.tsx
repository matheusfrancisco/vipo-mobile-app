import React, { useState } from 'react';
import { Container, IconBorder, TextNext } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Title3 } from '../../global';

interface Props {
  onPress: () => void;
  onPressBack: () => void;
  text: string;
}

const Header: React.FC<Props> = ({ onPress, onPressBack, text }: Props) => {
  return (
    <>
      <Container>
        <IconBorder
          onPress={() => {
            onPressBack();
          }}>
          <Icon
            name="chevron-left"
            color="#fff"
          />
        </IconBorder>
        <TextNext>
          <Title3 onPress={() => onPress()}>{text}</Title3>
        </TextNext>
      </Container>
    </>
  );
};

export default Header;
