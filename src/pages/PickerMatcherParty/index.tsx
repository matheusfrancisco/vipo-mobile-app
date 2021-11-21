import React, { useCallback, useState } from 'react';
import { ScrollView, Platform, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useMatchesController } from './hooks';
import HowMuchPicker from './HowMuchPicker';
import LikesPicker from './LikesPicker';
import NumberOfPeoplePicker from './NumberOfPeoplePicker';
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

interface IValues {
  howMuch: string;
  numberOfPeople: number;
  like: string[];
}

const initialValues: IValues = {
  howMuch: '',
  numberOfPeople: 0,
  like: [],
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

  const controller = useMatchesController();

  const [expandedMenu, setExpandedMenu] = useState<FieldKeysEnum | null>(null);

  const onSubmit = useCallback(
    async ({ howMuch, like, numberOfPeople }: IValues) => {
      const selectedLikes = Object.entries(like)
        .map(([key, value]) => (value ? key : undefined))
        .filter((value) => value) as string[]; // This type assertion can be done because the undefined values are filtered out

      const isValid = howMuch && selectedLikes.length && numberOfPeople;

      if (!isValid) {
        return Alert.alert(
          'Preencha as informações!',
          'Você precisa responder todas as perguntas para recomendarmos o melhor lugar para você',
        );
      }

      await controller.getMatches({
        desirablePrice: howMuch,
        groupSize: numberOfPeople,
        interests: selectedLikes,
      });
    },
    [controller],
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
                  Responda estas três perguntas para encontrarmos o rolê certo
                  para você 🔥
                </Title>
              </Header>

              {fields.map(({ key, label, PickerComponent }) => {
                const isExpanded = key === expandedMenu;

                return (
                  <PickerItem key={key}>
                    <TextH5>{label}</TextH5>

                    <Accordion
                      key={key}
                      onPress={() => {
                        setExpandedMenu(isExpanded ? null : key);
                      }}>
                      <FeatherIcon
                        key={key}
                        name={isExpanded ? 'minus' : 'plus'}
                        size={20}
                        color="#fff"
                      />
                    </Accordion>

                    {isExpanded && <PickerComponent />}
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
