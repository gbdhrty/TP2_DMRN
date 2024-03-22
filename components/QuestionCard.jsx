import { View, Text, StyleSheet } from 'react-native';

const formatDate = timestamp => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function QuestionCard({ user, date, question, answer }) {
    return (
        <View style={styles.container}>
            <View style={[styles.containerHeader, styles.text]}>
                <Text style={[styles.boldText, styles.text]}>{user} perguntou:</Text>
                <Text style={styles.text}>{formatDate(date)}</Text>
            </View>
            <Text style={[styles.question, styles.text]}>{question}</Text>
            <View>
                <Text style={[styles.boldText, styles.text]}>Resposta:</Text>
                <Text style={[styles.question, styles.text]}>{answer}</Text>
            </View>
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
        paddingVertical: 4,
    },
    text: {
        fontSize: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    question: {
        paddingVertical: 4,
    },
});