import styled from 'styled-components/native';

export const ContainerText = styled.Text`
  align-self: center;
`;

export const Item = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ContainerHistory = styled.View`
  align-self: center;
  width: 340px;
  height: 235px;
  border: 2px solid #000;
  border-radius: 15px;
  margin: 20px;
`;

export const ImageItem = styled.Image`
  width: 100%;
  height: 40%;
  border-radius: 10px;
`;

export const TitleImage = styled.Text`
  color: #fff;
  font-weight: bold;
  position: absolute;
  margin-top: 25px;
  margin-left: 10px;
`;
