import styled from "styled-components/native";
import { Platform, Image } from "react-native";

export const ImageItem = styled(Image)`
  /* flex: 1; */
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Container = styled.View``;

export const ContainerImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerContent = styled.View`
  margin: 24px;
`;

export const TextContainerImage = styled.Text`
  color: #fff;
  text-align: center;
`;

export const SearchRole = styled.View`
  width: 100%;
  height: 100px;
  background-color: #8257e6;
  justify-content: center;
  align-items: center;
`;

export const PriceRole = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const PriceRoleText = styled.Text`
  text-align: center;
  margin: 0px 10px;
  color: #fff;
`;

export const TextMatcher = styled.Text`
  font-size: 15px;
  color: #8257e6;
  font-family: "RobotoSlab-Medium";
  margin: 20px;
  text-align: left;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: "RobotoSlab-Medium";
`;
