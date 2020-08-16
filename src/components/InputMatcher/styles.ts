import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 15%;
  height: 30px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #FFF;
  font-size: 16px;
  font-family: 'Sans';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;