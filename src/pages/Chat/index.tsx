import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, MessageContainer, Header, Return, InputContainer } from './styles';

interface Message {
  from: string;
  to: string;
  content: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useEffect<Message[]>([]);
 const navigation = useNavigation();

  const handleSend = async (message: Message) => {
    return await api.post(message);
  }

  // Possivel função do react navigation pra voltar pra dashboard
  const onReturn = () => {
      navigation.goBack();
  }


  return (
    <Container>
      <Header>
        <Return name="left" size={20} onPress={onReturn} />
        {/* Possivel BackButton */}
        <ChatTarget />
      </Header>
      <MessageContainer>

      </MessageContainer>
      <InputContainer>
        <ChatInput />
        <SendButton>
          <SendIcon />
        </SendButton>
      </InputContainer>

    </Container>
  );
}

export default Chat;
