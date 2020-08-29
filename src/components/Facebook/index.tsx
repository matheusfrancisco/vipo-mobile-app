import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Container } from "./styles";

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const ButtonFacebook: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <Icon.Button
      name="facebook"
      backgroundColor="#3b5998"
      onPress={() => console.log("Foi")}
    >
      Login with Facebook
    </Icon.Button>
  </Container>
);

export default ButtonFacebook;
