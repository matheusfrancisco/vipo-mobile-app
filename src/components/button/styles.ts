import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 51px;
  background: #871F9A;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Sans';
  color: #fff;
  font-size: 16px;
`;