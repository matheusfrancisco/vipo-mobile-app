import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  background-color: #470a68;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-top: -30px;
`;
export const Title = styled.Text`
  color: #fff;
  margin-left: 20px;
`;
export const PickerItem = styled.View`
  width: 90%;
  border-radius: 15px;
  margin: 15px;
  border: 3px solid #9283bf;
  border-radius: 15px;
  align-items: center;
`;
export const TextH5 = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  color: #9283bf;
  text-align: center;
  margin: 15px;
`;
export const Expander = styled(RectButton)`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #9283bf;
  right: 0;
  position: absolute;
  margin-top: 14px;
  margin-right: 5px;
  padding: 5px;
`;
interface Props {
  select?: boolean;
}

export const Body = styled.Text<Props>`
  border: 1px solid #9283bf;
  width: 12%;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #333333;
  ${(props) =>
    props.select &&
    css`
      background-color: #470a68;
      color: #fff;
    `}
`;
export const BodyPlansToday = styled.Text<Props>`
  border: 1px solid #9283bf;
  width: 160px;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
  text-align: center;
  height: 60px;
  padding-top: 14px;
  ${(props) =>
    props.select &&
    css`
      background-color: #470a68;
      color: #fff;
    `}
`;

export const BodySpendingPerson = styled.Text<Props>`
  border: 1px solid #9283bf;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
  font-weight: bold;
  color: #333333;
  padding-top: 10px;
  width: 160px;
  height: 48px;
  ${(props) =>
    props.select &&
    css`
      background-color: #470a68;
      color: #fff;
    `}
`;
export const ContainerPickerRow = styled.View`
  flex-direction: row;
  position: relative;
  margin-bottom: 5px;
`;
export const ContainerPickerColumn = styled.View`
  flex-direction: column;
`;
