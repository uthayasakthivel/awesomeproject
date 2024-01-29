import { Image, FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux'
import { showCart } from '../src/Features/Cart/cartSlice'
const Product = () => {
    // const count = useSelector((state) => state.cart.value)
    const url = 'https://fakestoreapi.com/products'
    const [product, setProduct] = useState([])

    const dispatch = useDispatch()
    fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    return (
        <SafeAreaView>
            {/* <View>
                <Text>{count}</Text>
            </View> */}
            <FlatList
                data={product}
                renderItem={({ item }) => (
                    <View style={styles.cards}>
                        <Text style={styles.cardsTitle}>{item.title}</Text>
                        <Image source={{ uri: item.image }} style={{ width: 300, height: 300, objectFit: 'cover' }} />
                        <Text style={styles.cardsDescription}>{item.description}</Text>
                        <Text style={styles.cardsPrice}>price : {item.price}</Text>
                        <Text style={styles.cardsTags}>Rating : {item.rating.rate} ({item.rating.count})</Text>
                        <Button title='Add to Cart' onPress={() => (dispatch(showCart({ productId: item.id, produtPrice: item.price })))} />
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Product

const styles = StyleSheet.create({
    cards: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15
    },
    cardsTitle: {
        marginTop: 20,
        marginBottom: 20
    },
    cardsDescription: {
        marginTop: 20,
        marginBottom: 15,
        textAlign: 'center',
        padding: 5
    },
})