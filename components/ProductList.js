import React,{useEffect, useState} from 'react';
import { FlatList, View, Text, StyleSheet, Image, _Text, TouchableOpacity } from 'react-native';

const ProductList = () => {
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
          <TouchableOpacity onPress={()=>alert('Seleccionado!')}>
              <View key={id} style={styles.product}>
               <View>
               <Image
                        style={styles.tinyLogo}
                        source={{
                           uri: `http://technologies.com.do/tienda/api/images/products/${id}/${id_default_image}/small_default?ws_key=I3CU724YB3KY2WJADAELR4T7H7ZI4WER`,
                        }}
                />
               </View>
               <View style={styles.body}>
                  <Text style={styles.title}>{name}</Text>
                  <Text >{name}</Text>
                  <Text>RD$ {price}</Text>
               </View>
          </View>
          </TouchableOpacity>
        )}
      />
    )
}

export default ProductList;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      marginBottom:10
    },
    product: {
      borderBottomWidth: 1,
      borderBottomColor: '#CDCDCD',
      paddingVertical: 20,
      paddingRight: 20,
      marginLeft: 20,
      flexDirection:'row',
      flexWrap:'wrap'

    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    body: {
      paddingHorizontal:10
    },
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
  });

