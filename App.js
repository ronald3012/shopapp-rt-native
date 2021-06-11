/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Button, ThemeProvider, Avatar,Header, Icon } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';

import {  StyleSheet,TouchableOpacity  } from 'react-native';
import MyDrawer from './MyDrawer';

import * as RootNavigation from './MyScreens/RootNavigation';
import { DrawerActions } from '@react-navigation/native';


const theme = {
  Button: {
    raised: true,
    titleStyle: {
      color: '#FFF',
    }
  },
  colors: {
    primary: '#0e122d',
  }
};



const App = () => {
  const colorScheme = useColorScheme();
  
  return (
    <ThemeProvider theme={theme} useDark={colorScheme === 'dark'}>
       <Header
          leftComponent={()=>(<TouchableOpacity onPress={() => RootNavigation.navigationRef.current.dispatch(DrawerActions.openDrawer())}><Icon name='menu' color="#FFF" /></TouchableOpacity>)}
          centerComponent={{ text: 'Shop App', style: { color: '#FFF' } }}
          rightComponent={()=>(<TouchableOpacity onPress={() => RootNavigation.navigate('CartScreen')}><Icon name='shopping-cart' color="#FFF" /></TouchableOpacity>)}
        />
        <MyDrawer />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
