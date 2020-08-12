import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, Text, Image } from 'react-native';
import { Title, Container, SearchRole, TextMatcher, ContainerImage, ContainerContent as ContainerContent, TextContainerImage } from './styles';
import SmoothPicker from "react-native-smooth-picker";

const MatcherParty: React.FC = () => {
  // const [selected, setSelected] = useState();

  // const handleChange = (index) => {
  //   setSelected({
  //     selected: index
  //   });
  // };

  return  (
    <>
      <KeyboardAvoidingView 
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding': undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1}}
        >
            <SearchRole>
              <Title>PROCURAR UM ROLÊ </Title>
            </SearchRole>
            <Container>
              <TextMatcher>
                <Text>Em quantas pessoas vocês estão?</Text>
              </TextMatcher>
            </Container>
            {/* <SmoothPicker
              offsetSelection={40}
              magnet
              scrollAnimation
              data={Array.from({ length: 16 }, (_, i) => i)}
              onSelected={({ item, index }) => handleChange(index)}
              renderItem={({ item, index }) => (
                <Number selected={index === selected}>{item}</Number>
                )}
              /> */}
              <TextMatcher>Quais os planos para hoje?</TextMatcher>
              <ContainerImage>
                <ContainerContent>
                  <Image 
                      source={require('../../assets/drink.jpg')}  
                      style={{width: 100, height: 100, borderRadius: 100/ 2}} 
                  />
                    <TextContainerImage> Beber</TextContainerImage>
              </ContainerContent>
              <ContainerContent>
                  <Image 
                      source={require('../../assets/food.jpg')}  
                      style={{width: 100, height: 100, borderRadius: 100/ 2}} 
                  />
                    <TextContainerImage>Comer</TextContainerImage>
              </ContainerContent>
            </ContainerImage>
         
        </ScrollView>
      </KeyboardAvoidingView>

    </>

  )
};

export default MatcherParty;
