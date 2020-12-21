import React, {useState} from 'react';
import {Container, IconBorder, TextNext} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text3} from '../../global';

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
          <Text3 onPress={() => onPress()}>Próxima</Text3>
        </TextNext>
      </Container>
    </>
  );
};

export default Header;
