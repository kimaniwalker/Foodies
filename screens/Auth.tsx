import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { Session } from '@supabase/supabase-js'
import Wrapper from './../styles/wrapper'
import Account from '../components/Account'
import Auth from '../components/Auth'
import Home from './Home'


export default function AuthScreen() {


    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)



    useEffect(() => {
        //checkLogin

    }, [])

    //if isLoggedIn true navigate to HomePage
    if (isLoggedIn) return <Home />

    return (
        <Auth />
    )
}