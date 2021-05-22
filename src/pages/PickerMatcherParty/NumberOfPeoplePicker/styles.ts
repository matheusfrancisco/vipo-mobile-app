import styled, { css } from 'styled-components/native';

interface IOptionButton {
  selected: boolean;
}

export const OptionButton = styled.TouchableWithoutFeedback<IOptionButton>`
  border: 1px solid #9283bf;
  border-radius: 10px;

  width: 12%;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;

  color: #333333;
  ${({ selected }) =>
    selected &&
    css`
      background-color: #470a68;
      color: #fff;
    `}
`;
