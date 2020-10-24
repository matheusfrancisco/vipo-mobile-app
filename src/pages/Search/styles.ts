import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import Platform from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const View = styled.View`
  margin-top: 20px;
`;

export const SeachInput = styled.View`
  align-items: center;
`;
