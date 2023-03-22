import { StyleSheet, Text, View } from 'react-native'

import COLORS from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const Header = () => {
    const [cartItems, setCartItems] = React.useState(0)

    return (
        <View style={styles.header}>
            <FontAwesome name="bars" size={24} color={COLORS.black} />
            <FontAwesome name="shopping-cart" size={24} color={cartItems > 0 ? COLORS.black : COLORS.dark_gray} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingTop: 30,

        // backgroundColor: COLORS.background,
    }
})