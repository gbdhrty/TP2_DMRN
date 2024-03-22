import { View, Text, StyleSheet } from 'react-native';

export function ProductDetails({ description }) {    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Detalhes
            </Text>
            <Text style={styles.text}>
                {description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 8,
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
});