import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Match from "../pages/Match";
import Home from "../pages/Home";
import MatcherParty from "../pages/MatcherParty";
import ProfileMusic from "../pages/ProfileMusic";
import TasteFood from "../pages/TasteFood";
import TasteDrink from "../pages/TasteDrink";
import RegistrationCompleted from "../pages/RegistrationCompleted";
import Search from "../pages/Search";


const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "#F8FBFA" },
    }}

    initialRouteName={"ProfileMusic"}
  >
    <Auth.Screen name="ProfileMusic" component={ProfileMusic} />
    <Auth.Screen name="Match" component={Match} />
    <Auth.Screen name="Search" component={Search} />
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="RegistrationCompleted" component={RegistrationCompleted} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="TasteDrink" component={TasteDrink} />
    <Auth.Screen name="TasteFood" component={TasteFood} />
    <Auth.Screen name="MatcherParty" component={MatcherParty} />
  </Auth.Navigator>
);

export default AuthRoutes;
