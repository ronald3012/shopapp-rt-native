import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Text, Icon, Button} from 'react-native-elements';


export default function SearchEngine() {
    return(
        <View style={styles.container}>
            <View style={styles.search}>
                <Input  
                    placeholder='Ingrese la busqueda' 
                    leftIcon={
                        <Icon
                          name='search'
                          size={24}
                          color='black'
                        />
                      }
                      style={{borderWidth:0}}
                      rightIcon={<Button title='buscar' />}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginTop:15
    }
})
