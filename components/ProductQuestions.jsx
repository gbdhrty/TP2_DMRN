import { View, ScrollView, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { QuestionCard } from './QuestionCard';

export function ProductQuestions({ questions }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perguntas</Text>
            <ScrollView>
                {questions.map((question, index) => (
                    <QuestionCard {...question} key={index} />
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