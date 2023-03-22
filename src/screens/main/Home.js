import { Header, SearchBar } from '../../components'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

import COLORS from '../../constants/colors'
import React from 'react'

const Home = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <Header style={styles.header}/>
                <View style={styles.container}>
                    <Text style={styles.title}>¿Que vas a comer hoy?</Text>
                    <SearchBar style={styles.searchBar}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        backgroundColor: COLORS.background,
        height: '100%',
    },
    header: {
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        gap: 20,
    },
    title: {
        color: COLORS.black,
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 24,
    },
    searchBar: {
        // marginTop: 20,
    }
})