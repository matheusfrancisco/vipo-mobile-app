import React, { useState } from 'react';

import { Body, ContainerPickerRow } from './styles';

interface StateAnswer {
  likes: Array<string>;
  numberOfPeople: number;
  howMuch: string;
}
interface PickerAmmountParams {
  setPick: (statePrevious: StateAnswer, values: Partial<StateAnswer>) => void;
  answers: StateAnswer;
}

const PickerAmountPeople: React.FC<PickerAmmountParams> = ({
  setPick,
  answers,
}) => {
  const [bodyOne, setBodyOne] = useState(false);
  const [bodyTwo, setBodyTwo] = useState(false);
  const [bodyThree, setBodyThree] = useState(false);
  const [bodyFour, setBodyFour] = useState(false);
  const [bodyFive, setBodyFive] = useState(false);

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
    {
      set: (value: boolean) => {
        setBodyFive(value);
      },
      id: '5',
      value: bodyFive,
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
    <ContainerPickerRow>
      {/* #TODO
       body here can be an [].map(<Body ...></Body>)
       and we caan remove the duplicated code
      */}
      <Body
        select={bodyOne}
        onPress={() => {
          clickedButtons('1');
          setBodyOne(!bodyOne);
          setPick(answers, { numberOfPeople: 1 });
        }}>
        1
      </Body>
      <Body
        select={bodyTwo}
        onPress={() => {
          clickedButtons('2');
          setBodyTwo(!bodyTwo);
          setPick(answers, { numberOfPeople: 2 });
        }}>
        2
      </Body>
      <Body
        select={bodyThree}
        onPress={() => {
          clickedButtons('3');
          setBodyThree(!bodyThree);
          setPick(answers, { numberOfPeople: 3 });
        }}>
        3
      </Body>
      <Body
        select={bodyFour}
        onPress={() => {
          clickedButtons('4');
          setBodyFour(!bodyFour);
          setPick(answers, { numberOfPeople: 4 });
        }}>
        4
      </Body>
      <Body
        select={bodyFive}
        onPress={() => {
          clickedButtons('5');
          setBodyFive(!bodyFive);
          setPick(answers, { numberOfPeople: 5 });
        }}>
        5
      </Body>
    </ContainerPickerRow>
  );
};
export default PickerAmountPeople;
