import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './store'
import AppUser from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e28" />
      <AppUser>
        <View style={{backgroundColor: '#312e38', flex: 1}}>
          <Routes />
        </View>
      </AppUser>
    </NavigationContainer>
  </Provider>
);

export default App;
