import React, { useEffect, useState } from 'react';

import { Text, Dimensions, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Return,
  Card,
  Img,
  ButtonCancelarConsulta,
  ButtonCancelarConsultaTexto,
} from './styles';

import { ApplicationsData } from '../Dashboard';
import api from '../../api';

interface Route {
  route: ApplicationsData;
}

const { width: screenWidth } = Dimensions.get('window');

const onRemove = (removeId, data) => {
  const res = data.filter((obj) => obj.id !== removeId);
  return res;
};

const MyAppointments: React.FC<Route> = ({ route }) => {
  const navigation = useNavigation();
  const { photo } = route.params.patient;
  const [appointments, setAppointments] = useState<ApplicationsData[]>([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get<ApplicationsData[]>(`/appointments/mine`);

      setAppointments([...response.data]);
      console.log();
    }

    fetchApi();
  }, []);

  return (
    <Container>
      <Return name="left" size={20} onPress={() => navigation.goBack()} />
      <Header>
        <Img
          source={{
            uri: photo,
          }}
        />
      </Header>
      <ScrollView>
        {appointments?.map((item) => (
          <Card key={item.id}>
            <Text style={{ color: '#000' }}>Horário: {item.hour}</Text>
            <Text style={{ color: '#000' }}>Horário: {item.hour}</Text>
            <ButtonCancelarConsulta
              onPress={() => setAppointments(onRemove(item.id, appointments))}
            >
              <ButtonCancelarConsultaTexto>
                Cancelar Consulta
              </ButtonCancelarConsultaTexto>
            </ButtonCancelarConsulta>
          </Card>
        ))}
      </ScrollView>
    </Container>
  );
};

export default MyAppointments;
