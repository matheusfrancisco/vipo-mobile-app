import styled from 'styled-components/native';
import { Platform } from 'react-native';

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
  margin-right: 20px;
`;

export const TextContainerImage = styled.Text`
  color: #FFF;
  text-align: center;
  margin-top: 2px;
`;


export const SearchRole = styled.View`
  background-color: #871F9A;

`;


export const TextMatcher = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 20px;
  text-align: left;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 30px;
  text-align: center;
`;
