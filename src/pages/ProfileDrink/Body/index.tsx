import React, { useState } from 'react';
import { Image, ImageURISource } from 'react-native';
import { Container, AlignContent, ContainerText, TextName } from './styles';
import { useField } from 'formik';

interface IDrinkOption {
  name: string;
  link: ImageURISource;
}

interface IProp {
  drinksOptions: Array<IDrinkOption>;
}

const DrinkButton: React.FC<IDrinkOption> = ({ name, link }) => {
  const [field, _, helpers] = useField(`drinks.${name}`);

  return (
    <ContainerText
      select={field.value}
      onPress={() => {
        helpers.setValue(!field.value);
      }}>
      <Image
        source={link}
        style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
      />
    </ContainerText>
  );
};

const BodyProfileDrink: React.FC<IProp> = ({ drinksOptions }) => {
  return (
    <Container>
      {drinksOptions.map((drinkOption) => (
        <AlignContent key={drinkOption.name}>
          <DrinkButton {...drinkOption} />
          <TextName>{drinkOption.name}</TextName>
        </AlignContent>
      ))}
    </Container>
  );
};

export default BodyProfileDrink;
