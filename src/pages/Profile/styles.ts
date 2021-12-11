import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #e0f3ff;
`;

export const Header = styled.View`
  flex-direction: column;
  margin: 0px 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  margin-bottom: -10px;
`;

export const Return = styled(Icon)`
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const MessageContainer = styled.View`
  background-color: 'white';
  margin-right: 50;
`;

export const Img = styled.Image`
  border-radius: 50px;
  border: 1px solid black;
  width: 80px;
  height: 80px;
`;

export const CameraIconContainer = styled(TouchableOpacity)`
  background-color: pink;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  transform: translate(35px, 35px);
`;

export const Card = styled.View`
  margin: 0 20px;
  background-color: #fff;
  height: 380px;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #edf6fc;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;

export const CardRow = styled.View`
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
  /* background-color: #ddd; */
  height: 40px;
  margin-top: 5px;
`;

export const CardTitle = styled.Text`
  color: #ccc;
  size: 15px;
  font-weight: bold;
`;

export const EditButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #889ae8;
  border: none;
  padding: 16px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const EditButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-left: 16px;
`;

export const InputContainer = styled.View``;
