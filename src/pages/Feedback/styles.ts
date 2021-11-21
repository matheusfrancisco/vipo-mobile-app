import styled, { css } from 'styled-components/native';

import SubmitButton from '../../components/SubmitButton';
import { TextMin } from '../../global';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Header = styled.Text`
  text-align: center;
  margin: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

interface ISelectableProps {
  isSelected: boolean;
}

export const Option = {
  Button: styled.TouchableOpacity<ISelectableProps>`
    margin: 4px;
    border: 2px solid #000;
    width: 100px;
    height: 48px;
    position: relative;
    border-radius: 5px;
    align-items: center;
    justify-content: center;

    ${({ isSelected }) =>
      isSelected &&
      css`
        background-color: #9283bf;
      `}
  `,
  Text: styled(TextMin)<ISelectableProps>`
    text-align: center;

    font-size: 16px;

    ${({ isSelected }) =>
      isSelected &&
      css`
        font-weight: bold;
      `}
  `,
};

export const Submit = styled(SubmitButton)`
  margin: 10px;
`;
