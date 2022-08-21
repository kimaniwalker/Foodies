import React from 'react'
import { Text, Alert, StyleSheet, View } from 'react-native'
import Account from '../components/Account'
import Loading from '../components/Loading'
import { supabase } from '../utils/supabase'
import 'react-native-url-polyfill/auto'
import Button from '../styles/button'
import { useUserContext } from '../context/user'
import Wrapper from '../styles/wrapper'
import Container from '../styles/container'

export default function Profile({ navigation }: any) {


    const { profileInfo } = useUserContext()
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

    }, []);




    if (loading) return <Loading />
    return (
        <>




            <Container style={{ padding: 16 }}>


                <Account profileInfo={profileInfo} />

            </Container>



        </>
    )
}

const styles = StyleSheet.create({

})
