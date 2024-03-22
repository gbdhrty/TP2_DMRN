import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { CommentCard } from './CommentCard';


export function ProductComments({ comments }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comentários</Text>
            <ScrollView>
                {comments.map((comment, index) => (
                    <CommentCard {...comment} key={index} />
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
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical: 8,
    },
});