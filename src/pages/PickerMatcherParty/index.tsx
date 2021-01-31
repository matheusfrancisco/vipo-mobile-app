import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, Text, Alert, View} from 'react-native';

import {Container, Header, Title, PickerItem, TextH5, Expander} from './styles';
import IconPlus from 'react-native-vector-icons/Feather';

import Footer from '../../components/Footer';

import {Title3} from '../../global';
import Button from '../../components/Button';
import PickerAmountPeople from './PickerAmountPeople';
import PickerPlansToday from './PickerPlansToday';
import PickerSpendingPerson from './PickerSpendingPerson';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { answeredRecommendtionsRequest } from '../../store/modules/recommendations/actions';

interface StateAnswer {
  likes: Array<string>;
  numberOfPeople: number;
  howMuch: string;
}

const checkAnswers = (answers: StateAnswer) => {
  if (answers.howMuch === "" || answers.numberOfPeople === 0 || answers.likes === Array()) {
    return true
  }
}

const PickerMatcherParty: React.FC = () => {
  const informacoes = [
    {title: 'Para quantas pessoas ? ', id: 'AmountPeople'},
    {title: 'Quais os planos para hoje ?', id: 'PlansToday'},
    {title: 'Quantos pretendem gastar\npor pessoa ?', id: 'SpendingPerson'},
  ];
  const navigation = useNavigation();
  const state  = useSelector((state: any) => state)
  console.log("initialState:", state)

  const [answers, setAnswered] = useState({
    howMuch: '',
    numberOfPeople: 0,
    likes: Array(),
  });
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(answeredRecommendtionsRequest(answers))

  }, [answers])

  const setPick = (statePrevious: StateAnswer, values: {}) => {
    setAnswered({...statePrevious, ...values})
  }

  const components = {
    AmountPeople: () => {
      return <PickerAmountPeople setPick={setPick}  answers={answers}/>;
    },
    PlansToday: () => {
      return <PickerPlansToday setPick={setPick}  answers={answers}/>;
    },
    SpendingPerson: () => {
      return <PickerSpendingPerson setPick={setPick}  answers={answers} />;
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
        <View style={{flexDirection: 'row'}}>

          <Button
            onPress={() => {
                navigation.navigate('Home');
            }}
            style={{
              marginLeft: 20,
              marginRight: 10,
              width: 150,
              marginBottom: 5,
              // position: 'absolute',
              bottom: 0,
            }}>
            Voltar
          </Button>
          <Button
            onPress={() => {
              if (checkAnswers(answers)) {
                Alert.alert(
                  'Você precisa responder todas as perguntas para',
                  'recomendarmos o melhor lugar para você',
                );
                
              } else {
                //## See how I can pass informations in react navtive using navigation
                //## craete some loading to waiting for recommendations
                console.log(answers, "answers to sent to backend")


                navigation.navigate('Match');
              }
            }}
            style={{
              width: 200,
              // position: 'absolute',
              bottom: 0,
            }}>
            Encontrar o meu role 🎉
          </Button>
        </View>
      </KeyboardAvoidingView>
      {/* <Footer /> */}
    </>
  );
};

export default PickerMatcherParty;