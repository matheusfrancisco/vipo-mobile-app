import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: "RobotoSlab-Medium";
  margin: 14px 0 54px;
`;

export const SeachInput = styled.View`
  align-items: center;
  top: ${getBottomSpace() + 100}px;
`;

export const HeaderIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconHelpButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0%;
  background: #312e28;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
