import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import useFetch from '../custom_hooks/useFetch';
import colors from '../src/app/colors';
import GlobalStyles from '../src/app/GlobalStyles';
import {increment, decrement, clearCart} from '../src/Features/Cart/cartSlice';

const Product = () => {
  const AllProducts = useSelector(state => state.cart.product);
  const TotalPrice = useSelector(state => state.cart.Total);
  console.log(AllProducts);
  const url = 'https://fakestoreapi.com/products';
  const [product, loading] = useFetch(url);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{padding: 25, marginBottom: 50}}>
      {loading ? (
        <Text style={GlobalStyles.text}>...Loading</Text>
      ) : (
        <>
          <View>
            <Text style={GlobalStyles.text}>My Cart</Text>
            <Text style={GlobalStyles.text}>{`Total Price :  ₹${Number(
              TotalPrice,
            ).toFixed(2)}`}</Text>
          </View>
          <View style={[styles.checkoutButton, {flexDirection: 'row'}]}>
            <Text style={[styles.checkoutText, {flex: 1}]}>CheckOut Now !</Text>
            <Pressable
              onPress={() => {
                dispatch(clearCart());
              }}>
              <Text
                style={[
                  styles.checkoutText,
                  {marginLeft: 20, backgroundColor: 'red'},
                ]}>
                Clear Cart
              </Text>
            </Pressable>
          </View>

          <FlatList
            showsHorizontalScrollIndicator={false}
            data={product}
            renderItem={({item}) =>
              Object.keys(AllProducts).map(
                EachProductKey =>
                  Number(EachProductKey) === item.id && (
                    <View>
                      <View style={styles.cards} key={nanoid()}>
                        <View style={styles.cartImage}>
                          <Image
                            source={{uri: item.image}}
                            style={{width: 100, height: 200}}
                          />
                        </View>
                        <View
                          style={[GlobalStyles.text, {alignItems: 'center'}]}>
                          <Text
                            style={{
                              width: 170,
                              flexWrap: 'wrap',
                              marginBottom: 20,
                            }}>
                            {item.title}
                          </Text>
                          <Text
                            style={{
                              backgroundColor: colors.header,
                              paddingTop: 10,
                              paddingBottom: 10,
                              paddingLeft: 25,
                              paddingRight: 25,
                              borderRadius: 20,
                              color: colors.text,
                            }}>{`₹${AllProducts[item.id] * item.price}`}</Text>
                        </View>
                        <View style={styles.productCount}>
                          <Button
                            title="+"
                            style={[GlobalStyles.text, styles.countText]}
                            onPress={() => {
                              dispatch(increment(item.id));
                            }}
                          />

                          <Text style={[GlobalStyles.text, styles.countText]}>
                            {AllProducts[item.id]}
                          </Text>
                          <Button
                            title="-"
                            style={[GlobalStyles.text, styles.countText]}
                            onPress={() => {
                              dispatch(decrement(item.id));
                            }}
                          />
                        </View>
                      </View>
                    </View>
                  ),
              )
            }
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 80,
  },
  productCount: {
    flexDirection: 'column',
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 8,
    gap: 30,
  },
  countText: {
    fontSize: 20,
    color: '#fff',

    fontWeight: 'bold',
  },
  checkoutButton: {
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  checkoutText: {
    backgroundColor: 'green',
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
