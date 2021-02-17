import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EmailSend from '../pages/ResetPassword/EmailSend';
import ResetPassword from '../pages/ResetPassword';
import RegistrationCompleted from '../pages/SignUp/RegistrationCompleted';
import LandingPage from '../pages/LandingPage';
import LandingPageTwo from '../pages/LandingPage/LandingPageTwo';
import LandingPageThree from '../pages/LandingPage/LandingPageThree';
import LandingPageFour from '../pages/LandingPage/LandingPageFour';
import Feedback from '../pages/Feedback';


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F8FBFA' },
    }}
    initialRouteName="LandingPage">
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="ResetPassword" component={ResetPassword} />
    <Auth.Screen name="EmailSend" component={EmailSend} />
    <Auth.Screen
      name="RegistrationCompleted"
      component={RegistrationCompleted}
    />
    <Auth.Screen name="LandingPage" component={LandingPage} />
    <Auth.Screen name="LandingPageTwo" component={LandingPageTwo} />
    <Auth.Screen name="LandingPageThree" component={LandingPageThree} />
    <Auth.Screen name="LandingPageFour" component={LandingPageFour} />
  </Auth.Navigator>
);

export default AuthRoutes;
