import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ApplicationsData } from '../Dashboard';

import {
  Container,
  Header,
  Return,
  Img,
  CameraIconContainer,
  Card,
  CardRow,
  CardTitle,
  EditButton,
  EditButtonText,
} from './styles';
import { Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Message {
  from: string;
  to: string;
  content: string;
}

interface Route {
  route: {
    params: {
      patient: {
        id: number;
        patientName: string;
        email: string;
        photo: string;
      };
    };
  };
}

const Profile: React.FC<Route> = ({ route }) => {
  const { patientName, email, photo } = route.params.patient;
  const navigation = useNavigation();

  // Possivel função do react navigation pra voltar pra dashboard
  const onReturn = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Return name="left" size={20} onPress={onReturn} />
      <Header>
        <Img
          source={{
            uri: photo,
          }}
        />
        <CameraIconContainer onPress={() => navigation.navigate('CameraTest')}>
          <Icon name="camera" size={16} color={'#000'} />
        </CameraIconContainer>
      </Header>
      <Card>
        <CardRow>
          <CardTitle>Username:</CardTitle>
          <Text>{patientName}</Text>
        </CardRow>
        <CardRow>
          <CardTitle>Email:</CardTitle>
          <Text>{email}</Text>
        </CardRow>
        <CardRow>
          <CardTitle>Senha:</CardTitle>
          <Text>***********</Text>
        </CardRow>
      </Card>
      <EditButton>
        <Icon name="user" size={20} color="#FFF" />
        <EditButtonText>Editar Dados</EditButtonText>
      </EditButton>
    </Container>
  );
};

export default Profile;
