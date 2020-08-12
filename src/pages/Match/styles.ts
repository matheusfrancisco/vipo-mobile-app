import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex:1;
  flex-direction: row;
`;


export const Informations = styled.View`
  position: relative;
  height: 300px
  bottom: 200px;
  margin: 10px 10px;
`;

export const Title = styled.Text`
  flex:1;
  font-size: 25px;
  color: white;
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  bottom: 18px;
  background: black;
`;

export const Week = styled.Text`
  flex:1;
  font-size: 10px;
  color: white;
  font-family: 'RobotoSlab-Medium';
  position: absolute;
  bottom: 3px;
  background: black;
`;

export const ImageBanner = styled.ImageBackground`
  border: 1px;
  height: 25%;
  margin-top: 18px;
  align-items: center;
`;

export const Insta = styled.Text`
`;

export const Line = styled.Text`
  border-bottom-width: 1px;
  border-bottom-color: gray;
  height: 20px;
  width: 80%;
  position: relative;
  left:10px;
  bottom: 8px;
`;

export const Description = styled.Text`
  border-bottom-width: 1px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const DescriptionInfo = styled.View`
  flex-direction: row;
  height: 100px
`;

export const PubInformations = styled.View`
  border: 1px;
  flex:1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PubTicket = styled.Text`
  border: 1px;
  width: 50%;
  text-align: center;
  padding: 20px;
`;

export const Offert = styled.View`
  border: 1px;
  margin-top: 10px;
  padding: 10px 10px;
`;

export const Liked = styled.View`
  margin-top: 10px;
`;

export const LikedIcons = styled.View`
  border: 1px;
  height: 200px
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const INext = styled(Icon)`
  font-size: 50px;
  text-align: right;
`;

export const ILeft = styled(Icon)`
  font-size: 50px;
`;

export const Like = styled(Icon)`
  font-size: 50px;
`;

export const Dislike = styled(Icon)`
  font-size: 50px;
`;

export const Calendar = styled(Icon)`
  font-size: 50px;
  position: relative;
  bottom: 58px;
  left: 164px;
`;

export const Share = styled(Icon)`
  font-size: 40px;
  position: relative;
  bottom: 100px;
  left: 282px;
`;
