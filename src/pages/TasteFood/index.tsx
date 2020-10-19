import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import {
  Container,
  TextLikeMusical,
  ContainerImage,
  ContainerContent,
  TextContainerImage,
  ButtonIconHelp,
  HeaderTasteFood,
  ButtonWarpper,
} from "./styles";
import logo from "../../assets/logoOficial.png";
import { useNavigation } from "@react-navigation/native";

const TasteFood: React.FC = () => {
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
            <HeaderTasteFood>
              <Image
                source={logo}
                style={{
                  width: 300,
                  height: 80,
                  marginBottom: 10,
                }}
              />
              <TextLikeMusical>
                Quando você sai, o que gosta de comer?
              </TextLikeMusical>
            </HeaderTasteFood>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/taste-food/burguer.png")}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <TextContainerImage>Hambúrguer</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-food/snack.jpeg")}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <TextContainerImage>Petisco</TextContainerImage>
              </ContainerContent>
            </ContainerImage>

            <ContainerImage>
              <ContainerContent>
                <Image
                  source={require("../../assets/taste-food/vegan.jpg")}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <TextContainerImage>Vegana</TextContainerImage>
              </ContainerContent>

              <ContainerContent>
                <Image
                  source={require("../../assets/taste-food/vegetarian.jpg")}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <TextContainerImage>Vegetariana</TextContainerImage>
              </ContainerContent>
            </ContainerImage>
          </Container>

        
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default TasteFood;
