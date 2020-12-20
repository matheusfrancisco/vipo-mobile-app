import styled from 'styled-components/native';
import {Platform, Image} from 'react-native';

export const ImageItem = styled(Image)`
  /* flex: 1; */
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Container = styled.View``;

export const Header = styled.View`
  width: 395px;
  height: 320px;
  background-color: #470a68;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-top: -30px;
`;

export const Title = styled.Text`
  color: #fff;

  margin-left: 20px;
`;
