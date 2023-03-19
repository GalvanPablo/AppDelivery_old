import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Favorites = () => {
    return (
        <View style={styles.screen}>
            <Text>Favorites</Text>
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})