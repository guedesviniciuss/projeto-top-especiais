import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8295f2"/>
    <View style={{ flex: 1, backgroundColor: '#8295f2' }}>
      <Routes></Routes>
    </View>
  </>
);

export default App;
