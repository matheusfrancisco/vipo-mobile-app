import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
`;


export const ButtonText = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const SocialIcon = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;

export const ContainerTitle = styled.View`
  margin: 14px 0 30px;
`
export const ContainerTextH3 = styled.View`
  margin-left: 175px;
`