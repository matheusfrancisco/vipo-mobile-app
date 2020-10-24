import React from "react";
import {Container, IconBorder} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {TextH1} from "../../global";

const Footer: React.FC = () => {

  return (
    <>
     <Container>
       <IconBorder>
        <Icon
        name="home"
        size={25}
        color="#000"
        onPress={() => console.log("Foi")}
        ></Icon>
        <Icon
        name="search"
        size={25}
        color="#000"
        onPress={() => console.log("Foi")}
        ></Icon>
        <Icon
        name="user"
        size={25}
        color="#000"
        onPress={() => console.log("Foi")}
        ></Icon>
      </IconBorder>
      </Container>
    </>
  );
};

export default Footer;