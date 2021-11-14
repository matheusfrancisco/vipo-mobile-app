import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 35px;
  color: #470a68;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
`;

export const Title4 = styled.Text`
  font-size: 35px;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
`;
export const Title2 = styled.Text`
  font-size: 45px;
  font-family: 'RobotoSlab-Medium';
  font-weight: bold;
`;

export const Title3 = styled.Text`
  font-size: 25px;
  font-family: 'RobotoSlab-Medium';
`;

interface TextProps {
  primary?: boolean;
}

export const TextH3 = styled.Text<TextProps>`
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  color: ${(props) => (props.primary ? '#fff' : '#470a68')};
`;

export const TextH3Link = styled(TextH3)`
  text-decoration: underline;
`;

export const TextH2 = styled.Text`
  font-size: 20px;
  font-family: bold;
  color: #470a68;
`;

export const TextMin = styled.Text`
  font-size: 12px;
  font-family: 'RobotoSlab-Medium';
`;

export const TextMinAsker = styled.Text`
  font-size: 15px;
  color: #000;
  font-family: 'RobotoSlab-Medium';
  align-self: center;
`;

export const TextH5 = styled.Text`
  font-size: 14px;
  font-family: 'RobotoSlab-Medium';
`;

export const TextItalic = styled.Text`
  text-decoration: underline;
`;
