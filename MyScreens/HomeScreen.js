import React from 'react';
import { Image, View, ScrollView, SafeAreaView } from 'react-native';

import ProductListHome from '../components/ProductListHome';
import SearchEngine from '../components/SearchEngine';





const Home = () =>{
    return(
        <ScrollView>
            <View>
                <SearchEngine />
                <Image source={{uri:'https://crehana-public-catalog.imgix.net/images/resources/images/7e21364d/679df5b5.jpg'}} style={{width:'100%',height:250}} />
            </View>
            <ProductListHome />
        </ScrollView>
    )
  }

  export default Home;