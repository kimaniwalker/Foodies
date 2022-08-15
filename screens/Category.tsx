import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import CategoryItem from '../components/CategoryItem'
import Categories from '../data/categories.json'


export default function CategoryScreen({ navigation }: { navigation: any }) {

    function pressHandler(itemData: any) {
        console.log('test')
        navigation.navigate('Meals', {
            query: itemData.item.name
        })
    }

    React.useLayoutEffect(() => {

    }, []);

    return (
        <>

            <View style={styles.container}>
                <FlatList data={Categories}
                    keyExtractor={(item) => item.id}
                    renderItem={(itemData) => (
                        <CategoryItem
                            title={itemData.item.name}
                            color={itemData.item.categoryColor}
                            onPress={() => pressHandler(itemData)}
                        />
                    )}
                    numColumns={2}

                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }

})
