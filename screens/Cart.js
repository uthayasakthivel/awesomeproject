import { Image, FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Icon from 'react-native-vector-icons/AntDesign'
// import { useDispatch } from 'react-redux'
// import { showCart } from '../src/Features/Cart/cartSlice'
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const Product = () => {
    // const productsId = useSelector((state) => state.cart.product);
    const AllProducts = useSelector((state) => state.cart.product);
    console.log(AllProducts)
    // console.log(Array.isArray(productsId))
    // const count = useSelector((state) => state.cart.value)
    const url = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([])

    // const dispatch = useDispatch()

    fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))

    return (
        <SafeAreaView>
            {/* <View>
                <Text>{count}</Text>
            </View> */}
            {/* <FlatList
                data={product}
                renderItem={({ item }) => (
                    <Text>{productsId}</Text>
                )}
            /> */}

            {/* <Text>{ }</Text> */}
            <FlatList
                data={product}
                renderItem={({ item }) => (
                    // Object.keys(person).map(()=>{}) === item.id && (
                    //     <View style={styles.cards}>
                    //         <Text style={styles.cardsTitle}>{item.title}</Text>
                    //         <Image source={{ uri: item.image }} style={{ width: 300, height: 300, objectFit: 'cover' }} />
                    //         <Text style={styles.cardsDescription}>{item.description}</Text>
                    //         <Text style={styles.cardsPrice}>price : {item.price}</Text>
                    //         <Text style={styles.cardsTags}>Rating : {item.rating.rate} ({item.rating.count})</Text>
                    //         <Button title='Add to Cart' onPress={() => (dispatch(showCart(item.id)))} />
                    //     </View>
                    // ))

                    Object.keys(AllProducts).map((EachProductKey) => (
                        Number(EachProductKey) === item.id && (

                            <View style={[styles.cards, { flexDirection: 'row' }]} key={nanoid()}>
                                <Image source={{ uri: item.image }} style={{ width: 50, height: 50, objectFit: 'cover' }} />
                                <Text style={styles.cardsTitle}>{item.title}</Text>
                                {/* <Text style={styles.cardsDescription}>{item.description}</Text> */}
                                <Text>{`Count : ${AllProducts[item.id]}`}</Text>
                                <Text style={styles.cardsPrice}> = {item.price}</Text>
                                {/* <Text style={styles.cardsTags}>Rating : {item.rating.rate} ({item.rating.count})</Text> */}
                            </View>
                        )
                    ))

                )
                }
            />
        </SafeAreaView>
    )
}

export default Product

const styles = StyleSheet.create({
    cards: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 15,
        padding: 10,
        flexWrap: 'wrap'
    },
    cardsTitle: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        flexWrap: 'wrap'
    },
    cardsPrice: {
        textAlign: 'center'
    }
})