import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #f5fbff;
`;

export const Header = styled.View`
  background: #a6dcff;
  padding: 30px 0;
  flex-direction: column;
  justify-content: center;
`;

export const Logos = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
  margin-bottom: 30px;
  /* background-color: #fff; */
`;

export const UserIconContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #f3f3f3;
  border-radius: 50%;
  border: 1px solid #005eff;
  overflow: hidden;

  /* padding: 0px 30px;
  /* padding: 0px 30px;
  margin-bottom: 20px;
  background-color: #fff; */
`;

export const GoToMyAppointmentsButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #005eff;
  padding: 2px;
  width: 140px;
  height: 30px;

  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const Input = styled.TextInput`
  background: #fff;
  /* width: 80px; */
  height: 40px;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  padding: 0 20px;
  flex: 1;
  /* margin-right: 10px; */
`;

export const Card = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #cce7ff;
  align-self: stretch;
  text-align: center;
  margin: 5px 15px;
  padding: 20px;
  height: 130px;
  /* shadow-color: #000;
  shadow-offset: {
    width: 0;
    height: 1;
  }
  shadow-radius: 1.41px; */

  /* elevation: 2; */
`;

export const Main = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Info = styled.View`
  flex-direction: column;
`;

export const Search = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`;

export const Img = styled.Image`
  border-radius: 50px;
  width: 64px;
  height: 64px;
  margin-right: 10px;
`;

export const TitleApp = styled.Text`
  font-size: 19px;
  font-weight: bold;
`;

export const Summary = styled.Text`
  font-size: 15px;
  width: 250px;
  text-align: center;
  margin-top: 2px;
`;

export const Tags = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
`;

export const SearchButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #75c948;
  width: 80px;
  height: 40px;

  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const Heart = styled(Icon)`
  color: red;
  margin-right: 3px;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;

export const AvaliationText = styled.Text`
  font-size: 14px;
`;
