
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigator 

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screem
import Home from "./Home"
import Details from './Details';



export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product }
};

const Stack = createNativeStackNavigator<RootStackParamList>()
function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home Screen "
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Product Detail "
          }}
        />
      </ Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
