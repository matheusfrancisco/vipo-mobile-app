import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  align-items: center;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  padding: 50px;
`;

export const ContainerContent = styled.View`
  flex-direction: column;
  margin: 0px 50px;
`;

export const HeaderText = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Line = styled.Text`
  border-bottom-width: 3px;
  border-bottom-color: #9283bf;
  height: 20px;
  width: 80%;
  position: relative;
  bottom: 20px;
`;