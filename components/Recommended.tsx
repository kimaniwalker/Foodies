import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { ScrollView, StyleSheet, View, FlatList, ImageBackground, Platform } from 'react-native'
import { useUserContext } from '../context/user'
import Container from '../styles/container'
import Heading from '../styles/heading'
import SubHeading from '../styles/subheading'
import Colors from '../utils/colors'
import Button from '../styles/button'
import { UseFetchRecipes } from '../utils/useFetchRecipes'
import { useNavigation } from '@react-navigation/native';


type CategoryItem = {
    name: string,
    image: string
}
export default function Recommended() {

    const [data, setData] = React.useState([])
    const [query, setQuery] = React.useState('')
    const { profileInfo } = useUserContext()
    const currentDate = new Date();
    const navigation: any = useNavigation()

    React.useEffect(() => {
        if (profileInfo) {
            getData()
        }

    }, [profileInfo])


    async function getData() {
        getTimeOfDay()
        let data = await UseFetchRecipes({
            query: query,
            dietary_needs: profileInfo.dietary_needs
        })
        setData(data.results)
    }

    function getTimeOfDay() {
        let hour = currentDate.getHours()

        if (hour <= 11) {
            setQuery('breakfast')
        } else if (hour >= 12 && hour <= 4) {
            setQuery('lunch')
        } else {
            setQuery('dinner')
        }
    }

    return (
        <>

            <View style={styles.wrapper}>
                <View style={styles.titleRow}>
                    <Heading style={{ fontSize: 24 }}>Recommended</Heading>
                    <Button style={{ width: 100, height: 25, marginTop: 0 }} disabled={true} onPress={() => navigation.navigate('Categories')}>View All</Button>
                </View>

                <View>
                    <ScrollView>
                        <View style={styles.categoryRow}>
                            <FlatList
                                data={data}
                                keyExtractor={(item: any) => item.id}
                                //ItemSeparatorComponent={() => <View style={styles.separator} />}
                                onEndReached={() => {

                                }}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <Category name={item.title} image={item.image} />

                                )}
                            />

                        </View>
                    </ScrollView>
                </View>

            </View>


        </>
    )
}

const Category = (item: CategoryItem) => (
    <>
        <View style={styles.categoryWrapper}>
            <View style={styles.categoryItem}>
                <ImageBackground style={styles.image} source={{ uri: item.image }}>

                    <SubHeading style={styles.title}>{item.name}</SubHeading>

                </ImageBackground>
            </View>

        </View>
    </>

)

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
    },
    categoryWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    categoryItem: {
        width: 312,
        height: 231,
        borderWidth: 2,
        marginBottom: 12,
        borderRadius: 8,
        borderColor: '#ccc',
        elevation: 4,
        shadowColor: 'lightgray',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 1,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    categoryRow: {
        flexDirection: 'row'
    },
    titleRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    seperator: {
        width: '90%',
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        overflow: 'hidden',

    },
    title: { fontSize: 16, color: 'white', backgroundColor: Colors.primary, padding: 8 }
})
