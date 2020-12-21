import React, {useState} from 'react';
import {Image} from 'react-native';

import {Row, AlignContent, ContainerText} from './styles';

import {TextMinAsker} from '../../global';

const BodyProfileMusic: React.FC = () => {
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
              source={require('../../assets/style-music/eletronica.jpeg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker> Eletronica</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTwo}
            onPress={() => {
              setBodyTwo(!bodyTwo);
            }}>
            <Image
              source={require('../../assets/style-music/funk.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Funk</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyThree}
            onPress={() => {
              setBodyThree(!bodyThree);
            }}>
            <Image
              source={require('../../assets/style-music/pagode.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Pagode</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFour}
            onPress={() => {
              setBodyFour(!bodyFour);
            }}>
            <Image
              source={require('../../assets/style-music/rock.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Rock</TextMinAsker>
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
              source={require('../../assets/style-music/forró.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Forró</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodySix}
            onPress={() => {
              setBodySix(!bodySix);
            }}>
            <Image
              source={require('../../assets/style-music/jazz.jpeg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Jazz</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodySeven}
            onPress={() => {
              setBodySeven(!bodySeven);
            }}>
            <Image
              source={require('../../assets/style-music/pop.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Pop</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyEight}
            onPress={() => {
              setBodyEight(!bodyEight);
            }}>
            <Image
              source={require('../../assets/style-music/reggae.jpeg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Reggae</TextMinAsker>
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
              source={require('../../assets/style-music/samba.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker> Samba</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTen}
            onPress={() => {
              setBodyTen(!bodyTen);
            }}>
            <Image
              source={require('../../assets/style-music/sertanejo.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Sertanejo</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyEleven}
            onPress={() => {
              setBodyEleven(!bodyEleven);
            }}>
            <Image
              source={require('../../assets/style-music/hiphop.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Hip Hop</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTwelve}
            onPress={() => {
              setBodyTwelve(!bodyTwelve);
            }}>
            <Image
              source={require('../../assets/style-music/mpb.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>MPB</TextMinAsker>
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
              source={require('../../assets/style-music/indie.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker> Indie</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFourteen}
            onPress={() => {
              setBodyFourteen(!bodyFourteen);
            }}>
            <Image
              source={require('../../assets/style-music/reggaeton.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Reggaeton</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFifteen}
            onPress={() => {
              setBodyFifteen(!bodyFifteen);
            }}>
            <Image
              source={require('../../assets/style-music/rap.jpg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Rap</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodySixteen}
            onPress={() => {
              setBodySixteen(!bodySixteen);
            }}>
            <Image
              source={require('../../assets/style-music/rockalternativo.jpeg')}
              style={{width: 60, height: 60, borderRadius: 60 / 2}}
            />
          </ContainerText>
          <TextMinAsker>Rock </TextMinAsker>
          <TextMinAsker> Alternativo</TextMinAsker>
        </AlignContent>
      </Row>
    </>
  );
};

export default BodyProfileMusic;
