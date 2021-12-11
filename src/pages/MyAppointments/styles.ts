import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f5fbff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px 20px;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  flex-shrink: 1;
`;

export const Title = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  color: black;
`;

export const Summary = styled.View`
  flex-direction: column;
  margin: 30px 30px;
`;

export const SummaryTitle = styled.Text`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

export const SummaryDescription = styled.Text`
  color: black;
`;

export const Download = styled.TouchableOpacity`
  background: #75c948;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const DownloadText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const Img = styled.Image`
  border-radius: 50px;
  width: 80px;
  height: 80px;
`;

export const Return = styled(Icon)`
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Card = styled.View`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #dcf8c5;
  border-radius: 10px;
  border: 1px solid #cce7ff;
  align-self: stretch;
  text-align: center;
  margin: 5px 15px;
  padding: 20px;
  height: 130px;
`;

export const ButtonCancelarConsulta = styled.TouchableOpacity`
  margin-top: 10px;
  background: #bd0d0d;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  flex: 1;
`;

export const ButtonCancelarConsultaTexto = styled.Text`
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  flex: 1;
`;
