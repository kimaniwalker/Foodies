import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../utils/supabase';
import 'react-native-url-polyfill/auto'


const UserContext = createContext();
UserContext.displayName = 'UserContext'

export function UserWrapper({ children }) {

    const user = supabase.auth.user()
    const session = supabase.auth.session()
    const [err, setErr] = useState("")
    const [userInfo, setUserInfo] = useState([])
    const [sessionInfo, setSessionInfo] = useState([])
    const [profileInfo, setProfileInfo] = useState([])
    const [isFetching, setIsFetching] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false)



    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(event, session)
            fetchUser()
        })
        fetchUser()

    }, [user, session])

    const fetchUser = async () => {
        setIsFetching(true)
        setIsAuthenticated(false)
        getProfileData()

        try {
            if (user) {
                setIsAuthenticated(true)
                setUserInfo(user)
                setSessionInfo(session)
            }

        } catch (e) {
            // error reading value
            setErr(e)
        }

        setIsFetching(false)

    }

    const getProfileData = async () => {
        setIsFetching(true)

        try {
            if (user) {
                const { data, error, status } = await supabase
                    .from("profiles")
                    .select()
                    .eq("id", user.id)
                    .single();
                setProfileInfo(data)
                if (error && status !== 406) {
                    throw error;
                }

            }

        } catch (e) {
            // error reading value
            setErr(e.message)
        }

        setIsFetching(false)
    }




    return (
        <UserContext.Provider value={{ user, userInfo, isAuthenticated, errMsg: err, isFetching, setIsAuthenticated, profileInfo, sessionInfo }} >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}