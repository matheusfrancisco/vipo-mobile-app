import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;


export const Title = styled.Text`
  flex:1;
  font-size: 25px;
  color: #871F9A;
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  bottom: 10px;
`;

export const ImageBanner = styled.View`
  border: 1px;
  height: 25%;
  margin-top: 18px;
  align-items: center;
`;
