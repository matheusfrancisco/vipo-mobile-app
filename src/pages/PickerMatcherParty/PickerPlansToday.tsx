import React, {useState} from 'react';

import {
  ContainerPickerRow,
  BodyPlansToday,
  ContainerPickerColumn,
} from './styles';

//#TODO think how do not duplicate this code
interface StateAnswer {
  likes: Array<string>;
  numberOfPeople: number;
  howMuch: string;
}
interface PickerPlansTodayParams {
  setPick: (statePrevious: StateAnswer, values: {}) => void
  answers: StateAnswer
}



const PickerPlansToday: React.FC<PickerPlansTodayParams> = ({setPick, answers}) => {
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

  const setPickPlansToday = (planForToday: string) => {
    const likesPrevious = answers['likes']
    const hasLunch = (likesPrevious.indexOf(planForToday) > -1);
    if (hasLunch) {
      likesPrevious.filter((l: string) => l !== planForToday ? true : false)
    } else {
      likesPrevious.push(planForToday)
    }
    setPick(answers, {likes: likesPrevious})
  }
  return (
    <>
      <ContainerPickerColumn>
        <ContainerPickerRow>
           {/* #TODO
            BodyPlansToday here can be an [].map(<BodyPlansToday...></BodyPlansToday>)
            and we caan remove the duplicated code
            */}
            {/* ## BUUG
            need select only tree
            I think we need fix the UI/UX select
            */}
          <BodyPlansToday
            select={bodyOne}
            onPress={() => {
              clickedButtons('1');
              setBodyOne(!bodyOne);
              setPickPlansToday("lunch")
            }}>
            Comer 🍔
          </BodyPlansToday>
          <BodyPlansToday
            select={bodyTwo}
            onPress={() => {
              clickedButtons('2');
              setBodyTwo(!bodyTwo);
              setPickPlansToday("drink")
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
              setPickPlansToday("talk")

            }}>
            Conversar 🗣
          </BodyPlansToday>
          <BodyPlansToday
            select={bodyFour}
            onPress={() => {
              clickedButtons('4');
              setBodyFour(!bodyFour);
              setPickPlansToday("meetPeople")

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
              setPickPlansToday("dance")

            }}>
            Dançar 🕺
          </BodyPlansToday>
          <BodyPlansToday
            select={bodySix}
            onPress={() => {
              clickedButtons('6');
              setBodySix(!bodySix);
              setPickPlansToday("lovers")

            }}>
            Rolê romântico ❤
          </BodyPlansToday>
        </ContainerPickerRow>
      </ContainerPickerColumn>
    </>
  );
};

export default PickerPlansToday;