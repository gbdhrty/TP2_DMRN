import { View, ScrollView, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

export function ProductGallery({ name, images }) {
    const { height, width } = useWindowDimensions();
    
    const isHorizontalScreen = width > height;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galeria de {name}</Text>
            <ScrollView style={styles.scrollView}>
                {images.map((image, index) => (
                   <Image
                        source={{ uri: image }}
                        key={index}
                        style={styles.image}
                    /> 
                ))} 
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 8,
    },
    image: {
        height: 300,
        resizeMode: 'contain',
        marginBottom: 30,
    },
});