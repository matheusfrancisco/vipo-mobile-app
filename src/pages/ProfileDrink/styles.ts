import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const HeaderText = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Container = styled.View`
  align-items: center;
`;

export const HeaderLikeMusic = styled.View`
  justify-content: center;
  padding: 30px;
`;

export const Row = styled.View`
  flex-direction: row;
  padding: 15px;
`;

export const AlignContent = styled.View`
  flex-direction: column;
  margin: 0px 15px;
  align-items: center;
`;

export const TextContainerImage = styled.Text`
  color: #ff6900;
  margin-top: 2px;
`;

export const ButtonIconHelp = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0%;
  background: #312e28;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonWarpper = styled.View`
  margin: 20px 120px;
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
export const TextDrink = styled.Text`
  margin: 20px 120px;
  font-size: 16px;
`;
