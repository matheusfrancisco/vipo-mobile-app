import React from 'react';
import {Container, IconBorder} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <IconBorder>
          <Icon
            name="home"
            size={25}
            color="#000"
            onPress={() => {
              navigation.navigate('MatcherParty');
            }}
          />
          <Icon
            name="search"
            size={25}
            color="#000"
            onPress={() => {
              navigation.navigate('Search');
            }}
          />
          <Icon
            name="user"
            size={25}
            color="#000"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </IconBorder>
      </Container>
    </>
  );
};

export default Footer;
