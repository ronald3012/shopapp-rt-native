import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, View, Text, TextInput } from 'react-native';
import ProductList from '../components/ProductList';

const Home = () =>{
    const navigation = useNavigation();
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <ProductList />
      </View>
    )
  }

  export default Home;