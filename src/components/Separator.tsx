import { StyleSheet, Text, View, } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps = PropsWithChildren<{
    product: Product
}>

const Separator = () => {
    return (
        <View style={styles.seprator}>
        </View>
    )
}
const styles = StyleSheet.create({
    seprator: {
        height: 0.8,
        backgroundColor: '#CAD5E2'
    }
})

export default Separator