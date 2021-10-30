import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const DatePickerButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: #f8fbfa;
  border-radius: 10px;
  margin-bottom: 15px;
  border-width: 1px;
  border-color: #dadfe2;
`;

export const DateText = styled.Text`
  color: #000000;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #dadfe2;
`;
