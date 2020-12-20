import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ButtonText = styled.TouchableOpacity`
  margin-top: 10px;
  align-items: flex-end;
`;

export const TitleHeader = styled.Text`
  text-align: center;
  color: #470a68;
  font-weight: bold;
`;
