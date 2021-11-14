import { Pressable } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(Pressable)`
  height: 51px;
  background: ${(props) => (!props.disabled ? '#470a68' : '#808080')};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
