import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Match from "../pages/Match";
import Home from "../pages/Home";
import MatcherParty from "../pages/MatcherParty";
import LikeMusic from "../pages/LikeMusic";
import TasteFood from "../pages/TasteFood";
import TasteDrink from "../pages/TasteDrink";

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#363636" },
    }}
    initialRouteName={"Match"}
  >
    <Auth.Screen name="TasteDrink" component={TasteDrink} />
    <Auth.Screen name="TasteFood" component={TasteFood} />
    <Auth.Screen name="MatcherParty" component={MatcherParty} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="LikeMusic" component={LikeMusic} />
    <Auth.Screen name="Match" component={Match} />
  </Auth.Navigator>
);

export default AuthRoutes;
