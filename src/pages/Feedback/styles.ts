import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.Text`
  text-align: center;
  margin: 10px;
`;

export const FeedbackMax = styled.Text`
  margin: 20px;
  color: #470a68;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const AlignCenter = styled.View`
  align-self: center;
`;

export const Container = styled.View`
  margin: 10px;
`;
export const ColorText = styled.Text`
color: #470a68;
`;
export const SelectFeedback = styled(RectButton)<Props>`
  ${(props) =>
      props.select &&
      css`
        opacity: 0.3;
        
      `}
`;

export const ImageItem = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Image = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

interface Props {
  select?: boolean;
}
export const Types = styled.Text<Props>`
  margin: 5px;
  border: 2px solid #000;
  width: 90px;
  height: 20px;
  position: relative;
  border-radius: 5px;
  text-align: center;
  ${(props) =>
    props.select &&
    css`
     background-color: #9283BF;
     font-weight: bold;
    `}
`;
