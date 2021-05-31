import styled, { css } from 'styled-components/native';
import { TextMin, Title3 } from '../../../global';

export const Container = styled.View`
  margin: 10px;
`;

export const Title = styled(Title3)`
  margin: 12px;
  color: #470a68;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

interface ISelectableProps {
  isSelected: boolean;
}

export const Option = {
  Button: styled.TouchableOpacity<ISelectableProps>`
    margin: 4px;
    border: 2px solid #000;
    width: 100px;
    height: 36px;
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
