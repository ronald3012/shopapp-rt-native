/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react'

import {
  StyleSheet, View,Text, Button
} from 'react-native';

import {
  Header
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react/cjs/react.production.min';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = () =>{
  const navigation = useNavigation();

  

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header />
      <Text>Home</Text>
      <Button 
        title='Ir a contact'
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  )
}

const Contact = () =>{
  const navigation = useNavigation();

  return(
    <View>
      <Text>Contac</Text>
      <Button 
        title='Ir a info'
        onPress={() => navigation.openDrawer('Info')}
      />
    </View>
    
  )
}

const Info = () =>{
  return(
    <View>
      <Text>Info</Text>
    </View>
  )
}

function Anidados() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Home" component={Home} />
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

const App = () => {


  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
            headerStyle: {
              backgroundColor:'#FFDA00'
            }
          }}

        >
              <Stack.Screen 
                name="Inicio"
                component={Home}

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
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
