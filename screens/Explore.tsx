import React from 'react'
import { ScrollView } from 'react-native'
import CategoryThumbnail from '../components/CategoryThumbnail'
import Header from '../components/Header'
import RandomRecipes from '../components/RandomRecipes'
import Recommended from '../components/Recommended'
import Videos from '../components/Videos'

type ExploreProps = {

}

export default function ExploreScreen(props: ExploreProps) {


    return (
        <>
            <Header />
            <ScrollView>
                <CategoryThumbnail />
                <Recommended />
                <Videos />
            </ScrollView>
        </>
    )
}
