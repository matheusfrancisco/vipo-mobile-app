import React from 'react';
import {useAuth} from '../../hooks/auth';
import {Title, TextH3Bold, TextMin, TextBold} from '../../global';
import {
  Header,
  FeedbackMax,
  FeedbackTypes,
  AlignText,
  Container,
  ContainerRow,
  ContainerCenter,
  ImageItem,
  ContainerImage,
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

        <ContainerImage>
          <ImageItem source={require('../../assets/feedback/emoji2.png')} />
          <ImageItem source={require('../../assets/feedback/emoji1.png')} />
          <ImageItem source={require('../../assets/feedback/emoji3.png')} />
          <ImageItem source={require('../../assets/feedback/emoji4.png')} />
          <ImageItem source={require('../../assets/feedback/emoji5.png')} />
        </ContainerImage>

        <FeedbackMax>
          <TextH3Bold>
            O que você <TextBold>mais</TextBold> gostou?
          </TextH3Bold>
        </FeedbackMax>
        <ContainerRow>
          <FeedbackTypes>
            <AlignText>
              <TextMin>Atendimento</TextMin>
            </AlignText>
          </FeedbackTypes>

          <FeedbackTypes>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </FeedbackTypes>
        </ContainerRow>

        <ContainerCenter>
          <FeedbackTypes>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </FeedbackTypes>
        </ContainerCenter>

        <ContainerRow>
          <FeedbackTypes>
            <AlignText>
              <TextMin>Ambiente</TextMin>
            </AlignText>
          </FeedbackTypes>

          <FeedbackTypes>
            <AlignText>
              <TextMin>Música</TextMin>
            </AlignText>
          </FeedbackTypes>
        </ContainerRow>
      </Container>

      <Container>
        <FeedbackMax>
          <TextH3Bold>
            O que você <TextBold>menos</TextBold> gostou?
          </TextH3Bold>
        </FeedbackMax>
        <ContainerRow>
          <FeedbackTypes>
            <AlignText>
              <TextMin>Atendimento</TextMin>
            </AlignText>
          </FeedbackTypes>

          <FeedbackTypes>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </FeedbackTypes>
        </ContainerRow>

        <ContainerCenter>
          <FeedbackTypes>
            <AlignText>
              <TextMin>Comida</TextMin>
            </AlignText>
          </FeedbackTypes>
        </ContainerCenter>

        <ContainerRow>
          <FeedbackTypes>
            <AlignText>
              <TextMin>Ambiente</TextMin>
            </AlignText>
          </FeedbackTypes>

          <FeedbackTypes>
            <AlignText>
              <TextMin>Música</TextMin>
            </AlignText>
          </FeedbackTypes>
        </ContainerRow>
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
