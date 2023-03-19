import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const History = () => {
    return (
        <View style={styles.screen}>
            <Text>History</Text>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})