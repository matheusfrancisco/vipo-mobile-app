import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, Text} from 'react-native';

import {Container, Header, Title, PickerItem, TextH5, Expander} from './styles';
import IconPlus from 'react-native-vector-icons/Feather';

import Footer from '../../components/Footer';

import {Title3} from '../../global';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../components/Button';
import PickerAmountPeople from './PickerAmountPeople';
import PickerPlansToday from './PickerPlansToday';
import PickerSpendingPerson from './PickerSpendingPerson';

const PickerMatcherParty: React.FC = () => {
  const navigation = useNavigation();
  const informacoes = [
    {title: 'Para quantas pessoas ? ', id: 'AmountPeople'},
    {title: 'Quais os planos para hoje ?', id: 'PlansToday'},
    {title: 'Quantos pretendem gastar\npor pessoa ?', id: 'SpendingPerson'},
  ];
  const components = {
    AmountPeople: () => {
      return <PickerAmountPeople />;
    },
    PlansToday: () => {
      return <PickerPlansToday />;
    },
    SpendingPerson: () => {
      return <PickerSpendingPerson />;
    },
  };
  const [open, setOpen] = useState('');

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <Header>
              <Title>
                <Title3>
                  Responda essas três perguntas para encontrarmos o rolê certo
                  para você 🔥
                </Title3>
              </Title>
            </Header>
            {informacoes.map((info) => {
              return (
                <PickerItem key={info.id}>
                  <TextH5>{info.title}</TextH5>
                  <Expander
                    onPress={() => {
                      if (info.id === open) {
                        setOpen('false');
                      } else {
                        setOpen(info.id);
                      }
                    }}>
                    <IconPlus name="plus" size={20} color="#fff" />
                  </Expander>
                  {open === info.id ? components[info.id]() : <Text />}
                </PickerItem>
              );
            })}
          </Container>
        </ScrollView>
        <Button
          onPress={() => console.log('Foi')}
          style={{
            margin: 10,
            width: 365,
            position: 'absolute',
            bottom: 0,
          }}>
          Encontrar o meu role 🎉
        </Button>
      </KeyboardAvoidingView>
      {/* <Footer /> */}
    </>
  );
};

export default PickerMatcherParty;
