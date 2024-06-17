import { FlatList, Image, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
// Navigation 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import { PRODUCTS_LIST } from './data/contants'; // Correct import path
import ProductItem from './components/ProductItem';
import Separator from './components/Separator';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({ route, navigation }: DetailsProps) => {
    const { product } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: product.imageUrl }}
                    style={styles.image}
                />
            </View>
            <Text style={styles.name}>{product.name}</Text>

            <View style={[styles.rowContainer, styles.ratingContainer]}>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>{product.rating} ★</Text>
                </View>
                <Text style={styles.ratingCount}>
                    ({product.ratingCount.toLocaleString()})
                </Text>
            </View>

            <View style={[styles.rowContainer, styles.priceContainer]}>
                <Text style={styles.originalPrice}>
                    ₹{product.originalPrice.toLocaleString()}
                </Text>
                <Text style={styles.discountPrice}>
                    ₹{product.discountPrice.toLocaleString()}
                </Text>
                <Text style={styles.offerPercentage}>
                    {product.offerPercentage}% off
                </Text>
            </View>

            <View style={styles.tagsContainer}>
                {product.tags.map((tag, index) => (
                    <View key={index} style={styles.badge}>
                        <Text style={styles.tagBadge}>{tag}</Text>
                    </View>
                ))}
            </View>

            <Text style={styles.otherProductsTitle}>You may also like</Text>

        </ScrollView>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 300,
        height: 450,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 12,
        color: '#333',
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingContainer: {
        justifyContent: 'center',
        marginBottom: 12,
    },
    rating: {
        backgroundColor: '#008c00',
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 8,
    },
    ratingText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    ratingCount: {
        fontSize: 14,
        color: '#878787',
    },
    priceContainer: {
        backgroundColor: '#deffeb',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    originalPrice: {
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,
        color: 'rgba(0, 0, 0, 0.5)',
        textDecorationLine: 'line-through',
    },
    discountPrice: {
        fontSize: 18,
        color: '#000000',
        fontWeight: '600',
    },
    offerPercentage: {
        fontSize: 17,
        fontWeight: '600',
        color: '#4bb550',
        marginLeft: 8,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 12,
    },
    badge: {
        backgroundColor: '#f1f1f1',
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginRight: 8,
        marginBottom: 8,
    },
    tagBadge: {
        fontSize: 14,
        color: '#333',
    },
    otherProductsTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        color: '#2C3335',
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
});
