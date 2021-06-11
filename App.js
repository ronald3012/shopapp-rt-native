/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {
  StyleSheet, Button, View, Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Info from './pages/Info';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function Anidados() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="menu" component={Horizontal} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Info2" component={Info} />
    </Tab.Navigator>

      
  );
}

function Horizontal() {
  
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Info" component={Info} />
      </Drawer.Navigator>
  );
}

const Navegacion = ()=>{
  return(
    <Stack.Navigator
    screenOptions = {{
      headerStyle: {
        backgroundColor:'#FFDA00'
      }
    }}

  >
        <Stack.Screen 
          name="Inicio"
          component={Anidados}

        />
        <Stack.Screen 
          name="Contact"
          component={Horizontal}
          options={{
            headerRight: ()=>(
              <Button
                title='Comprar'
                onPress={()=> alert('Esto es una alerta')}
              />
            )
          }}
        />
        <Stack.Screen 
          name="Info"
          component={Info}
        />
  </Stack.Navigator>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <Navbar />
           <Anidados />
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
