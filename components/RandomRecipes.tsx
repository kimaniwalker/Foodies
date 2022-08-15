import React from 'react'
import { FlatList } from 'react-native'
import { useUserContext } from '../context/user'
import Container from '../styles/container'
import Heading from '../styles/heading'
import MealsItem from './MealsItem'
import { UseFetchRecipes } from '../utils/useFetchRecipes'
import Loading from './Loading'
import SubHeading from '../styles/subheading'


export default function RandomRecipes() {

    const { profileInfo } = useUserContext()
    const [recipes, setRecipes] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(false)

    React.useEffect(() => {
        if (profileInfo) {
            //getRecipes()
        } return
    }, [profileInfo])

    async function getRecipes() {
        setIsFetching(true)
        let randomRecipes = await UseFetchRecipes({ dietary_needs: profileInfo.dietary_needs, query: 'breakfast' })
        setRecipes(randomRecipes.results)
        setIsFetching(false)
    }
    if (isFetching) return <Loading />
    return (
        <>
            <Container style={{ marginTop: 100, alignItems: 'start', justifyContent: 'start' }}>
                <SubHeading>Featured Recipes</SubHeading>
                <FlatList
                    data={recipes}
                    keyExtractor={(item: any) => item.id}
                    //ItemSeparatorComponent={() => <View style={styles.separator} />}
                    onEndReached={() => {

                    }}
                    horizontal={true}
                    renderItem={({ item }: any) => (
                        <MealsItem id={item.id} title={item.title} image={item.image} />

                    )}
                />
            </Container>
        </>
    )
}
