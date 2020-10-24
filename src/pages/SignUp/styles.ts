import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const TitleSingUp = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
  margin: 14px 0 54px;
`;

export const BackToSingIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0%;
  background: #363636;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`;
export const PrivacyTerms = styled.View`
  border: 2px;
  height: 15px;
  width: 15px;
`;
export const TermsText = styled.View`
  margin: -16px 0px 0px 25px;
`;

export const ContainerTextCreateAccount = styled.View`
  margin: 20px 0px;
`;
export const ContainerButton = styled.View`
  margin-top: 75px;
`;

export const BackToSingInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 16px;
`;
