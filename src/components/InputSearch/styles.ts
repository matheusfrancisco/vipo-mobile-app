import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f8fbfa;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border: #dadfe2;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #dadfe2;
  font-size: 16px;
  font-family: 'Sans';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #dadfe2;
`;
