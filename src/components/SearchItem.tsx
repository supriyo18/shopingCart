import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'


// Navigation 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'

// Components
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

import { PRODUCTS_LIST } from '../data/contants'

const SearchItem = () => {
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
        <View>
            <TextInput
                style={styles.searchInput}
                placeholder="Search by title or tag"
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
            />


        </View>
    )
}

export default SearchItem

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