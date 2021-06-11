import React from 'react';
import { Button, View, Text } from 'react-native';

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

export default Contact;