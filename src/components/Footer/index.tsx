import React from "react";
import {Container, IconBorder, TextNext} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {TextH1} from "../../global";

const Footer: React.FC = () => {

  return (
    <>
     <Container>
       <IconBorder>
        <Icon
        name="home"
        color="#000"
        onPress={() => console.log("Foi")}
        ></Icon>
        <Icon
        name="search"
        color="#000"
        onPress={() => console.log("Foi")}
        ></Icon>
        <Icon
        name="user"
        color="#000"
        onPress={() => console.log("Foi")}
        ></Icon>
      </IconBorder>
      </Container>
    </>
  );
};

export default Footer;
