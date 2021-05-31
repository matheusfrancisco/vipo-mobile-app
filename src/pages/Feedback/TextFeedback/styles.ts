import styled from 'styled-components/native';
import { TextH3 } from '../../../global';

export const Container = styled.View`
  margin: 10px;
`;

export const Title = styled(TextH3)`
  margin: 12px;
  color: #470a68;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  background-color: #f8fbfa;
  padding: 12px 16px;
  font-size: 16px;
  font-family: 'Sans';
  border: 1px solid #dadfe2;
  border-radius: 5px;
`;
