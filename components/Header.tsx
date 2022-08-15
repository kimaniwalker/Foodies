import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import Colors from '../utils/colors'
import { Ionicons } from '@expo/vector-icons';

export default function Header() {


    return (
        <>
            <View style={styles.wrapper}>
                <SafeAreaView>

                    <View style={styles.row}>
                        <Image style={styles.image} source={require('../assets/logo3.png')} />
                        <Ionicons style={styles.search} name="search" size={38} color={Colors.secondary} />
                    </View>
                </SafeAreaView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 150,
        backgroundColor: Colors.light
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        height: '100%',
        padding: 16
    },
    image: {
        width: 85,
        height: 85
    },
    search: {

    }

})