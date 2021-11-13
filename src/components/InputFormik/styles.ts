import FeatherIcon from 'react-native-vector-icons/Feather';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: #f8fbfa;
  border-radius: 10px;
  margin-bottom: 15px;
  border-width: 1px;
  border-color: #dadfe2;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #dadfe2;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000000;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #dadfe2;
`;

export const TextError = styled.Text`
  margin-top: -10px;
  margin-bottom: 10px;
`;
