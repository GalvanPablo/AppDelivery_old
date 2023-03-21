import { Favorites, History, Home, Profile } from '../screens/main'
import { StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {

    return (
        <Tab.Navigator initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.dark_gray,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}

        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.item}>
                            <FontAwesome name="home" color={color} size={size} />
                            <Text style={[styles.text, {color: color}]}>Inicio</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Favorites" component={Favorites}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.item}>
                            <FontAwesome name="heart" color={color} size={size} />
                            <Text style={[styles.text, {color: color}]}>Favoritos</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="History" component={History}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.item}>
                            <FontAwesome name="history" color={color} size={size} />
                            <Text style={[styles.text, {color: color}]}>Historial</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.item}>
                            <FontAwesome name="user" color={color} size={size} />
                            <Text style={[styles.text, {color: color}]}>Perfil</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.white,
        borderTopColor: 'transparent',
        height: 60,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
        fontFamily: 'NunitoSans_400Regular',
    },
})