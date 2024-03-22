import { View, Text, StyleSheet } from 'react-native';

const formatDate = timestamp => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function CommentCard({ user, rating, date, comment }) {
    return (
        <View style={[styles.container, styles.text]}>
            <View style={styles.containerHeader}>
                <Text style={[styles.text, styles.fontBold]}>{user}</Text>
                <Text style={styles.text}>{formatDate(date)}</Text>
            </View>
            <Text style={[styles.text, styles.rating]}>Avaliação: {rating}/5</Text>
            <Text style={styles.text}>{comment}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#D5D5D5',
        padding: 8,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 18,
    },
    fontBold: {
        fontWeight: 'bold',
    },
    rating: {
        paddingVertical: 4,
    },
});