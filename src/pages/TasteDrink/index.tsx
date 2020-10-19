import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import {
  Container,
  ContainerImage,
  ContainerContent,
  TextContainerImage,
  HeaderLikeMusic,
  HeaderText,
  ButtonIconHelp,
  ButtonWarpper,
} from "./styles";
import logo from "../../assets/logoOficial.png";
import { useNavigation } from "@react-navigation/native";

const TasteDrink: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <HeaderLikeMusic>
              <Image
                source={logo}
                style={{
                  width: 300,
                  height: 80,
                  marginBottom: 10,
                }}
              />
              <HeaderText>O que você gosta de beber?</HeaderText>
            </HeaderLikeMusic>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/sugarcaneliquor.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage> Cachaça</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/coffee.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Café</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/beer.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Cerveja</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/craftbeer.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Cerveja </TextContainerImage>
                <TextContainerImage> artesanal</TextContainerImage>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/chopp.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Chopp</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/gin.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Gin</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/tequila.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Tequila</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/wine.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Vinho</TextContainerImage>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/vodkadrink.png")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage> Vodca</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/whisky.png")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Whisky</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/champagne.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Champagne</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/brandy.jpeg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Conhaque</TextContainerImage>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/soda.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage> Refrigerante </TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/juice.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Suco</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/saque.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Saquê</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-drink/liquor.jpg")}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
                <TextContainerImage>Licor</TextContainerImage>
              </ContainerContent>
            </ContainerImage>
          </Container>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default TasteDrink;
