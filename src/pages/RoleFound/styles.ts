import styled from 'styled-components/native';
import Platform from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  color: #9283bf;
  font-weight: bold;
  text-decoration:underline;
  top: 0;
  margin-top: 70px;
  position: absolute;
`;
export const IconBorder = styled(RectButton)`
  border-width: 10px;
  border-color: #a396cb;
  background: #a396cb;
  border-radius: 0.1px;
  left: 0px;
  top: 0px;
  margin: 18px;
  position: absolute;
`;

export const ContainerHistory = styled.View`
  width: 340px;
  height: 235px;
  border: 1px solid #000;
  border-radius: 15px;
`

export const ImageItem = styled.Image`
  width: 100%;
  height: 40%;
  border-radius: 10px;
`

export const TitleImage = styled.Text`
  color: #fff;
  font-weight: bold;
  top: 0;
  position:absolute;
  margin-top: 25px;
  margin-left: 10px;
`

export const Item = styled.View`
 padding: 10px;
 flex-direction: row;
 justify-content: space-evenly;
`

export const ContainerText = styled.Text`
  align-self: center;

`