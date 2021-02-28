import React, { useState } from 'react';
import { Image } from 'react-native';
import { Row, AlignContent, ContainerText } from './styles';
import { TextMinAsker } from '../../global';

const BodyProfileDrink: React.FC = () => {
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
  const [bodyEleven, setBodyEleven] = useState(false);
  const [bodyTwelve, setBodyTwelve] = useState(false);
  const [bodyThirteen, setBodyThirteen] = useState(false);
  const [bodyFourteen, setBodyFourteen] = useState(false);
  const [bodyFifteen, setBodyFifteen] = useState(false);
  const [bodySixteen, setBodySixteen] = useState(false);

  return (
    <>
      <Row>
        <AlignContent>
          <ContainerText
            select={bodyOne}
            onPress={() => {
              setBodyOne(!bodyOne);
            }}>
            <Image
              source={require('../../assets/taste-drink/sugarcaneliquor.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker> Cachaça</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTwo}
            onPress={() => {
              setBodyTwo(!bodyTwo);
            }}>
            <Image
              source={require('../../assets/taste-drink/coffee.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Café</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyThree}
            onPress={() => {
              setBodyThree(!bodyThree);
            }}>
            <Image
              source={require('../../assets/taste-drink/beer.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Cerveja</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFour}
            onPress={() => {
              setBodyFour(!bodyFour);
            }}>
            <Image
              source={require('../../assets/taste-drink/craftbeer.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Cerveja </TextMinAsker>
          <TextMinAsker> artesanal</TextMinAsker>
        </AlignContent>
      </Row>

      <Row>
        <AlignContent>
          <ContainerText
            select={bodyFive}
            onPress={() => {
              setBodyFive(!bodyFive);
            }}>
            <Image
              source={require('../../assets/taste-drink/chopp.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Chopp</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodySix}
            onPress={() => {
              setBodySix(!bodySix);
            }}>
            <Image
              source={require('../../assets/taste-drink/gin.jpeg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Gin</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodySeven}
            onPress={() => {
              setBodySeven(!bodySeven);
            }}>
            <Image
              source={require('../../assets/taste-drink/tequila.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Tequila</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyEight}
            onPress={() => {
              setBodyEight(!bodyEight);
            }}>
            <Image
              source={require('../../assets/taste-drink/wine.jpeg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Vinho</TextMinAsker>
        </AlignContent>
      </Row>

      <Row>
        <AlignContent>
          <ContainerText
            select={bodyNine}
            onPress={() => {
              setBodyNine(!bodyNine);
            }}>
            <Image
              source={require('../../assets/taste-drink/vodkadrink.png')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker> Vodca</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTen}
            onPress={() => {
              setBodyTen(!bodyTen);
            }}>
            <Image
              source={require('../../assets/taste-drink/whisky.png')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Whisky</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyEleven}
            onPress={() => {
              setBodyEleven(!bodyEleven);
            }}>
            <Image
              source={require('../../assets/taste-drink/champagne.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Champagne</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTwelve}
            onPress={() => {
              setBodyTwelve(!bodyTwelve);
            }}>
            <Image
              source={require('../../assets/taste-drink/brandy.jpeg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Conhaque</TextMinAsker>
        </AlignContent>
      </Row>

      <Row>
        <AlignContent>
          <ContainerText
            select={bodyThirteen}
            onPress={() => {
              setBodyThirteen(!bodyThirteen);
            }}>
            <Image
              source={require('../../assets/taste-drink/soda.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker> Refrigerante </TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFourteen}
            onPress={() => {
              setBodyFourteen(!bodyFourteen);
            }}>
            <Image
              source={require('../../assets/taste-drink/juice.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Suco</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFifteen}
            onPress={() => {
              setBodyFifteen(!bodyFifteen);
            }}>
            <Image
              source={require('../../assets/taste-drink/saque.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Saquê</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodySixteen}
            onPress={() => {
              setBodySixteen(!bodySixteen);
            }}>
            <Image
              source={require('../../assets/taste-drink/liquor.jpg')}
              style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Licor</TextMinAsker>
        </AlignContent>
      </Row>
    </>
  );
};

export default BodyProfileDrink;
