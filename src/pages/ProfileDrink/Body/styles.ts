import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TextName = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  width: 100%;
`;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 15px;
`;

export const AlignContent = styled.View`
  flex-direction: column;
  margin: 2px 15px;
  align-items: center;
  width: 80px;
`;

interface Props {
  select?: boolean;
}
export const ContainerText = styled(RectButton)<Props>`
  ${(props: any) =>
    props.select &&
    css`
      opacity: 0.3;
    `}
`;
