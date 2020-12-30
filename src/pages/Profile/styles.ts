import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View``;


export const AlignIconHeader = styled.View`
  border-width: 1px;
  padding: 10px;
  align-items: flex-end;
  background-color: #a396cb;
  margin: -20px 80px 0px 270px;
  border-radius: 2px;
  border-color: #a396cb;
`;

export const ContainerButton = styled.View`
  margin: 20px;
  width: 90%;
  bottom: 0px;
`
export const ContainerForm = styled.View`
  margin: 20px;
`

export const UserAvatarButton = styled.TouchableOpacity`
  
`;

export const HeaderProfile = styled.View`
  background: #9283bf;
  width: 100%;
  height: 160px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconBorder = styled(RectButton)`
  margin: 20px 0px 110px 20px;
  border-width: 10px;
  border-color: #a396cb;
  background: #a396cb;
  border-radius: 0.1px;
`;

export const AlignText = styled.Text`
  margin-top: 20px;
  color: #000;
  text-align: center;
`;
export const ImageItem = styled.Image`
  width: 50%;
  align-self: center;
  height: 200px;
  border-radius: 5px;
  position: relative;
  margin-top: -100px;
`;

export const Colunn = styled.View`
  margin-top: 40px;
  margin-bottom: 10px;
  align-self: center;
`;

export const AlignIcon = styled.View`
  margin: 10px;
  flex-direction: row;
  justify-content: space-around;
`;
export const ColorText = styled.Text`
  color: #9283bf;
`;

export const ColorTextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 6px;
`;

export const ButtonEditLike = styled(RectButton)`
  width: 134px;
  height: 36px;
  background-color: #9283BF;
  border-radius: 5px;
  margin-left: 200px;
  margin-top: 20px;
`;

