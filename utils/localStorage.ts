import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeFavorites(value: any) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('favorites', jsonValue)
    } catch (e) {
        console.log(e)
        // saving error
    }
}

export async function removeItem(value: string) {
    await AsyncStorage.removeItem(value)
}



export async function getFavorites() {

    const jsonValue = await AsyncStorage.getItem('favorites')
    console.log('checking for favorites')
    console.log(jsonValue)

    if (jsonValue != null) {
        let favorites = JSON.parse(jsonValue)
        return favorites
    }
}

export async function storeUser(value: any) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('user', jsonValue)
    } catch (e) {
        console.log(e)
        // saving error
    }
}



export async function getUser() {

    const jsonValue = await AsyncStorage.getItem('user')
    console.log('looking for user')
    console.log(jsonValue)

    if (jsonValue != null) {
        let user = JSON.parse(jsonValue)
        return user
    }
} 