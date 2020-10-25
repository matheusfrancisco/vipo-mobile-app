import React from 'react';
import {useAuth} from '../../hooks/auth';
import {Title, TextH3Bold, TextMin} from '../../global';
import {
  Header,
  FeedbackMax,
  FeedbackTypes,
  AlignText,
  Container,
  ContainerRow,
  ContainerCenter,
  ImageItem,
} from './styles';
import InputFeedback from '../../components/InputFeedback';

const Feedback: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Title>E ai, como foi o rolê?</Title>
        </Header>
        <ImageItem source={require('../../assets/feedback/download.jpeg')} />

        <FeedbackMax>
          <TextH3Bold>O que você mais gostou?</TextH3Bold>
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
          <TextH3Bold>O que você menos gostou?</TextH3Bold>
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
    </>
  );
};

export default Feedback;
