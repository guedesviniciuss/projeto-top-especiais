import React, { useState, useEffect, useCallback } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import api from '../../api';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Input,
  Card,
  Main,
  Info,
  TitleApp,
  Summary,
  Img,
  SearchButton,
  Search,
  ButtonText,
  Logos,
  GoToMyAppointmentsButton,
  UserIconContainer,
} from './styles';

export interface Camera {
  cameraModalOpened: boolean;
  dataModalOpened: boolean;
  realtyData: {
    images: [];
  };
}

export interface ApplicationsData {
  id: string;
  doctorName: string;
  description: string;
  hour: Date;
  isAppointed: boolean;
  phone: string;
  doctor: {
    id: string;
    doctorName: string;
    phone: string;
    especialidade: string;
    createdAt: string;
    updatedAt: string;
  };
}

const Dashboard: React.FC = () => {
  const [applications, setApplications] = useState<ApplicationsData[]>([]);
  const [isLogged, setIsLogged] = useState(true);
  const [filterText, setFilterText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get<ApplicationsData[]>('/doctors');
      setApplications([...response.data]);
    }
    fetchApi();
  }, []);

  const handleButtonPress = useCallback(async (name: string) => {
    const response = await api.get<ApplicationsData[]>('/doctors', {
      params: { name },
    });
    setApplications([...response.data]);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header>
          <Logos>
            <UserIconContainer
              onPress={() =>
                navigation.navigate('Profile', {
                  patient: sessionMock,
                })
              }
            >
              {isLogged ? (
                <Image
                  source={{
                    uri: 'https://image.flaticon.com/icons/png/512/1060/1060888.png',
                  }}
                  style={{ width: 46, height: 46 }}
                />
              ) : (
                <Icon name="user" size={20} color={'#000'} />
              )}
            </UserIconContainer>
            <GoToMyAppointmentsButton
              onPress={() =>
                navigation.navigate('MyAppointments', {
                  patient: sessionMock,
                })
              }
            >
              <ButtonText style={{ fontSize: '12px' }}>
                Meus Agendamentos
              </ButtonText>
            </GoToMyAppointmentsButton>
          </Logos>
          <Search>
            <Input
              placeholder="Busque os nossos doutores"
              // onChangeText={text => setFilteredApplication(text)}
              onChangeText={(value) => setFilterText(value)}
            />
            <SearchButton
              // onPress={() => handleFilterApplications(filteredApplication)}
              onPress={() => handleButtonPress(filterText)}
            >
              <ButtonText>Buscar</ButtonText>
            </SearchButton>
          </Search>
        </Header>
        <ScrollView>
          {applications.map((item) => (
            <Card
              key={item.id}
              onPress={() =>
                navigation.navigate('Applications', {
                  item,
                })
              }
            >
              <Main>
                <Img
                  source={{
                    uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
                  }}
                />
                <Info>
                  <TitleApp>{item.doctorName}</TitleApp>
                  <Summary>{'(83) 988888888'}</Summary>
                </Info>
              </Main>
            </Card>
          ))}
        </ScrollView>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

const sessionMock = {
  id: 1,
  patientName: 'Jose Santos',
  email: 'j.santos@projeto.com.br',
  photo: 'https://image.flaticon.com/icons/png/512/1060/1060888.png',
};

const doctorsMock = [
  {
    id: 1,
    doctorName: 'Jose Santos',
    address: 'Rua alguma rua',
    phone: '(83) 988888888',
    photo:
      'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
    schedules: [
      {
        id: 1,
        hour: '2021-11-03 23:59:59',
        available: true,
      },
      {
        id: 2,
        hour: '2021-11-13 23:59:59',
        available: false,
      },
      {
        id: 3,
        hour: '2021-11-23 23:59:59',
        available: false,
      },
      {
        id: 4,
        hour: '2021-11-29 23:59:59',
        available: true,
      },
    ],
  },
  {
    id: 2,
    doctorName: 'Matheus Gama',
    address: 'Rua alguma rua',
    phone: '(83) 988888888',
    photo:
      'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
    schedules: [
      {
        id: 1,
        hour: '2021-12-06 23:39:00',
        available: true,
      },
      {
        id: 2,
        hour: '2021-12-16 23:39:00',
        available: false,
      },
      {
        id: 3,
        hour: '2021-12-26 23:39:00',
        available: false,
      },
      {
        id: 4,
        hour: '2021-12-30 23:39:00',
        available: true,
      },
    ],
  },
  {
    id: 3,
    doctorName: 'Vinicius Guedes',
    address: 'Rua alguma rua',
    phone: '(83) 988888888',
    photo:
      'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
    schedules: [
      {
        id: 1,
        hour: '2021-10-01 23:59:24',
        available: true,
      },
      {
        id: 2,
        hour: '2021-10-11 23:59:24',
        available: false,
      },
      {
        id: 3,
        hour: '2021-10-21 23:59:24',
        available: false,
      },
      {
        id: 4,
        hour: '2021-10-31 23:59:24',
        available: true,
      },
    ],
  },
  {
    id: 4,
    doctorName: 'Raoni',
    address: 'Rua alguma rua',
    phone: '(83) 988888888',
    photo:
      'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
    schedules: [
      {
        id: 1,
        hour: '2021-10-01 23:59:24',
        available: true,
      },
      {
        id: 2,
        hour: '2021-10-11 23:59:24',
        available: false,
      },
      {
        id: 3,
        hour: '2021-10-21 23:59:24',
        available: false,
      },
      {
        id: 4,
        hour: '2021-10-31 23:59:24',
        available: true,
      },
    ],
  },
  {
    id: 5,
    doctorName: 'Laureano',
    address: 'Rua alguma rua',
    phone: '(83) 988888888',
    photo:
      'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg',
    schedules: [
      {
        id: 1,
        hour: '2021-10-01 23:59:24',
        available: true,
      },
      {
        id: 2,
        hour: '2021-10-11 23:59:24',
        available: false,
      },
      {
        id: 3,
        hour: '2021-10-21 23:59:24',
        available: false,
      },
      {
        id: 4,
        hour: '2021-10-31 23:59:24',
        available: true,
      },
    ],
  },
];
