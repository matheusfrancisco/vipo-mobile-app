import React from 'react';
import { 
  Image,
  View,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  ScrollView
} from 'react-native';
import  { useAuth } from '../../hooks/auth';

import { 
  Container,
  Title,
  Insta,
  Line,
  Description,
  ImageBanner,
} from './styles';

const MatchParty: React.FC = () => {

  const yourMatchs = [
    {"id": 1,
     "name": "SputNickBar",
     "instagram": "@sputinick",
     "uri": "https://sputnikbar.com/img/sobre/30-11-2018.jpg",
     "description": "UUUUUUUUUUUUUm bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!m bar muito legal!",
     "open": "6pm",
     "close": "23pm",}
  ];

  return  (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
          <ImageBanner source={yourMatchs[0]}>
            <Title>{yourMatchs[0].name}</Title>
          </ ImageBanner>
          <Container>
            <Insta>
              {yourMatchs[0].instagram}
            </Insta>
            <Line/>
          </Container>
          <Description>
            <Text style={{textAlign : "left", paddingLeft: 10}}>
              {yourMatchs[0].description}
            </Text>
          </Description>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
};

export default MatchParty;
