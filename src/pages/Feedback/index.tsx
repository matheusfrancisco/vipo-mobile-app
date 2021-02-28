import React, { useState } from 'react';
import { Title, TextH3, TextMin, TextH2 } from '../../global';
import {
  Header,
  FeedbackMax,
  Types,
  Container,
  Row,
  AlignCenter,
  ImageItem,
  Image,
  ColorText,
  SelectFeedback,
} from './styles';
import InputFeedback from '../../components/InputFeedback';
import Footer from '../../components/Footer';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import Button from '../../components/Button';

const Feedback: React.FC = () => {
  const [show, setShow] = useState(false);
  const [bodyOne, setBodyOne] = useState(false);
  const [bodyTwo, setBodyTwo] = useState(false);
  const [bodyThree, setBodyThree] = useState(false);
  const [bodyFour, setBodyFour] = useState(false);
  const [bodyFive, setBodyFive] = useState(false);
  const [bodySix, setBodySix] = useState(false);
  const [bodySeven, setBodySeven] = useState(false);
  const [bodyEight, setBodyEight] = useState(false);
  const [bodyNine, setBodyNine] = useState(false);
  const [bodyTen, setBodyTen] = useState(false);
  const [body, setBody] = useState({WhatIsYourFeedback: Array()});
  const [bodyNo, setBodyNo] = useState(false);
  const [bodyYes, setBodyYes] = useState(false);



  const [FeedbackOne, setFeedbackOne] = useState(false);
  const [FeedbackTwo, setFeedbackTwo] = useState(false);
  const [FeedbackThree, setFeedbackThree] = useState(false);
  const [FeedbackFour, setFeedbackFour] = useState(false);
  const [FeedbackFive, setFeedbackFive] = useState(false);
  
 const setWhatIsYourFeedback = (WhatIsYourFeedback: string) => {
  const arr = body['WhatIsYourFeedback'] 
  const hasFeedback = (arr.indexOf(WhatIsYourFeedback) > -1);

  if (hasFeedback) {
    arr.filter((l: string) => l !== WhatIsYourFeedback ? true : false)
  } else {
    arr.push(WhatIsYourFeedback)
  }
  setBody({...body, WhatIsYourFeedback: arr })
 }


  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
        <Header>
          <Title> Você foi para o rolê?</Title>
        </Header>
        <Row>
          <Types select={bodyYes} onPress={() => {
              setBodyYes(!bodyYes);
              setBodyNo(false);
              setShow(true)
            }}>
              <TextMin >Sim</TextMin>
          </Types>

          <Types  select={bodyNo} onPress={() => {
              setBodyNo(!bodyNo);
              setBodyYes(false);
              setShow(false)
            }}>
              <TextMin>Não</TextMin>
          </Types>
        </Row>

     {show ? (<Container >
        <FeedbackMax>
          <TextH3>
            O que você achou do rolê ? 
          </TextH3>
        </FeedbackMax>
        <Image>
          <SelectFeedback select={FeedbackOne} onPress={() => {
             setFeedbackOne(!FeedbackOne);
           }}>
            <ImageItem source={require('../../assets/feedback/emoji2.png')} />
          </SelectFeedback>
          <SelectFeedback select={FeedbackTwo} onPress={() => {
             setFeedbackTwo(!FeedbackTwo);
           }}>
            <ImageItem source={require('../../assets/feedback/emoji1.png')} />
           </SelectFeedback>
           <SelectFeedback select={FeedbackThree} onPress={() => {
             setFeedbackThree(!FeedbackThree);
           }}>
            <ImageItem source={require('../../assets/feedback/emoji3.png')} />
           </SelectFeedback>
           <SelectFeedback select={FeedbackFour} onPress={() => {
             setFeedbackFour(!FeedbackFour);
           }}>
            <ImageItem source={require('../../assets/feedback/emoji4.png')} />
           </SelectFeedback>
           <SelectFeedback select={FeedbackFive} onPress={() => {
             setFeedbackFive(!FeedbackFive);
           }}>
            <ImageItem source={require('../../assets/feedback/emoji5.png')} />
           </SelectFeedback>
        </Image>
        <FeedbackMax>
          <TextH3>
            O que você 
            <ColorText>
              <TextH2> mais </TextH2> gostou?
            </ColorText>
          </TextH3>
        </FeedbackMax>
        <Row>
          <Types  select={bodyOne} onPress={() => {
            setBodyOne(!bodyOne);
            setWhatIsYourFeedback("attendance")
           }}>
              <TextMin >Atendimento</TextMin>
          </Types>

          <Types  select={bodyTwo} onPress={() => {
            setBodyOne(!bodyOne);
            setWhatIsYourFeedback("food")
           }}>
              <TextMin>Comida</TextMin>
          </Types>
        </Row>
        <AlignCenter>
          <Types  select={bodyThree} onPress={() => {
             setBodyThree(!bodyThree);
             setWhatIsYourFeedback("drink")
           }}>
              <TextMin>Bebida</TextMin>
          </Types>
        </AlignCenter>
        <Row>
          <Types  select={bodyFour} onPress={() => {
             setBodyFour(!bodyFour);
             setWhatIsYourFeedback("environment")
           }}>
              <TextMin>Ambiente</TextMin>
          </Types>
          <Types  select={bodyFive} onPress={() => {
             setBodyFive(!bodyFive)
             setWhatIsYourFeedback("music")
           }}>
              <TextMin>Música</TextMin>
          </Types>
        </Row>
        <FeedbackMax>
          <TextH3>
            Este espaço é para você nos informar sobre o rolê. Fique a vontade,
            o feedback é anônimo (denunciar, criticar, sugerir, elogiar).
          </TextH3>
        </FeedbackMax>
        <Row>
          <Types  select={bodySix} onPress={() => {
             setBodySix(!bodySix);
             setWhatIsYourFeedback("attendance")
           }}>
              <TextMin>Atendimento</TextMin>
          </Types>

          <AlignCenter>
            <Types  select={bodySeven} onPress={() => {
             setBodySeven(!bodySeven);
             setWhatIsYourFeedback("food")
           }}>
              <TextMin>Comida</TextMin>
            </Types>
          </AlignCenter>
        </Row>
        <AlignCenter>
          <Types  select={bodyEight} onPress={() => {
             setBodyEight(!bodyEight);
             setWhatIsYourFeedback("drink")
           }}>
            <TextMin>Bebida</TextMin>
          </Types>
        </AlignCenter>

        <Row>
          <Types  select={bodyNine} onPress={() => {
             setBodyNine(!bodyNine);
             setWhatIsYourFeedback("environment")
           }}>
              <TextMin>Ambiente</TextMin>
          </Types>

          <Types  select={bodyTen} onPress={() => {
             setBodyTen(!bodyTen);
             setWhatIsYourFeedback("music")
           }}>
              <TextMin>Música</TextMin>
          </Types>
        </Row>
      <FeedbackMax>
        <TextH3>
          Este espaço é para você nos informar sobre o rolê. Fique a vontade, o
          feedback é anônimo (denunciar, criticar, sugerir, elogiar).
        </TextH3>
      </FeedbackMax>
      <InputFeedback />
      </Container>) : null}
      </ScrollView>
      {/* <Footer /> */}
      <Button  style={{margin: 10}}>
        Enviar
      </Button>
      </KeyboardAvoidingView>
    </>
  );
};

export default Feedback;
