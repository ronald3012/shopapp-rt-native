import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View, Text } from 'react-native';



const Navbar = () => {



    return (
            <View style={{height:50,justifyContent:'space-between', alignItems:'center',flexDirection:'row',backgroundColor:'#FFDA00'}}>
              <Button 
                title='menu' 
              />
              <Text>Navegacion</Text>
            </View>
    )
}

export default Navbar;
