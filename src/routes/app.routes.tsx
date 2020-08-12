import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import MatchParty from '../pages/Match';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e28'},
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Match" component={MatchParty} />
    </App.Navigator>
);

export default AppRoutes;