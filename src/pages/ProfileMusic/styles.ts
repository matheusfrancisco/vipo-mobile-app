import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
`;

export const HeaderText = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 15px;
`;

export const AlignContent = styled.View`
  flex-direction: column;
  margin: 0px 15px;
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
export const TextMusic = styled.Text`
  color: #9283bf;
`;
