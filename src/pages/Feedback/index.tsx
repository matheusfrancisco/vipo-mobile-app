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
  const [FeedbackOne, setFeedbackOne] = useState(false);
  const [FeedbackTwo, setFeedbackTwo] = useState(false);
  const [FeedbackThree, setFeedbackThree] = useState(false);
  const [FeedbackFour, setFeedbackFour] = useState(false);
  const [FeedbackFive, setFeedbackFive] = useState(false);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <Container>
            <Header>
              <Title>E ai, como foi o rolê?</Title>
            </Header>

            <Image>
              <SelectFeedback
                select={FeedbackOne}
                onPress={() => {
                  setFeedbackOne(!FeedbackOne);
                }}>
                <ImageItem
                  source={require('../../assets/feedback/emoji2.png')}
                />
              </SelectFeedback>
              <SelectFeedback
                select={FeedbackTwo}
                onPress={() => {
                  setFeedbackTwo(!FeedbackTwo);
                }}>
                <ImageItem
                  source={require('../../assets/feedback/emoji1.png')}
                />
              </SelectFeedback>
              <SelectFeedback
                select={FeedbackThree}
                onPress={() => {
                  setFeedbackThree(!FeedbackThree);
                }}>
                <ImageItem
                  source={require('../../assets/feedback/emoji3.png')}
                />
              </SelectFeedback>
              <SelectFeedback
                select={FeedbackFour}
                onPress={() => {
                  setFeedbackFour(!FeedbackFour);
                }}>
                <ImageItem
                  source={require('../../assets/feedback/emoji4.png')}
                />
              </SelectFeedback>
              <SelectFeedback
                select={FeedbackFive}
                onPress={() => {
                  setFeedbackFive(!FeedbackFive);
                }}>
                <ImageItem
                  source={require('../../assets/feedback/emoji5.png')}
                />
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
              <Types
                select={bodyOne}
                onPress={() => {
                  setBodyOne(!bodyOne);
                }}>
                <TextMin>Atendimento</TextMin>
              </Types>

              <Types
                select={bodyTwo}
                onPress={() => {
                  setBodyTwo(!bodyTwo);
                }}>
                <TextMin>Comida</TextMin>
              </Types>
            </Row>

            <AlignCenter>
              <Types
                select={bodyThree}
                onPress={() => {
                  setBodyThree(!bodyThree);
                }}>
                <TextMin>Comida</TextMin>
              </Types>
            </AlignCenter>

            <Row>
              <Types
                select={bodyFour}
                onPress={() => {
                  setBodyFour(!bodyFour);
                }}>
                <TextMin>Ambiente</TextMin>
              </Types>

              <Types
                select={bodyFive}
                onPress={() => {
                  setBodyFive(!bodyFive);
                }}>
                <TextMin>Música</TextMin>
              </Types>
            </Row>
          </Container>

          <Container>
            <FeedbackMax>
              <TextH3>
                O que você
                <ColorText>
                  <TextH2> menos </TextH2> gostou?
                </ColorText>
              </TextH3>
            </FeedbackMax>
            <Row>
              <Types
                select={bodySix}
                onPress={() => {
                  setBodySix(!bodySix);
                }}>
                <TextMin>Atendimento</TextMin>
              </Types>

              <AlignCenter>
                <Types
                  select={bodySeven}
                  onPress={() => {
                    setBodySeven(!bodySeven);
                  }}>
                  <TextMin>Comida</TextMin>
                </Types>
              </AlignCenter>
            </Row>

            <AlignCenter>
              <Types
                select={bodyEight}
                onPress={() => {
                  setBodyEight(!bodyEight);
                }}>
                <TextMin>Comida</TextMin>
              </Types>
            </AlignCenter>

            <Row>
              <Types
                select={bodyNine}
                onPress={() => {
                  setBodyNine(!bodyNine);
                }}>
                <TextMin>Ambiente</TextMin>
              </Types>

              <Types
                select={bodyTen}
                onPress={() => {
                  setBodyTen(!bodyTen);
                }}>
                <TextMin>Música</TextMin>
              </Types>
            </Row>
          </Container>
        </ScrollView>
        <FeedbackMax>
          <TextH3>
            Este espaço é para você nos informar sobre o rolê. Fique a vontade,
            o feedback é anônimo (denunciar, criticar, sugerir, elogiar).
          </TextH3>
        </FeedbackMax>
        <InputFeedback />
        {/* <Footer /> */}
        <Button style={{ margin: 10 }}>Enviar</Button>
      </KeyboardAvoidingView>
    </>
  );
};

export default Feedback;
