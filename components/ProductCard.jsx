import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';

export function ProductCard({ images, name, price }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: images[0] }}
                style={styles.image}
            />
            <View style={styles.productInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>R${price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#D5D5D5',
        borderRadius: 5,
        padding: 8,
        shadowColor: "#000000",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    image: {
        height: 250,
        resizeMode: 'contain',
    },
    productInfo: {
        borderTopWidth: 1,
        padding: 5,
        borderColor: '#D5D5D5',
    },
    name: {
        fontSize: 18,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});