import React, { useCallback, useState } from 'react';
import { ScrollView, Platform, Alert } from 'react-native';

import {
  Accordion,
  BackButton,
  ConfirmButton,
  Container,
  Footer,
  Header,
  PickerItem,
  TextH5,
  Title,
  Wrapper,
} from './styles';
import IconPlus from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import NumberOfPeoplePicker from './NumberOfPeoplePicker';
import LikesPicker from './LikesPicker';
import HowMuchPicker from './HowMuchPicker';

interface IValues {
  howMuch: string;
  numberOfPeople: number;
  likes: string[];
}

const initialValues: IValues = {
  howMuch: '',
  numberOfPeople: 0,
  likes: [],
};

type FieldKeysEnum = 0 | 1 | 2;

interface IField {
  key: FieldKeysEnum;
  PickerComponent: React.FC;
  label: string;
}

const fields: IField[] = [
  {
    key: 0,
    PickerComponent: NumberOfPeoplePicker,
    label: 'Para quantas pessoas?',
  },
  {
    key: 1,
    PickerComponent: LikesPicker,
    label: 'Quais os planos para hoje?',
  },
  {
    key: 2,
    PickerComponent: HowMuchPicker,
    label: 'Quantos pretendem gastar\npor pessoa?',
  },
];

const PickerMatcherParty: React.FC = () => {
  const navigation = useNavigation();

  const [expandedMenu, setExpandedMenu] = useState<FieldKeysEnum | null>(null);

  const onSubmit = useCallback(
    ({ howMuch, likes, numberOfPeople }: IValues) => {
      const isValid = howMuch && likes.length && numberOfPeople;

      if (!isValid) {
        return Alert.alert(
          'Você precisa responder todas as perguntas para \nrecomendarmos o melhor lugar para você',
        );
      }

      console.log('Valid!', howMuch, likes, numberOfPeople);
    },
    [],
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ submitForm }) => (
        <Wrapper
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled>
          <ScrollView keyboardShouldPersistTaps="handled">
            <Container>
              <Header>
                <Title>
                  Responda essas três perguntas para encontrarmos o rolê certo
                  para você 🔥
                </Title>
              </Header>

              {fields.map(({ key, label, PickerComponent }) => {
                return (
                  <PickerItem key={key}>
                    <TextH5>{label}</TextH5>

                    <Accordion
                      onPress={() => {
                        setExpandedMenu((expanded) =>
                          expanded === key ? null : key,
                        );
                      }}>
                      <IconPlus name="plus" size={20} color="#fff" />
                    </Accordion>

                    {expandedMenu === key && <PickerComponent />}
                  </PickerItem>
                );
              })}
            </Container>
          </ScrollView>

          <Footer>
            <BackButton
              onPress={() => {
                navigation.navigate('Home');
              }}>
              Voltar
            </BackButton>

            <ConfirmButton onPress={submitForm}>
              Encontrar o meu role 🎉
            </ConfirmButton>
          </Footer>
        </Wrapper>
      )}
    </Formik>
  );
};

export default PickerMatcherParty;
