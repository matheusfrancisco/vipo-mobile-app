import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  height: 41px;
  background: #470a68;
  border-radius: 10px;
  /* margin: 8px 100px 10px 100px ; */
  width: 100px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "RobotoSlab-Medium";
  color: #fff;
  font-size: 16px;
`;
