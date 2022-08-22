import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useUserContext } from './user';
import { supabase } from '../utils/supabase';
import { getFavorites } from '../utils/localStorage';



const FavoritesContext = createContext();
FavoritesContext.displayName = 'FavoritesContext'

export function FavoritesWrapper({ children }) {

    const { profileInfo } = useUserContext()
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getFavsList()
    }, [profileInfo])

    function removeItem(id) {
        setFavorites((currentFavorites) => currentFavorites.filter(item => item !== id))

    }
    function addItem(id) {
        setFavorites((currentFavorites) => [...currentFavorites, id])
    }
    function clearFavories() {
        setFavorites([])
    }
    function checkIfFavorited(id) {
        return favorites?.includes(id)
    }
    async function getFavsList() {
        let favs = await getFavorites()
        if (favs) {
            console.log('found some favs in localstate')
            setFavorites(favs)
        } else if (profileInfo) {
            console.log('couldnt find no favs, checking the db')
            console.log(profileInfo)
            console.log(profileInfo.favorites)
            setFavorites(profileInfo.favorites)
        }
    }

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites, removeItem, addItem, clearFavories, checkIfFavorited }} >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    return useContext(FavoritesContext);
}