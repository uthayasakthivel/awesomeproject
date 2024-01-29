import {StyleSheet, Text, View, Image, FlatList, Pressable} from 'react-native';
import React from 'react';
import colors from '../src/app/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import useFetch from '../custom_hooks/useFetch';
import {} from 'react-native';

const CartPageCard = () => {
  const AllProducts = useSelector(state => state.cart.product);
  const TotalPrice = useSelector(state => state.cart.Total);
  console.log(AllProducts);
  const url = 'https://fakestoreapi.com/products';
  const [product, loading] = useFetch(url);
  return (
    <>
      {loading ? (
        <Text>...Loading</Text>
      ) : (
        <SafeAreaView>
          <FlatList
            data={product}
            renderItem={({item}) =>
              Object.keys(AllProducts).map(
                EachProductKey =>
                  Number(EachProductKey) === item.id && (
                    <View
                      style={[styles.cards, {flexDirection: 'row'}]}
                      key={nanoid()}>
                      <Image
                        source={{uri: item.image}}
                        style={{width: 50, height: 50, objectFit: 'cover'}}
                      />
                      <Text style={styles.cardsTitle}>{item.title}</Text>
                      <View>
                        <Text>{`Count : ${AllProducts[item.id]}`} </Text>
                        <Text style={styles.cardsPrice}>
                          {`ProductPrice : ${
                            AllProducts[item.id] * item.price
                          }`}
                        </Text>
                      </View>
                    </View>
                  ),
              )
            }
          />

          <View style={{alignItems: 'center', marginTop: 15}}>
            <Text style={styles.totalText}>{`Total Price :  ${Number(
              TotalPrice,
            ).toFixed(2)}`}</Text>
            <Pressable>
              <Text style={[styles.totalText, {marginTop: 25}]}>
                Checkout Now !
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default CartPageCard;

const styles = StyleSheet.create({
  cards: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    flexWrap: 'wrap',
  },
  cardsTitle: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    flexWrap: 'wrap',
  },
  cardsPrice: {
    textAlign: 'center',
  },
  totalText: {
    padding: 20,
    backgroundColor: colors.bg,
    color: colors.text,
    textAlign: 'center',
  },
});
