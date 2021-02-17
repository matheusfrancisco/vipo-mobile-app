import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Header = styled.Text`
  text-align: center;
  margin: 10px;
`;

export const FeedbackMax = styled.Text`
  margin: 12px;
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
interface Props {
  select?: boolean;
}
export const SelectFeedback = styled(RectButton)<Props>`
  ${(props: any) =>
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

export const Types = styled.Text<Props>`
  margin: 4px;
  border: 2px solid #000;
  width: 100px;
  height: 20px;
  position: relative;
  border-radius: 5px;
  text-align: center;
  ${(props: any) =>
    props.select &&
    css`
      background-color: #9283bf;
      font-weight: bold;
    `}
`;

export const Genre = styled.View`
  margin-top: 15px;
  border: 1px solid #dadfe2;
  border-radius: 10px;
`

export const GenreText = styled.Text`
  font-size: 15px;
  font-family: 'RobotoSlab-Medium';
  margin: 5px 0px 10px 15px;
`

