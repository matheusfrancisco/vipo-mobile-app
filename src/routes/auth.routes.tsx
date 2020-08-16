import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import MatcherParty from '../pages/MatcherParty';
import LikeMusical from '../pages/LikeMusical';


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e28'},
      }}
      initialRouteName="LikeMusical"
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="MatcherParty" component={MatcherParty} />
      <Auth.Screen name="LikeMusical" component={LikeMusical} />
    </Auth.Navigator>
);

export default AuthRoutes;