import { StyleSheet, TextInput } from 'react-native'

import COLORS from '../constants/colors'
import React from 'react'

const Input = ({style, placeholder, ...otherPros}) => {
    return (
        <TextInput style={[styles.input, style]} placeholder={placeholder} {...otherPros} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        minWidth: 200,
        padding: 5,
        borderBottomColor: COLORS.ligth_gray,
        borderBottomWidth: 1,
        fontSize: 16,
        fontFamily: 'NunitoSans_400Regular',
    },
})