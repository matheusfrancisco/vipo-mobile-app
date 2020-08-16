import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 20px;
  background: #871F9A;
  border: 10px;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin: 215px 120px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 16px;
`;