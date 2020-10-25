import styled from 'styled-components/native';

export const Title = styled.Text`
  flex: 1;
  font-size: 35px;
  color: white;
  font-family: 'RobotoSlab-Medium';
  font-family: bold;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  left: 0;
  background: black;
  margin: 20px;
`;

export const ImageBanner = styled.ImageBackground`
  border: 1px;
  height: 50%;
  align-items: center;
`;

export const Description = styled.View`
  margin: 20px;
  align-items: center;
`;

export const Line = styled.Text`
  border-bottom-width: 3px;
  border-bottom-color: #000;
  height: 5px;
  width: 80%;
  position: relative;
  bottom: 10px;
  align-self: center;
`;

export const Informations = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
<<<<<<< HEAD
=======
  padding: 10px 10px;
  border-color: #ff6900;
`;

export const Liked = styled.View`
  margin-top: 10px;
`;

export const LikedIcons = styled.View`
  border: 1px;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-color: #ff6900;
`;

export const INext = styled(Icon)`
  font-size: 30px;
  text-align: right;
  color: #ff6900;
  margin-right: 2px;
`;

export const ILeft = styled(Icon)`
  font-size: 30px;
  color: #ff6900;
  margin-left: 2px;
`;

export const Like = styled(Icon)`
  font-size: 50px;
  color: green;
  margin-top: -50px;
>>>>>>> Add page feedback
`;

export const MarginText = styled.View`
  margin: 5px 0px 10px 0px;
`;

export const PositionIcon = styled.View`
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
`;
