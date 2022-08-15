import React from 'react'
import { FlatList } from 'react-native'
import Loading from '../components/Loading'
import MealsItem from '../components/MealsItem'
import { useFavoritesContext } from '../context/favorites'
import { useUserContext } from '../context/user'
import Container from '../styles/container'
import { UseGetFavoritesInfo } from '../utils/useFetchRecipes'

export default function Favorites() {

    const { favorites } = useFavoritesContext()
    const [favData, setFavData] = React.useState([])

    React.useEffect(() => {
        getData()
    }, [favorites])

    async function getData() {
        let data = await UseGetFavoritesInfo({ ids: favorites })
        console.log('mydata' + data)
        setFavData(data)
    }

    if (!favData) return <Loading />
    return (
        <>
            <Container style={{ marginTop: 60, alignItems: 'start' }}>

                <FlatList
                    data={favData}
                    keyExtractor={(item: any) => item.id}
                    //ItemSeparatorComponent={() => <View style={styles.separator} />}
                    onEndReached={() => {

                    }}
                    numColumns={2}
                    renderItem={({ item }: any) => (
                        <MealsItem id={item.id} title={item.title} image={item.image} />

                    )}
                />
            </Container>
        </>
    )
}
