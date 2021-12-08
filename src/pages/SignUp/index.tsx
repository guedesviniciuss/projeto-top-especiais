import React from 'react';
import { Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>

          <Title>Faça o seu cadastro</Title>

          <Input name="name" icon="user" placeholder="Name"/>

          <Input name="email" icon="mail" placeholder="E-mail"/>

          <Input name="password" icon="lock" placeholder="Senha" secureTextEntry={true}/>

          <Input name="password" icon="lock" placeholder="Confirmar Senha" secureTextEntry={true}/>

          <Button onPress={() => console.log('criou')}>Criar Conta</Button>
        </Container>
        <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
          <Icon name="arrow-left" size={20} color="#FFF"/>
          <BackToSignInText>Voltar para Login</BackToSignInText>
        </BackToSignIn>
      </ScrollView>
    </>
  );
}

export default SignIn;
