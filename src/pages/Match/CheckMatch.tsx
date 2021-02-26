import React from 'react';

import Footer from '../../components/Footer';
import { KeyboardAvoidingView, ScrollView, Platform, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title, Title3, Title4, TextH3 } from '../../global';
import {
  ContainerTitle,
  ContainerDescription,
  BoxBorder,
  ContainerBenefits,
  Container,
} from './styles';
import Line from '../../components/Line';
import Header from '../../components/Header';
import HeaderProfile from '../../components/HeaderProfile';

const Feedback: React.FC = () => {
  const yourMatchs = [
    {
      id: 1,
      name: 'SputNickBar',
      benefits: 'caipirinha em dobro',
    },
  ];

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView>
          <Container>
            <HeaderProfile />
            <ContainerTitle>
              <Title4>Deu Match com o {yourMatchs[0].name} 🎉</Title4>
            </ContainerTitle>
            <Line />
            <ContainerDescription>
              <Title3>Aproveite os benefícios indo pela Vipo.</Title3>
            </ContainerDescription>
            {yourMatchs.map((match) => {
              return (
                <BoxBorder>
                  <TextH3>- {yourMatchs[0].benefits}</TextH3>
                </BoxBorder>
              );
            })}
          </Container>
        </ScrollView>
        <Footer />
      </KeyboardAvoidingView>
    </>
  );
};

export default Feedback;
