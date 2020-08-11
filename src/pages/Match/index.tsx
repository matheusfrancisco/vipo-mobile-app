import React from 'react';
import { 
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import  { useAuth } from '../../hooks/auth';

import { 
  Container,
  Title,
  ImageBanner,
} from './styles';

const MatchParty: React.FC = () => {

  const yourMatchs = [
    {"id": 1,
     "name": "SputNickBar",
     "imageUrl": "http://www.google.com.br/",
     "instagram": "@sputinick",
     "description": "Um bar muito legal!",
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
          <ImageBanner>
            <Title>PROCURAR UM ROLÊ</Title>
          </ ImageBanner>
          <Container>
            <View>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
};

export default MatchParty;
