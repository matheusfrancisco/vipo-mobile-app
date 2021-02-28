import React, { useState } from 'react';

import {
  ContainerPickerRow,
  ContainerPickerColumn,
  BodySpendingPerson,
} from './styles';

interface StateAnswer {
  likes: Array<string>;
  numberOfPeople: number;
  howMuch: string;
}
interface PickerSpendingPersonParams {
  setPick: (statePrevious: StateAnswer, values: {}) => void;
  answers: StateAnswer;
}

const PickerSpendingPerson: React.FC<PickerSpendingPersonParams> = ({
  setPick,
  answers,
}) => {
  const [bodyOne, setBodyOne] = useState(false);
  const [bodyTwo, setBodyTwo] = useState(false);
  const [bodyThree, setBodyThree] = useState(false);
  const [bodyFour, setBodyFour] = useState(false);

  const buttons = [
    {
      set: (value: boolean) => {
        setBodyOne(value);
      },
      id: '1',
      value: bodyOne,
    },
    {
      set: (value: boolean) => {
        setBodyTwo(value);
      },
      id: '2',
      value: bodyTwo,
    },
    {
      set: (value: boolean) => {
        setBodyThree(value);
      },
      id: '3',
      value: bodyThree,
    },
    {
      set: (value: boolean) => {
        setBodyFour(value);
      },
      id: '4',
      value: bodyFour,
    },
  ];

  const clickedButtons = (id: string) => {
    buttons.map((button) => {
      if (button.id === id) {
        return;
      } else if (button.value) {
        button.set(false);
      }
    });
  };

  return (
    <>
      <ContainerPickerColumn>
        <ContainerPickerRow>
          <BodySpendingPerson
            select={bodyOne}
            onPress={() => {
              clickedButtons('1');
              setBodyOne(!bodyOne);
              setPick(answers, { howMuch: 'R$ 0 - R$ 50' });
            }}>
            R$ 0 - R$ 50{' '}
          </BodySpendingPerson>
          <BodySpendingPerson
            select={bodyTwo}
            onPress={() => {
              clickedButtons('2');
              setBodyTwo(!bodyTwo);
              setPick(answers, { howMuch: 'R$ 51 - R$ 100' });
            }}>
            R$ 51 - R$ 100
          </BodySpendingPerson>
        </ContainerPickerRow>
        <ContainerPickerRow>
          <BodySpendingPerson
            select={bodyThree}
            onPress={() => {
              clickedButtons('3');
              setBodyThree(!bodyThree);
              setPick(answers, { howMuch: 'R$ 101 - R$ 200' });
            }}>
            R$ 101 - R$ 200
          </BodySpendingPerson>
          <BodySpendingPerson
            select={bodyFour}
            onPress={() => {
              clickedButtons('4');
              setBodyFour(!bodyFour);
              setPick(answers, { howMuch: 'R$ 200 +' });
            }}>
            R$ 200 +{' '}
          </BodySpendingPerson>
        </ContainerPickerRow>
      </ContainerPickerColumn>
    </>
  );
};

export default PickerSpendingPerson;
