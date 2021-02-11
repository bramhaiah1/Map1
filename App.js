
import React from "react";

import { 
  createAppContainer,


createSwitchNavigator 
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs"
import AcsountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDetailScreen from "./src/Screens/TrackDetailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";
 import { Provider as AuthProvider } from './src/context/AuthContext' 
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
const switchNavigator = createSwitchNavigator({
  loginFlow:createStackNavigator({
    Signup:SignupScreen,
    Signin:SigninScreen,
  }),
mainFlow:createBottomTabNavigator({
  trackListFlow: createStackNavigator({
     TrackList:TrackListScreen,
     TrackDetail:TrackDetailScreen,
  }),
  TrackCreate:TrackCreateScreen,
  Account:AcsountScreen
})
});
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
      <AuthProvider>
        <App/>
      </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  );
};




