import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
`;

interface IOptionButton {
  selected: boolean;
}

export const OptionButton = styled.TouchableOpacity<IOptionButton>`
  border: 1px solid #9283bf;
  border-radius: 10px;
  width: 48%;
  height: 48px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ selected }) =>
    selected &&
    css`
      background-color: #470a68;
    `}
`;

export const OptionText = styled.Text<IOptionButton>`
  text-align: center;
  font-weight: bold;
  color: #333333;

  ${({ selected }) =>
    selected &&
    css`
      color: #fff;
    `}
`;
