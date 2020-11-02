import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Match from '../pages/Match';
import Home from '../pages/Home';
import MatcherParty from '../pages/MatcherParty';
import ProfileMusic from '../pages/ProfileMusic';
import ProfileFood from '../pages/ProfileFood';
import ProfileDrink from '../pages/ProfileDrink';
import RegistrationCompleted from '../pages/RegistrationCompleted';
import Feedback from '../pages/Feedback';
import Profile from '../pages/Profile';
import ResetPassword from '../pages/ResetPassword';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#F8FBFA'},
    }}
    initialRouteName="ResetPassword">
    <Auth.Screen
      name="RegistrationCompleted"
      component={RegistrationCompleted}
    />

    <Auth.Screen name="Feedback" component={Feedback} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="ProfileDrink" component={ProfileDrink} />
    <Auth.Screen name="ProfileFood" component={ProfileFood} />
    <Auth.Screen name="MatcherParty" component={MatcherParty} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="ProfileMusic" component={ProfileMusic} />
    <Auth.Screen name="Match" component={Match} />
    <Auth.Screen name="ResetPassword" component={ResetPassword} />
  </Auth.Navigator>
);

export default AuthRoutes;
