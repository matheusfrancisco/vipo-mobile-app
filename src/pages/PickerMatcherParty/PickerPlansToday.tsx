import React, {useState} from 'react';

import {
  ContainerPickerRow,
  BodyPlansToday,
  ContainerPickerColumn,
} from './styles';

const PickerPlansToday: React.FC = () => {
  const [bodyOne, setBodyOne] = useState(false);
  const [bodyTwo, setBodyTwo] = useState(false);
  const [bodyThree, setBodyThree] = useState(false);
  const [bodyFour, setBodyFour] = useState(false);
  const [bodyFive, setBodyFive] = useState(false);
  const [bodySix, setBodySix] = useState(false);

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
    {
      set: (value: boolean) => {
        setBodyFive(value);
      },
      id: '6',
      value: bodySix,
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
          <BodyPlansToday
            select={bodyOne}
            onPress={() => {
              clickedButtons('1');
              setBodyOne(!bodyOne);
            }}>
            Comer 🍔
          </BodyPlansToday>
          <BodyPlansToday
            select={bodyTwo}
            onPress={() => {
              clickedButtons('2');
              setBodyTwo(!bodyTwo);
            }}>
            Beber 🍹
          </BodyPlansToday>
        </ContainerPickerRow>
        <ContainerPickerRow>
          <BodyPlansToday
            select={bodyThree}
            onPress={() => {
              clickedButtons('3');
              setBodyThree(!bodyThree);
            }}>
            Conversar 🗣
          </BodyPlansToday>
          <BodyPlansToday
            select={bodyFour}
            onPress={() => {
              clickedButtons('4');
              setBodyFour(!bodyFour);
            }}>
            Conhecer gente nova 😍{' '}
          </BodyPlansToday>
        </ContainerPickerRow>
        <ContainerPickerRow>
          <BodyPlansToday
            select={bodyFive}
            onPress={() => {
              clickedButtons('5');
              setBodyFive(!bodyFive);
            }}>
            Dançar 🕺
          </BodyPlansToday>
          <BodyPlansToday
            select={bodySix}
            onPress={() => {
              clickedButtons('6');
              setBodySix(!bodySix);
            }}>
            Rolê romântico ❤
          </BodyPlansToday>
        </ContainerPickerRow>
      </ContainerPickerColumn>
    </>
  );
};

export default PickerPlansToday;