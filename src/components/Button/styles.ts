import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  height: 51px;
  background: rgb(130, 87, 229);
  border-radius: 10px;
  margin-top: 50px;

  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: "RobotoSlab-Medium";
  color: #fff;
  font-size: 16px;
`;
