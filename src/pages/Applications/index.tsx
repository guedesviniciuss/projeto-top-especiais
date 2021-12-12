import React, { useRef, useEffect, useState } from 'react';

import {
  Text,
  Dimensions,
  StyleSheet,
  Platform,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Return,
  Title,
  Description,
  Main,
  Img,
  Card,
  ButtonMarcarConsulta,
  ButtonMarcarConsultaTexto,
} from './styles';

import { ApplicationsData } from '../Dashboard';
import api from '../../api';

interface Route {
  route: {
    params: {
      item: ApplicationsData;
    };
  };
}

const { width: screenWidth } = Dimensions.get('window');

const Applications: React.FC<Route> = ({ route }) => {
  const navigation = useNavigation();
  const [schedule, setSchedule] = useState<any[]>([]);

  const { item } = route.params;

  const handleSchedule = async (id: any) => {
    const response = await api.patch<ApplicationsData[]>(
      `/appointments/${id}/agendar`,
    );
    setSchedule(
      schedule.map((s) => {
        if (s.id == id) s.isAppointed = true;
        return s;
      }),
    );
  };

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get<ApplicationsData[]>(`/appointments`, {
        params: { id: item.id },
      });

      setSchedule([...response.data]);
    }

    fetchApi();
  }, []);

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  return (
    <Container>
      <Return name="left" size={20} onPress={() => navigation.goBack()} />
      <Header>
        <Img
          source={{
            uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
          }}
        />
        <Main>
          <Title>{item.doctorName}</Title>
          <Description>{item.phone}</Description>
        </Main>
      </Header>
      <ScrollView>
        {schedule?.map((item) => (
          <Card
            key={item.id}
            style={{ background: !item.isAppointed ? '#DCF8C5' : '#bd0d0d' }}
          >
            <Text style={{ color: !item.isAppointed ? '#000' : '#fff' }}>
              Horário: {item.hour}
            </Text>
            <Text style={{ color: !item.isAppointed ? '#000' : '#fff' }}>
              {!item.isAppointed ? 'Disponível' : 'Não disponível'}
            </Text>
            <ButtonMarcarConsulta
              disabled={item.isAppointed}
              style={{ background: item.isAppointed ? '#474747' : 'green' }}
            >
              <ButtonMarcarConsultaTexto
                onPress={() => handleSchedule(item.id)}
              >
                Agendar Consulta
              </ButtonMarcarConsultaTexto>
            </ButtonMarcarConsulta>
          </Card>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Applications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

const ENTRIES1 = [
  {
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
