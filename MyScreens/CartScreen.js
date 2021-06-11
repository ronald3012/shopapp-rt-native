import  React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import  {navigationRef } from './RootNavigation';

import ProductList from '../components/ProductList';

export default function CartScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ProductList />
            <TouchableOpacity
                onPress={()=>navigationRef.current.goBack()}
            >
                <Text>Volver</Text>
            </TouchableOpacity>
        </View>
    );
}
