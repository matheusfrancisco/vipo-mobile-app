import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
`;

interface IOptionButton {
  selected: boolean;
}

export const OptionButton = styled.TouchableWithoutFeedback<IOptionButton>`
  border: 1px solid #9283bf;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  color: #333333;
  padding-top: 10px;
  width: 160px;
  height: 48px;
  ${({ selected }) =>
    selected &&
    css`
      background-color: #470a68;
      color: #fff;
    `}
`;
