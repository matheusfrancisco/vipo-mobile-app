import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MatcherParty from "../pages/MatcherParty";
import LikeMusic from "../pages/LikeMusic";
import TasteFood from "../pages/TasteFood";
import TasteDrink from "../pages/TasteDrink";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#312e28" },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="MatcherParty" component={MatcherParty} />
    <Auth.Screen name="LikeMusic" component={LikeMusic} />
    <Auth.Screen name="TasteFood" component={TasteFood} />
    <Auth.Screen name="TasteDrink" component={TasteDrink} />
  </Auth.Navigator>
);

export default AuthRoutes;
