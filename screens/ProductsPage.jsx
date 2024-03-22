import { View, Pressable, ScrollView, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { products } from '../products';

export function ProductsPage(props) {
    const { navigation } = props;
    const { height, width } = useWindowDimensions();

    const isHorizontalScreen = width > height;

    return (
        <ScrollView style={styles.container}>
            <View 
                style={[styles.productsContainer, isHorizontalScreen && styles.horizontalProductsContainer]}  
            >
                {products.map((product, index) => (
                    <Pressable 
                        onPress={() => {
                            navigation.navigate("ProductInfo", { product: product })
                        }}
                        key={index}
                    >
                        <ProductCard {...product} />
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
    },
    productsContainer: {
        justifyContent: 'center',
        gap: 8,
    },
    horizontalProductsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});