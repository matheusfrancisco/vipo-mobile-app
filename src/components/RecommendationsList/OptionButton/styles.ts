import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  select?: boolean;
}
export const Button = styled(RectButton)<ButtonProps>`
  ${({ select }) =>
    select &&
    css`
      opacity: 0.3;
    `}
`;

export const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
`;
