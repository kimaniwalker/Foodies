import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Container from '../styles/container'
import Heading from '../styles/heading'
import SubHeading from '../styles/subheading'
import { UseGetRecipeVideos } from '../utils/useFetchRecipes'
import VideoItem from './VideoItem'
import Button from '../styles/button'
import { useNavigation } from '@react-navigation/native';
import Colors from '../utils/colors'


type CategoryItem = {
    youtubeId: string
}
export default function Videos() {

    const [data, setData] = React.useState([])
    const navigation: any = useNavigation()


    return (
        <>

            <View style={styles.wrapper}>
                <View style={styles.titleRow}>
                    <Heading style={{ fontSize: 24 }}>Featured Videos</Heading>
                    <Button style={{ width: 100, height: 25, marginTop: 0 }} disabled={true} onPress={() => navigation.navigate('Categories')}>Subscribe</Button>
                </View>

                <View>
                    <ScrollView horizontal={true} >
                        <View style={styles.categoryRow}>
                            <VideoItem />
                            <VideoItem />
                            <VideoItem />
                            <VideoItem />
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

            </View>


        </View>
    </>

)

const styles = StyleSheet.create({
    wrapper: {

    },
    categoryWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
    categoryItem: {
        width: 250,
        height: 100,
        borderWidth: 2,
        marginBottom: 12
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
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    }
})
