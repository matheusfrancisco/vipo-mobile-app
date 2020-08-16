import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  padding: 0 0px ${Platform.OS === 'android' ? 20 : 40}px;
`;

export const ContainerImage = styled.View`
  padding: 0 0px ${Platform.OS === 'android' ? 20 : 40}px;
  margin-left: 10px;
  flex-direction: row;
`;

export const ContainerContent= styled.View`
  flex-direction:column;
  margin-right: 40px;
  margin-bottom: 25px;
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
  margin: 5px 0px;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 30px;
  text-align: center;
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