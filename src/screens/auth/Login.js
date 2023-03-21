import { Button, Input } from '../../components'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

import COLOR from '../../constants/colors'
import Logo from '../../components/icons/Logo'

const Login = () => {
    return (
        <View style={styles.screen}>
            <Image source={{uri: 'https://images.unsplash.com/photo-1624855600799-ac8e8bddd1da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}} style={styles.imgBg}/>
            <Logo fill='#F0EDEE' fillOpacity={0.7}/>
            <View style={styles.container}>
                <Text style={styles.textWelcome}>Bienvenido a Fast Food</Text>
                <View style={styles.inputs}>
                    <Input placeholder={"E-mail"}/>
                    <Input placeholder={"Contraseña"}/>
                </View>
                <View style={styles.account}>
                    <Button title={"Iniciar Sesión"}/>
                    <Pressable style={{alignItems: 'center'}}>
                        <Text style={styles.accountText}>¿Olvidaste tu contraseña?</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLOR.background,
        alignItems: 'center',
    },
    imgBg:{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 600,
        resizeMode: 'cover',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    container: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        height: 375,
        alignSelf: 'center',

        padding: 15,
        borderRadius: 40,

        justifyContent: 'space-between',
        alignItems: 'center',
        
        backgroundColor: COLOR.white,
    },
    textWelcome: {
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 24,
        color: COLOR.black,
    },
    inputs: {
        width: '90%',
        gap: 25,
    },
    account: {
        gap: 10,
    },
    accountText: {
        color: COLOR.black,
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 16,
    }
})