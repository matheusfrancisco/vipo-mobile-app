import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Seach from '../pages/Search';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes  from './auth.routes';
import AppRoutes  from './app.routes';

import { useAuth }  from '../hooks/auth';

const Routes: React.FC = () => {
  let { user, loading } = useAuth();
  // user ={};
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999"/>
      </View>
    )
  }
  return user? <AppRoutes />: <AuthRoutes />;
};


export default Routes;