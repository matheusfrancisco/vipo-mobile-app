import React from 'react';
import { ScrollView, Platform } from 'react-native';

import Footer from '@/components/Footer';
import IHistory from '@/domain/entities/IHistory';

import EventCard from '../../components/EventCard';
import {
  Header,
  IWentButton,
  IDidntGoButton,
  KeyboardAvoidingView,
  WrapperButtons,
  Title,
  TextButton,
} from './styles';

const TodaysMatch: React.FC = () => {
  const items: IHistory = {
    id: '1',
    title: 'Bar do leo',
    image: require('../../assets/history/bar.jpg'),
    date: 'Seg à Dom - 18:00 à 22:00',
    location: 'Vila Madalena',
    value: 'Preço médio - R$ 60,00',
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Header>
            <Title>Você já escolheu o seu rolê de hoje!🔥</Title>
          </Header>
          <EventCard
            id={items.id}
            title={items.title}
            image={items.image}
            date={items.date}
            location={items.location}
            value={items.value}
          />

          <WrapperButtons>
            <IWentButton>
              <TextButton>Já fui para este rolê! 🎉</TextButton>
            </IWentButton>
            <IDidntGoButton>
              <TextButton>Não vou mais 😢</TextButton>
            </IDidntGoButton>
          </WrapperButtons>
        </ScrollView>
      </KeyboardAvoidingView>
      <Footer />
    </>
  );
};

export default TodaysMatch;
