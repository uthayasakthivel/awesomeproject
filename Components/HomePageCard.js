
import React from 'react'
import { Image, StyleSheet, Text, View, Button } from 'react-native'
import { showCart } from '../src/Features/Cart/cartSlice'
import { useDispatch } from 'react-redux'
const HomePageCard = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <View style={styles.cards}>
      <Text style={styles.cardsTitle}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={{ width: 300, height: 300, objectFit: 'cover' }} />
      <Text style={styles.cardsDescription}>{item.description}</Text>
      <Text style={styles.cardsPrice}>price : {item.price}</Text>
      <Text style={styles.cardsTags}>Rating : {item.rating.rate} ({item.rating.count})</Text>
      <Button title='Add to Cart' onPress={() => (dispatch(showCart({ productId: item.id, produtPrice: item.price })))} />
    </View>
  )
}

export default HomePageCard


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