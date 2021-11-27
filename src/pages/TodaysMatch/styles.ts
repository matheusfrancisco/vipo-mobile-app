import styled from 'styled-components/native';

import Button from '../../components/Button';
import { Title4 } from '../../global';

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
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

export const Title = styled(Title4)`
  color: #fff;
  margin-left: 20px;
`;

export const WrapperButtons = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const IWentButton = styled(Button)`
  width: 350px;
  margin-top: 40px;
  background-color: #470a68;
  border-radius: 15px;
`;

export const IDidntGoButton = styled(Button)`
  width: 186px;
  font-size: 40px;
  margin-top: 20px;
  background-color: #ff6900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-family: bold;
  color: #f8f8f8;
  font-weight: 300;
`;
