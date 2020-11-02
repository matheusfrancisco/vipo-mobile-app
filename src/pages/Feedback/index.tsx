import React from 'react';
import {useAuth} from '../../hooks/auth';
import {Title, TextH3Bold, TextMin, TextBold} from '../../global';
import {
  Header,
  FeedbackMax,
  Types,
  AlignText,
  Container,
  Row,
  AlignCenter,
  ImageItem,
  Image,
} from './styles';
import InputFeedback from '../../components/InputFeedback';
import Footer from '../../components/Footer';

const Feedback: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>E ai, como foi o rolê?</Title>
        </Header>

        <Image>
          <ImageItem source={require('../../assets/feedback/emoji2.png')} />
          <ImageItem source={require('../../assets/feedback/emoji1.png')} />
          <ImageItem source={require('../../assets/feedback/emoji3.png')} />
          <ImageItem source={require('../../assets/feedback/emoji4.png')} />
          <ImageItem source={require('../../assets/feedback/emoji5.png')} />
        </Image>

        <FeedbackMax>
          <TextH3Bold>
            O que você <TextBold>mais</TextBold> gostou?
          </TextH3Bold>
        </FeedbackMax>
        <Row>
          <Types>
            <AlignText>
              <TextMin>Atendimento</TextMin>
            </AlignText>
          </Types>

          <Types>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </Types>
        </Row>

        <AlignCenter>
          <Types>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </Types>
        </AlignCenter>

        <Row>
          <Types>
            <AlignText>
              <TextMin>Ambiente</TextMin>
            </AlignText>
          </Types>

          <Types>
            <AlignText>
              <TextMin>Música</TextMin>
            </AlignText>
          </Types>
        </Row>
      </Container>

      <Container>
        <FeedbackMax>
          <TextH3Bold>
            O que você <TextBold>menos</TextBold> gostou?
          </TextH3Bold>
        </FeedbackMax>
        <Row>
          <Types>
            <AlignText>
              <TextMin>Atendimento</TextMin>
            </AlignText>
          </Types>

          <AlignCenter>
            <Types>
              <AlignText>
                <TextMin>Comida</TextMin>
              </AlignText>
            </Types>
          </AlignCenter>
        </Row>

        <AlignCenter>
          <Types>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </Types>
        </AlignCenter>

        <Row>
          <Types>
            <AlignText>
              <TextMin>Ambiente</TextMin>
            </AlignText>
          </Types>

          <Types>
            <AlignText>
              <TextMin>Música</TextMin>
            </AlignText>
          </Types>
        </Row>
      </Container>

      <FeedbackMax>
        <TextH3Bold>
          Este espaço é para você nos informar sobre o rolê. Fique a vontade, o
          feedback é anônimo (denunciar, criticar, sugerir, elogiar).
        </TextH3Bold>
      </FeedbackMax>
      <InputFeedback />
      <Footer />
    </>
  );
};

export default Feedback;
