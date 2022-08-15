import React from 'react'
import { ImageBackground, Pressable, View, Text, StyleSheet } from 'react-native'
import SubHeading from '../styles/subheading'
import Colors from '../utils/colors'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFavoritesContext } from '../context/favorites';
import { supabase } from '../utils/supabase';
import { useUserContext } from '../context/user';
import { storeFavorites } from '../utils/localStorage';

export default function MealsItem({ id, title, image }: { id: number, title: string, image: string, }) {

    const navigation = useNavigation()
    const { checkIfFavorited, removeItem, addItem, favorites } = useFavoritesContext()
    const { profileInfo } = useUserContext()
    const isFavorited = checkIfFavorited(id)


    React.useEffect(() => {
        updateFavorites()
    }, [favorites])

    function handlePress(navigation: any) {

        navigation.navigate('MealsItem', {
            id: id,
            query: title
        })
    }

    async function handleUpdateFav() {
        try {
            if (isFavorited) {
                removeItem(id)
            } else {
                addItem(id)
            }
        } catch (error) {
            console.log(error)
        }
    }


    async function updateFavorites() {

        try {

            const { data, error } = await supabase
                .from('profiles')
                .upsert({ id: profileInfo.id, favorites: favorites, updated_at: new Date() })
            await storeFavorites(favorites)

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <View style={styles.cardWrapper}>

                <Pressable style={{ flex: 1 }} onPress={() => handlePress(navigation)}>
                    <View style={styles.cardImage}>
                        <ImageBackground style={{ flex: 1 }} source={{ uri: image }} />
                        <View style={styles.heartIcon}>
                            <Pressable
                                android_ripple={{ color: '#fff' }}
                                onPress={handleUpdateFav}
                            >

                                {isFavorited ? (
                                    <FontAwesome style={styles.heartIcon} name="heart" size={32} color="red" />
                                ) : (
                                    <FontAwesome5 style={styles.heartIcon} name="heart" size={32} color="white" />
                                )}
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.titleContainer}>
                        <SubHeading style={{ fontSize: 12, textAlign: 'center' }}>{title}</SubHeading>
                    </View>
                </Pressable>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        height: 200,
        width: 150,
        borderWidth: 2,
        borderColor: '#ccc',
        margin: 16,
        elevation: 8
    },
    cardImage: {
        height: '70%'
    },
    cardTitle: {

    },
    titleContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: Colors.light,
        padding: 4
    }, iconPressed: {
        color: 'red'
    },
    heartIcon: {
        position: 'absolute',
        right: 5,
        top: 5
    }
})
