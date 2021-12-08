import React, { useState, useEffect, useCallback } from 'react';
import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import logoOdonto from '../../assets/logoodonto.png';
import bradescoLogo from '../../assets/bradesco.png';

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
} from './styles';

export interface ApplicationsData {
  id: string;
  name: string;
  summary: string;
  description: string;
  thumbnail: string;
  phone: number;
  link: string;
}

const doctorsMock = [
  {
    id: 1,
    name: 'Jose Santos',
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
    name: 'Matheus Gama',
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
    name: 'Vinicius Guedes',
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
    name: 'Raoni',
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
    name: 'Laureano',
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

const Dashboard: React.FC = () => {
  // const [filteredApplication, setFilteredApplication] = useState('');
  // const [applications, setApplications] = useState<ApplicationsData[]>([]);
  const navigation = useNavigation();

  // const handleFilterApplications = useCallback(async (name: string) => {
  //   const response = await api.get<ApplicationsData[]>(`/applications`, {
  //     params: {
  //       name,
  //     },
  //   });

  //   setApplications([...response.data]);
  // }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <Container>
        <Header>
          <Logos>
            <Image source={bradescoLogo} style={{width: 130, height: 20}}/>
            <Image source={logoOdonto} style={{width: 100, height: 40}}/>
          </Logos>
          <Search>
            <Input
              placeholder="Busque os nossos doutores"
              // onChangeText={text => setFilteredApplication(text)}
              onChangeText={console.log}
            />
            <SearchButton
              // onPress={() => handleFilterApplications(filteredApplication)}
              onPress={() => console.log('pesquisei')}
            >
              <ButtonText>Buscar</ButtonText>
            </SearchButton>
          </Search>
        </Header>
        <ScrollView>
          {doctorsMock.map(item => (
            <Card
              key={item.id}
              onPress={() =>
                navigation.navigate('Applications', {
                  doctor: item,
                })
              }
            >
              <Main>
                <Img
                  source={{
                    uri: item.photo,
                  }}
                />
                <Info>
                  <TitleApp>{item.name}</TitleApp>
                  <Summary>{item.phone}</Summary>
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
