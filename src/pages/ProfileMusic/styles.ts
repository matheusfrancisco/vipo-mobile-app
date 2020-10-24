import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const HeaderText = styled.View`
  align-items: center;
  padding: 20px;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  padding: 15px;
`;

export const ContainerContent = styled.View`
  flex-direction: column;
  margin: 0px 15px;
`;

export const Next = styled.View`
  position: absolute;
  width: 4px;
  height: 4px;
  left: 46px;
  top: 716px;
  background: #c1bccc;
  border-radius: 1px;
  transform: rotate(-180deg);
`;

export const Line = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: #9283bf;
  height: 20px;
  width: 80%;
  position: relative;
  bottom: 20px;
`;
