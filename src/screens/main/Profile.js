import { Image, StyleSheet, Text, View } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const Profile = () => {
    return (
        <View style={styles.screen}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/a/AGNmyxYDglY5EUM_CzWF_Ky5o5mhwMtlpJekKqfIS9pDGg=s288'}} style={styles.imgProfile}/>
            <Text style={styles.userName}>Pablo Galvan</Text>
            <View style={styles.userData}>
                <View style={styles.userDataRow}>
                    <FontAwesome name="envelope-o" size={28} color="black" />
                    <View style={styles.userDataRowText}>
                        <Text style={styles.userDataRowTextTitle}>E-mail</Text>
                        <Text style={styles.userDataRowTextValue}>pablogalvan.015@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.userDataRow}>
                    <FontAwesome name="at" size={28} color="black" />
                    <View style={styles.userDataRowText}>
                        <Text style={styles.userDataRowTextTitle}>Nombre completo</Text>
                        <Text style={styles.userDataRowTextValue}>Pablo Ariel Galvan</Text>
                    </View>
                </View>
                <View style={styles.userDataRow}>
                    <FontAwesome name="map-o" size={28} color="black" />
                    <View style={styles.userDataRowText}>
                        <Text style={styles.userDataRowTextTitle}>Domicilio</Text>
                        <Text style={styles.userDataRowTextValue}>Calle Falsa 123</Text>
                    </View>
                </View>
                <View style={styles.userDataRow}>
                    <FontAwesome name="credit-card" size={28} color="black" />
                    <View style={styles.userDataRowText}>
                        <Text style={styles.userDataRowTextTitle}>Tarjeta</Text>
                        <Text style={styles.userDataRowTextValue}>Visa ****1234</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgProfile: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    userName: {
        fontSize: 24,
        fontFamily: 'NunitoSans_700Bold',
        marginTop: 10,
    },
    userData: {
        marginTop: 20,
        paddingHorizontal: 20,
        gap: 15,
    },
    userDataRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userDataRowText: {
        marginLeft: 10,
    },
    userDataRowTextTitle: {
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 12,
    },
    userDataRowTextValue: {
        // fontFamily: 'NunitoSans_700Bold',
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 16,
    },
})