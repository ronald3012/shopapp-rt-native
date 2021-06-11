import React,{useEffect, useState} from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Badge } from 'react-native-elements';
import * as RootNavigation from '../MyScreens/RootNavigation';

const ProductListHome = () => {
    const [products, setProducts] = useState([]);
    const headers = {Authorization: "Basic STNDVTcyNFlCM0tZMldKQURBRUxSNFQ3SDdaSTRXRVI="};

    useEffect(  () => {

       ( async () => {
      
            try {
               
                const response = await fetch('http://technologies.com.do/tienda/api/products?output_format=JSON&display=full',{headers});
                const data = await response.json()
                setProducts(data.products);

            } catch (e) {
              console.log(e)
            }
          })()
      

        return () => {
            setProducts([]);
        }
    }, []);


    return (
        <FlatList
        style={styles.container}
        keyExtractor={(product) => product.id}
        data={products}
        renderItem={({ item: { id, name, price,id_default_image }, index }) => (
          <TouchableOpacity 
              onPress={() => RootNavigation.navigate('Perfil')}
          >
              <View key={id} style={styles.product}>
               <View>
                <Image
                          style={styles.imagen}
                          source={{
                            uri: `http://technologies.com.do/tienda/api/images/products/${id}/${id_default_image}/small_default?ws_key=I3CU724YB3KY2WJADAELR4T7H7ZI4WER`,
                          }}
                  />
               </View>
               <View style={styles.body}>
                  <Text style={styles.title}>{name}</Text>
                  <Text style={styles.price}>RD$ {price}</Text>
                  <View style={styles.actions}>
                          <View style={styles.quantity}>
                                <TouchableOpacity style={styles.btn}>
                                  <Text style={styles.textBtn}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.unit}>1</Text>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.textBtn}>+</Text>
                                </TouchableOpacity>
                          </View>

                          <TouchableOpacity >
                                    <Icon name='delete' color='gray' />
                          </TouchableOpacity>
                  </View>
               </View>
          </View>
          </TouchableOpacity>
        )}
      />
    )
}

export default ProductListHome;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      marginBottom:10,
    },
    product: {
      paddingVertical: 20,
      paddingRight: 20,
      marginLeft: 20,
      flexDirection:'row',
      flexWrap:'wrap',
      width:'100%',
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    price:{
      fontWeight: 'bold',
      marginTop:3
    },
    body: {
      paddingHorizontal:10,
      flexBasis:'72%',
    //   display:'none'
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius:10
      },
      btn:{
        backgroundColor:"gray",
        width:30,
        height:30,
        borderRadius:15,
        padding:5,
        alignItems:'center',
      },
      textBtn:{
        color:'white',
        fontWeight:'bold'
      },
      unit:{
        marginHorizontal:10
      },
      quantity:{
        flexDirection:'row',
        marginTop:10
      },
      actions:{
        flexDirection:'row',
        justifyContent:'space-between'
          
      }
  });

