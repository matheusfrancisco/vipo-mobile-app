import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container } from "./styles";

const IconMenu: React.FC = () => (
  <Container>
    <Icon.Button
      name="bars"
      backgroundColor="none"
      color="#8257e6"
      onPress={() => console.log("Foi")}
    ></Icon.Button>
  </Container>
);

export default IconMenu;
