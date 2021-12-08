import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  background: #ccd2e4;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px 20px;
  align-items: center;
`;

export const Return = styled(Icon)`
  margin-left: 10px;
  margin-top: 20px;
`;

export const MessageContainer = styled.View`
    background-color: 'white';
    margin-right: 50;
    padding: 10;
`;

export const InputContainer = styled.View`

`;
