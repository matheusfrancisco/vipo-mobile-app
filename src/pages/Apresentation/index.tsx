import React from 'react';
import {useAuth} from '../../hooks/auth';
import {View, Image} from 'react-native';
import logo from '../../assets/logoOficial.png';
import {Header} from 'react-native/Libraries/NewAppScreen';

const Apresentation: React.FC = () => {
  return (
    <>
      <Header>
        <Image
          source={logo}
          style={{
            width: 100,
            height: 50,
            margin: 20,
          }}
        />
      </Header>
      <View />
    </>
  );
};

export default Apresentation;
