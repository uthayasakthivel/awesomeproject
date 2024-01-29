import { FlatList, Text } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import useFetch from '../custom_hooks/useFetch';
import HomePageCard from '../Components/HomePageCard';

const Product = () => {
  const url = 'https://fakestoreapi.com/products';
  const [product, loading] = useFetch(url);

  return (
    <SafeAreaView>
      {loading ? (
        <Text>...Loading</Text>
      ) : (
        <FlatList
          data={product}
          renderItem={({item}) => <HomePageCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Product
