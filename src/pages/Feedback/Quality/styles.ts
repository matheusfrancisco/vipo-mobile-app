import { RectButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';
import { Title3 } from '../../../global';

export const Container = styled.View`
  margin: 10px;
`;

export const Title = styled(Title3)`
  margin: 12px;
  color: #470a68;
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

interface ISelectableProps {
  isSelected: boolean;
}

export const Option = {
  Button: styled(RectButton)<ISelectableProps>`
    ${({ isSelected }) =>
      isSelected &&
      css`
        opacity: 0.3;
      `}
  `,
  Emoji: styled.Image`
    width: 50px;
    height: 50px;
  `,
};
