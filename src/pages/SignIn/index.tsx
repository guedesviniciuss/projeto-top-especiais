import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logoImg} style={{width: 120, height: 120, marginBottom: -48}}/>

          <Title>Faça o seu logon</Title>

          <Input name="email" icon="mail" placeholder="E-mail"/>

          <Input name="password" icon="lock" placeholder="Senha" secureTextEntry={true}/>

          <Button onPress={() => navigation.navigate('Dashboard')}>Entrar</Button>

          <ForgotPassword onPress={() => {console.log('esqueci')}}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#FFF"/>
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      </ScrollView>
    </>
  );
}

export default SignIn;
