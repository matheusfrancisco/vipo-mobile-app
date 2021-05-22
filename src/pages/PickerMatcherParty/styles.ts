import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Title3 } from '../../global';
import Button from '../../components/Button';

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  background-color: #470a68;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-top: -30px;
`;

export const Title = styled(Title3)`
  color: #fff;
  margin-left: 20px;
`;

export const PickerItem = styled.View`
  width: 90%;
  border-radius: 15px;
  margin: 15px;
  border: 3px solid #9283bf;
  border-radius: 15px;
  align-items: center;
`;

export const TextH5 = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  color: #9283bf;
  text-align: center;
  margin: 15px;
`;

export const Accordion = styled(RectButton)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #9283bf;
  right: 0;
  position: absolute;
  margin-top: 14px;
  margin-right: 5px;
  padding: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const BackButton = styled(Button)`
  margin-left: 20px;
  margin-right: 10px;
  width: 150px;
  margin-bottom: 5px;
  bottom: 0px;
`;

export const ConfirmButton = styled(Button)`
  width: 200px;
  bottom: 0px;
`;
