import React from 'react'
import Container from '../styles/container'
import Heading from '../styles/heading'
import SubHeading from '../styles/subheading'
import { Text, Image, View, ScrollView } from 'react-native'
import Loading from './Loading'

export default function MealInfo({ data }: any) {

    const ingredients = data?.extendedIngredients
    console.log(ingredients)
    const wine_pairing = data?.winepairing
    const instructions = data?.instructions
    const summary = data?.summary
    if (!data) return <Loading />
    return (
        <>
            <Container style={{ padding: 16 }}>
                <ScrollView>
                    <Image style={{ width: '100%', height: 350 }} source={{ uri: data.image }} />
                    <Heading>{data.title}</Heading>
                    <SubHeading>{data.readyInMinutes}</SubHeading>
                    <SubHeading style={{ marginTop: 16 }}>Summary</SubHeading>
                    <Text>{summary?.replace(/(<([^>]+)>)/gi, "")}</Text>
                    <SubHeading>{data.servings}</SubHeading>
                    <SubHeading style={{ marginTop: 16 }}>Instructions</SubHeading>
                    <Text>{instructions?.replace(/(<([^>]+)>)/gi, "")}</Text>

                    <SubHeading style={{ marginTop: 16 }}>Ingredients</SubHeading>
                    {ingredients && ingredients.map((element: any, index: any) => (
                        <>


                            <View key={index} style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 16 }}>

                                <Text style={{ width: 200 }}>{element.original}</Text>
                                <Image style={{ width: 100, height: 100 }} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${element.image}` }} />
                            </View>
                        </>
                    ))}

                </ScrollView>
            </Container>
        </>
    )
}
