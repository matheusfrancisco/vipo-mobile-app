import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ButtonText = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: flex-end;
  color: #9283bf;
`;

export const SocialIcon = styled.View`
  flex-direction: row;
`;

export const TitleHeader = styled.View`
  margin: 14px 0px 30px 0px;
`;
export const ContainerTextLoginSocial = styled.View`
  align-items: center;
  margin: 60px 0px 0px 0px;
`;
