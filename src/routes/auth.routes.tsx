import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
<<<<<<< HEAD
import MatcherParty from '../pages/MatcherParty';
import LikeMusical from '../pages/LikeMusic';
import TasteFood from '../pages/TasteFood';
import MatchParty from '../pages/Match';
=======
>>>>>>> Edit navigate to add all fluxo

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e28'},
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
);

export default AuthRoutes;