import React from 'react';
import {Container, IconBorder, TextNext} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Title3} from '../../global';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <IconBorder>
          <Icon
            name="chevron-left"
            color="#fff"
            onPress={() => console.log('Foi')}
          />
        </IconBorder>
        <TextNext>
          <Title3 onPress={() => console.log('Foi')}>Próxima</Title3>
        </TextNext>
      </Container>
    </>
  );
};

export default Header;
