import React, { useState } from 'react';
import { Image } from 'react-native';

import { Row, AlignContent, ContainerText } from './styles';

import { TextMinAsker } from '../../global';

const BodyProfileFood: React.FC = () => {
  const [bodyOne, setBodyOne] = useState(false);
  const [bodyTwo, setBodyTwo] = useState(false);
  const [bodyThree, setBodyThree] = useState(false);
  const [bodyFour, setBodyFour] = useState(false);
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
              source={require('../../assets/taste-food/burguer.png')}
              style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
            />
          </ContainerText>
          <TextMinAsker>Hambúrguer</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyTwo}
            onPress={() => {
              setBodyTwo(!bodyTwo);
            }}>
            <Image
              source={require('../../assets/taste-food/snack.jpeg')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 80 / 2,
              }}
            />
          </ContainerText>
          <TextMinAsker>Petisco</TextMinAsker>
        </AlignContent>
      </Row>

      <Row>
        <AlignContent>
          <ContainerText
            select={bodyThree}
            onPress={() => {
              setBodyThree(!bodyThree);
            }}>
            <Image
              source={require('../../assets/taste-food/vegan.jpg')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 80 / 2,
              }}
            />
          </ContainerText>
          <TextMinAsker>Vegana</TextMinAsker>
        </AlignContent>

        <AlignContent>
          <ContainerText
            select={bodyFour}
            onPress={() => {
              setBodyFour(!bodyFour);
            }}>
            <Image
              source={require('../../assets/taste-food/vegetarian.jpg')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 80 / 2,
              }}
            />
          </ContainerText>
          <TextMinAsker>Vegetariana</TextMinAsker>
        </AlignContent>
      </Row>
    </>
  );
};

export default BodyProfileFood;
