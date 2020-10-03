import styled from "styled-components/native";
import { Platform } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
`;

export const PrivacyTerms= styled.View`
  border: 2px;
  height: 15px;
  width: 15px;
  
`

export const ContainerTextCreateAccount = styled.View`
  margin: 20px 0px;
`
export const ContainerButton = styled.View`
  margin-top: 75px;
`

