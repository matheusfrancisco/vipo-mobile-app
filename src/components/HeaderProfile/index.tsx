import React from 'react';
import {Container, IconUser, IconBars} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const HeaderProfile: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <IconUser onPress={() => {
              navigation.navigate('Profile');
            }}>
          <Icon
            name="user"
            size={38}
            style={{
              alignContent: 'center',
              textAlign: 'center'
            }}
            color="#a396cb"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </IconUser>
        <IconBars>
          <Icon
            name="bars"
            size={38}
            color="#a396cb"
            style={{
              alignContent: 'center',
              textAlign: 'center'
            }}
            onPress={() => {
              navigation.navigate('History');
            }}
          />
        </IconBars>
      </Container>
    </>
  );
};

export default HeaderProfile;
