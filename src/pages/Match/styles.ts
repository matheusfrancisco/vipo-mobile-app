import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex:1;
  flex-direction: row;
`;

export const Description = styled.View`
  position: relative;
  border: 1px;
  height: 100px
  bottom: 400px;
`;

export const Title = styled.Text`
  flex:1;
  font-size: 25px;
  color: white;
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  bottom: 10px;
  background: black;
`;

export const ImageBanner = styled.ImageBackground`
  border: 1px;
  height: 25%;
  margin-top: 18px;
  align-items: center;
`;

export const Insta = styled.Text`
`;

export const Line = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: gray;
  height: 20px;
  width: 80%;
  position: relative;
  left:10px;
  bottom: 8px;
`;
