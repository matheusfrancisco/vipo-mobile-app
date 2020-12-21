import React, {useState} from 'react';
import {Container, IconBorder, TextNext} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextH1} from '../../global';

interface Props {
  onPress: () => void;
  onPressBack: () => void;
}

const Header: React.FC<Props> = ({onPress, onPressBack}: Props) => {
  return (
    <>
      <Container>
        <IconBorder>
          <Icon
            name="chevron-left"
            color="#fff"
            onPress={() => {
              onPressBack();
            }}
          />
        </IconBorder>
        <TextNext>
          <TextH1 onPress={() => onPress()}>Próxima</TextH1>
        </TextNext>
      </Container>
    </>
  );
};

export default Header;
