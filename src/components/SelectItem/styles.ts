import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

interface Props {
  error: boolean;
}

export const Container = styled.View<Props>`
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => (props.error ? '#c53030' : '#dadfe2')};
  margin-bottom: 20px;
`;

export const SelectInput = styled(Picker)`
  color: #363636;
`;
