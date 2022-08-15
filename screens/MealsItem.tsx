import React from 'react'
import { Text } from 'react-native'
import Loading from '../components/Loading'
import MealInfo from '../components/MealInfo'
import Container from '../styles/container'
import { UseGetRecipeInfo } from '../utils/useFetchRecipes'

export default function MealsItem({ navigation, route }: { navigation: any, route: any }) {
    const id = route.params.id

    const [data, setData] = React.useState([])
    const [fetching, setFetching] = React.useState(false)



    React.useEffect(() => {
        getData()
    }, [])



    async function getData() {
        setFetching(true)
        let data = await UseGetRecipeInfo({
            id: id
        })
        setData(data)
        setFetching(false)
    }

    if (fetching) return <Loading />
    return (
        <>
            <MealInfo data={data} />
        </>
    )
}


