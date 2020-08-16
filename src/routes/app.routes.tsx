import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import MatchParty from '../pages/Match';
import MatcherParty from '../pages/MatcherParty';
import LikeMusic from '../pages/LikeMusic';
import TasteFood from '../pages/TasteFood';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e28'},
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="MatcherParty" component={MatcherParty} />
      <App.Screen name="Match" component={MatchParty} />
      <App.Screen name="LikeMusic" component={LikeMusic} />
      <App.Screen name="TasteFood" component={TasteFood} />
    </App.Navigator>
);

export default AppRoutes;