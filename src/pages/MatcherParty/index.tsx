import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Title, Container } from './styles';


const MatcherParty: React.FC = () => {

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
            <View>
              <Title>PROCURAR UM ROLÊ </Title>
            </View>
          <Container>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

    </>

  )
};

export default MatcherParty;
