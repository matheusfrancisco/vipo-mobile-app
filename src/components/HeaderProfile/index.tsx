import React from 'react';
import {Container, IconUser, IconBars} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderProfile: React.FC = () => {
  return (
    <>
      <Container>
        <IconUser>
          <Icon
            name="user"
            size={15}
            color="#fff"
            onPress={() => console.log('Foi')}
          />
        </IconUser>
        <IconBars>
          <Icon
            name="bars"
            size={15}
            color="#fff"
            onPress={() => console.log('Foi')}
          />
        </IconBars>
      </Container>
    </>
  );
};

export default HeaderProfile;
