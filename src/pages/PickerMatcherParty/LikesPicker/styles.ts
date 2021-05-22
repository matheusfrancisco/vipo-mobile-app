import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
`;

interface IOptionButton {
  selected: boolean;
}

export const OptionButton = styled.TouchableWithoutFeedback<IOptionButton>`
  border: 1px solid #9283bf;
  width: 160px;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  text-align: center;
  height: 60px;
  padding-top: 14px;
  ${({ selected }) =>
    selected &&
    css`
      background-color: #470a68;
      color: #fff;
    `}
`;
