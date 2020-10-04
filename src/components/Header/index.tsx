import React from "react";
import {Container, IconBorder, TextNext} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import {TextH1} from "../../global";

const Header: React.FC = () => {

  return (
    <>
     <Container>
       <IconBorder>
          <Icon
          name="chevron-left"
          color="#fff"
          onPress={() => console.log("Foi")}
          ></Icon>
        </IconBorder>
        <TextNext>
          <TextH1 onPress={() => console.log("Foi")}>Próxima</TextH1>
        </TextNext>
      </Container>
    </>
  );
};

export default Header;
