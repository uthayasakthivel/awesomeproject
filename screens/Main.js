import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './Product';
import Cart from './Cart';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../src/app/colors';
import { useSelector } from 'react-redux';

const Main = () => {
    const count = useSelector((state) => state.cart.value);
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: colors.header },
                    headerTitleStyle: { fontSize: 24, fontWeight: 'bold', color: colors.text },
                    headerTitleAlign: 'center',
                }}>
                <Stack.Screen
                    name="Product"
                    component={Product}
                    options={({ navigation }) => ({
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
                                    <Icon name='shopping-cart' size={30} color={colors.text} />
                                    <View style={{ backgroundColor: 'red', borderRadius: 50, position: 'relative', height: 30, width: 30, }}>
                                        <Text style={{ color: colors.text, position: 'absolute', top: 2, left: 8, fontWeight: 'bold', fontSize: 20 }}>{count}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;
