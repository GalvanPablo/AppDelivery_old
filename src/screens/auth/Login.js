import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Login = () => {
    return (
        <View style={styles.screen}>
            <Text>Login</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})