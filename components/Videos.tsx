import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Container from '../styles/container'
import Heading from '../styles/heading'
import SubHeading from '../styles/subheading'



type CategoryItem = {
    id: number,
    name: string,
    icon: string,
    backgroundColor: string
}
export default function Videos() {


    return (
        <>

            <View style={styles.wrapper}>
                <View style={styles.titleRow}>
                    <Heading style={{ fontSize: 24 }}>Featured Videos</Heading>
                    <Heading style={{ fontSize: 14 }}>Subscribe</Heading>
                </View>

                <View>
                    <ScrollView horizontal={true} >
                        <View style={styles.categoryRow}>
                            <Category name='BURGERS' id={102} backgroundColor='red' icon="red" />
                            <Category name='BURGERS' id={102} backgroundColor='red' icon="red" />
                            <Category name='BURGERS' id={102} backgroundColor='red' icon="red" />
                            <Category name='BURGERS' id={102} backgroundColor='red' icon="red" />
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
            <SubHeading>{item.name}</SubHeading>

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
