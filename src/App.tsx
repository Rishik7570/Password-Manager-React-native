import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/Router';
import StoreProvider from './store/Store';

const App = () => {
  return (
    <NavigationContainer>
      <StoreProvider>
        <Router />
      </StoreProvider>
    </NavigationContainer>
  );
};

export default App;
