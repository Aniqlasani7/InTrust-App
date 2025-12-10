import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useMessages } from '../../context/MessagesContext';
import MessageCard from '../../components/common/Card';

const MessagesScreen = () => {
    const { messages } = useMessages();

    const renderMessage = ({ item }) => (
        <MessageCard>
            <Text style={styles.messageText}>{item.content}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
        </MessageCard>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Messages</Text>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        marginBottom: 16,
    },
    list: {
        paddingBottom: 16,
    },
    messageText: {
        color: '#ffffff',
    },
    timestamp: {
        color: '#b0b0b0',
        fontSize: 12,
    },
});

export default MessagesScreen;