import { StyleSheet, Text, View } from 'react-native'

import COLORS from '../../constants/colors'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.screen}>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    }
})