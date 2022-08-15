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

export async function getFavorites() {

    const jsonValue = await AsyncStorage.getItem('favorites')
    console.log(jsonValue)

    if (jsonValue != null) {
        let favorites = JSON.parse(jsonValue)
        return favorites
    }
} 