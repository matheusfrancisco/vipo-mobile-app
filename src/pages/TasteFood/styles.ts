import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  align-items: center;
`;

export const HeaderTasteFood = styled.View`
  justify-content: center;
  padding: 30px;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const ContainerContent= styled.View`
  flex-direction:column;
  margin: 0px 50px;
`;

export const TextContainerImage = styled.Text`
  color: #FFF;
  text-align: center;
  margin-top: 2px;
`;


export const TextLikeMusical = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
 
`;

export const ButtonIconHelp = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0%;
  background: #312e28;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content:center;
  align-items: center;
  flex-direction: row;
`;