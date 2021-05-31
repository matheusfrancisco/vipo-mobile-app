import { Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Title } from '../../global';
import BestRatedItem from './BestRatedItem';
import LeastRatedItem from './LeastRatedItem';
import Quality from './Quality';

import { Container, Header, Option, Row, Submit } from './styles';
import TextFeedback from './TextFeedback';

interface IValues {
  quality: number;
  bestRatedItem: string;
  leastRatedItem: string;
  feedback: string;
}

const initialValues: IValues = {
  quality: 0,
  bestRatedItem: '',
  leastRatedItem: '',
  feedback: '',
};

const Feedback: React.FC = () => {
  const [hasGoneToLocation, setHasGoneToLocation] = useState<boolean | null>(
    null,
  );

  const handleSubmit = useCallback(
    ({ quality, feedback, bestRatedItem, leastRatedItem }: IValues) => {
      const isValid = quality && feedback && bestRatedItem && leastRatedItem;

      if (!isValid) {
        return;
      }

      console.log(
        'Submitting feedback:',
        quality,
        feedback,
        bestRatedItem,
        leastRatedItem,
      );
    },
    [],
  );

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Header>
          <Title> Você foi para o rolê em Bar do João?</Title>
        </Header>

        <Row>
          <Option.Button
            onPress={() => setHasGoneToLocation(true)}
            isSelected={Boolean(hasGoneToLocation)}>
            <Option.Text isSelected={Boolean(hasGoneToLocation)}>
              Sim
            </Option.Text>
          </Option.Button>

          <Option.Button
            onPress={() => setHasGoneToLocation(false)}
            isSelected={
              hasGoneToLocation === null ? false : !hasGoneToLocation
            }>
            <Option.Text
              isSelected={
                hasGoneToLocation === null ? false : !hasGoneToLocation
              }>
              Não
            </Option.Text>
          </Option.Button>
        </Row>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {hasGoneToLocation ? (
            <>
              <Quality />

              <BestRatedItem />

              <LeastRatedItem />

              <TextFeedback />

              <Submit>Enviar</Submit>
            </>
          ) : null}
        </Formik>
      </ScrollView>
    </Container>
  );
};

export default Feedback;
