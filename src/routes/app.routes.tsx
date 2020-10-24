import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import MatchParty from '../pages/Match';
import MatcherParty from '../pages/MatcherParty';
import ProfileMusic from '../pages/ProfileMusic';
import TasteFood from '../pages/TasteFood';
import RegistrationCompleted from '../pages/RegistrationCompleted';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e28'},
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="MatcherParty" component={MatcherParty} />
    <App.Screen name="Match" component={MatchParty} />
    <App.Screen name="ProfileMusic" component={ProfileMusic} />
    <App.Screen name="TasteFood" component={TasteFood} />
    <App.Screen
      name="RegistrationCompleted"
      component={RegistrationCompleted}
    />
  </App.Navigator>
);

export default AppRoutes;
