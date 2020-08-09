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
  font-size: 25px;
  color: #871F9A;
  font-family: 'RobotoSlab-Medium';
  margin: 14px 0 54px;
`;

export const SeachInput = styled.View`
  align-items: center;
  margin-top: 130px;
`;

export const HeaderIcon = styled.View`
  flex-direction: row;
  justify-content: space-between; 
`;