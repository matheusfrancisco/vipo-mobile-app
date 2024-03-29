import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/pages/Home';
import Match from '@/pages/Match';
import PickerMatcherParty from '@/pages/PickerMatcherParty';
import ProfileMusic from '@/pages/ProfileMusic';
import ProfileDrink from '@/pages/ProfileDrink';
import ProfileFood from '@/pages/ProfileFood';
import RegistrationCompleted from '@/pages/SignUp/RegistrationCompleted';
import Feedback from '@/pages/Feedback';
import Profile from '@/pages/Profile';
import EditProfile from '@/pages/Profile/EditProfile';
import History from '@/pages/History';
import CheckMatch from '@/pages/Match/CheckMatch';

const App = createStackNavigator();

console.log(process.env);

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F8FBFA' },
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Match" component={Match} />
    <App.Screen name="ProfileMusic" component={ProfileMusic} />
    <App.Screen name="ProfileFood" component={ProfileFood} />
    <App.Screen name="ProfileDrink" component={ProfileDrink} />
    <App.Screen name="Profile" component={Profile} />
    <App.Screen name="EditProfile" component={EditProfile} />
    <App.Screen name="Feedback" component={Feedback} />
    <App.Screen name="PickerMatcherParty" component={PickerMatcherParty} />

    <App.Screen
      name="RegistrationCompleted"
      component={RegistrationCompleted}
    />
    <App.Screen name="History" component={History} />
    <App.Screen name="CheckMatch" component={CheckMatch} />
  </App.Navigator>
);

export default AppRoutes;
