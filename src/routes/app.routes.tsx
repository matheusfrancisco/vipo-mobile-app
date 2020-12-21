import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import MatchParty from '../pages/Match';
import PickerMatcherParty from '../pages/PickerMatcherParty';
import ProfileMusic from '../pages/ProfileMusic';
import ProfileFood from '../pages/ProfileFood';
import RegistrationCompleted from '../pages/RegistrationCompleted';
import Feedback from '../pages/Feedback';
import Profile from '../pages/Profile';
import LandingPage from '../pages/LandingPage';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#F8FBFA'},
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="PickerMatcherParty" component={PickerMatcherParty} />
    <App.Screen name="Match" component={MatchParty} />
    <App.Screen name="ProfileMusic" component={ProfileMusic} />
    <App.Screen name="ProfileFood" component={ProfileFood} />
    <App.Screen name="Feedback" component={Feedback} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="LandingPage" component={LandingPage} />

    <App.Screen
      name="RegistrationCompleted"
      component={RegistrationCompleted}
    />
  </App.Navigator>
);

export default AppRoutes;
