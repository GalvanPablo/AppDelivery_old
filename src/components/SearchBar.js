import { StyleSheet, Text, TextInput, View } from 'react-native'

import COLOR from '../constants/colors'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const SearchBar = ({style}) => {

    const [text, setText] = React.useState('')

    const handleChange = (text) => {
        setText(text)
    }
    
    return (
        <View style={[styles.searchBar, style]}>
            <FontAwesome name="search" size={20} color={text.trim().length > 0 ? COLOR.black : COLOR.gray} />
            <TextInput placeholder="Buscar" style={styles.input} onChangeText={handleChange}/>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: COLOR.ligth_gray,
        borderRadius: 40,
        width: '100%',
        padding: 10,

        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        fontSize: 18,
        fontFamily: 'NunitoSans_400Regular',

        paddingHorizontal: 10,
        color: COLOR.black,
    }
})