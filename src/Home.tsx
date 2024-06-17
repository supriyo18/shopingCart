import { FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// Navigation 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

// Components
import ProductItem from './components/ProductItem';
import Separator from './components/Separator';

import { PRODUCTS_LIST } from './data/contants'
import SearchItem from './components/SearchItem';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function Home({ navigation }: HomeProps) {
    //  const products = useSelector((state: RootState) => state.products);

    const [searchQuery, setSearchQuery] = useState('')
    const [filteredProducts, setFilteredProducts] = useState<Product[]>();

    const filterProducts = (query: string) => {
        return PRODUCTS_LIST.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    };

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const filtered = filterProducts(searchQuery);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]); // Empty array when searchQuery is empty
        }
    }, [searchQuery]); // Trigger effect when searchQuery or products change

    return (
        <View style={styles.container}>


            <TextInput
                style={styles.searchInput}
                placeholder="Search by title or tag"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
            />
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.productItem}
                        onPress={() => {
                            navigation.navigate('Details', {
                                product: item,
                            });
                        }}
                    >
                        <Text style={styles.productTitle}>{item.name}</Text>
                        <Text style={styles.productTags}>{item.tags.join(', ')}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={Separator}
            />
            <FlatList
                data={PRODUCTS_LIST}
                keyExtractor={item => item.id.toString()} // Ensure id is a string
                ItemSeparatorComponent={Separator}
                renderItem={({ item }) => (
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#ddd' : '#fff',
                            },
                            styles.itemContainer,
                        ]}
                        onPress={() => {
                            navigation.navigate('Details', {
                                product: item,
                            });
                        }}
                    >
                        <ProductItem product={item} />
                    </Pressable>
                )}
            />

            <SearchItem />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#f5f5f5',
    },
    itemContainer: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    }, productItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productTags: {
        fontSize: 14,
        color: '#888',
    },
});
