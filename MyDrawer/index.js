// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { navigationRef } from '../MyScreens/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/FontAwesome"
import s from './Style'

import HomeScreen from '../MyScreens/HomeScreen';
import PerfilScreen from '../MyScreens/PerfilScreen';
import CartScreen from '../MyScreens/CartScreen';
import NotificacionScreen from '../MyScreens/NotificacionScreen';



function DrawerMenu(props){
    return(
        <TouchableOpacity onPress={props.navigation}>
            <View style={s.menuContainer}>
                <View style={s.iconoContainer}>
                    <Icon size={17} name={props.iconName}/>
                </View>
                <View style={s.tituloContainer}>
                    <Text style={s.tituloTxt}>{props.titleName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image style={s.userImagen} source={ require('./logo.jpg')}/>
                        <View style={s.camaraContainer}>
                            <Image style={s.camaraIcon} source={require('./photo-camera.png')}/>
                        </View>
                    </View>
                    <View style={s.userNombre}>
                        <Text style={s.userTitulo}>BrainApps</Text>
                        <Text style={s.userSubTitulo}>Ver Perfil</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerMenu iconName='home' titleName='Home' navigation={()=>props.navigation.navigate('Home')}/>
            <DrawerMenu iconName='user' titleName='Perfil' navigation={()=>props.navigation.navigate('Perfil')}/>
            <DrawerMenu iconName='bell' titleName='Notificacion' navigation={()=>props.navigation.navigate('Notificacion')}/>
        </View>
    )
}


const Drawer = createDrawerNavigator()

function MyDrawer() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Perfil" component={PerfilScreen} />
                <Drawer.Screen name="Notificacion" component={NotificacionScreen} />
                <Drawer.Screen name="CartScreen" component={CartScreen} params='pepe'  />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default MyDrawer;