import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 50px;
`;

export const AlignContent = styled.View`
  flex-direction: column;
  margin: 0px 50px;
`;

export const HeaderText = styled.View`
  align-items: center;
  padding: 20px;
`;
interface Props {
  select?: boolean;
}
export const ContainerText = styled(RectButton)<Props>`
  ${(props) =>
    props.select &&
    css`
      opacity: 0.3;
    `}
`;
