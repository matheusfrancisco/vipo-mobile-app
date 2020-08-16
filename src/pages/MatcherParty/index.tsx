import React, { useState } from 'react';
import { KeyboardAvoidingView,
         ScrollView, 
         Platform, 
         Text, 
         Image 
        } from 'react-native';
import { Title,
         Container, 
         SearchRole,
         TextMatcher, 
         ContainerImage,
         ContainerContent as ContainerContent,
         TextContainerImage,
         PriceRole,
         PriceRoleText, 
       } from './styles';
import ButtonViewRole from '../../components/ButtonViewRole';
import logo from '../../assets/logo.png';
import InputMatcher from '../../components/InputMatcher';
const MatcherParty: React.FC = () => {
  // const [selected, setSelected] = useState();

  // const handleChange = (index) => {
  //   setSelected({
  //     selected: index
  //   });
  // };
  const options = [
    {
      img: '../../assets/drink.jpg',
      txt: 'Beber',
    },
    {
      img: '../../assets/food.jpg',
      txt: 'Dançar'
    }
  ];

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
                  style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                  />
                  <TextContainerImage> Beber</TextContainerImage>
                </ContainerContent>

                <ContainerContent>
                  <Image 
                    source={require('../../assets/food.jpg')}  
                    style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                    />
                  <TextContainerImage>Comer</TextContainerImage>
                </ContainerContent>

                <ContainerContent>
                  <Image 
                    source={require('../../assets/dance.jpg')}  
                    style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                    />
                  <TextContainerImage>Dançar</TextContainerImage>
                </ContainerContent>                
              </ContainerImage>
              
              <ContainerImage>
                <ContainerContent>
                    <Image 
                      source={require('../../assets/talk.jpg')}  
                      style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                      />
                    <TextContainerImage>Conversar</TextContainerImage>
                </ContainerContent>

                
                  <ContainerContent>
                      <Image 
                        source={require('../../assets/meetpeople.jpg')}  
                        style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                        />
                      <TextContainerImage>Conhecer</TextContainerImage>
                      <TextContainerImage>pessoas</TextContainerImage>
                  </ContainerContent>

                  <ContainerContent>
                      <Image 
                        source={require('../../assets/romanticdinner.jpg')}  
                        style={{width: 80, height: 80, borderRadius: 80/ 2}} 
                        />
                      <TextContainerImage>Jantar </TextContainerImage>
                      <TextContainerImage> romântico</TextContainerImage>
                  </ContainerContent>
              </ContainerImage>

              <TextMatcher>Até quanto pretendem gastar?</TextMatcher>

              <PriceRole>
                <PriceRoleText> Até:</PriceRoleText>
                <InputMatcher/>
                <PriceRoleText> , 00</PriceRoleText>
              </PriceRole>
              
              <ButtonViewRole
                  onPress={() => {console.log("Foi")}}
              >
                VER ROLÊS
              </ButtonViewRole>

         
        </ScrollView>
      </KeyboardAvoidingView>

    </>

  )
};

export default MatcherParty;
