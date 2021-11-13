import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 10px;
  border-width: 1px;
  border-color: #dadfe2;
  margin-bottom: 20px;
`;

export const SelectInput = styled(Picker)`
  color: #363636;
`;
