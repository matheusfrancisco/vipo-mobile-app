import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;


export const Title = styled.Text`
  font-size: 25px;
  color: #871F9A;
  font-family: 'RobotoSlab-Medium';
  margin: 14px 0 54px;
`;


export const BackToSingIn = styled.TouchableOpacity`
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


export const BackToSingInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`;
