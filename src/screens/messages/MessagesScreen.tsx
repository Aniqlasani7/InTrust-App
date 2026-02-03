import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../../components/common/Card';

type Message = {
  id: string;
  content: string;
  timestamp: string;
};

type MessagesContextType = {
  messages: Message[];
};

const useMessages = (): MessagesContextType => {
  // Placeholder implementation
  return { messages: [] };
};

const MessagesScreen = () => {
    const { messages } = useMessages();

    const renderMessage = ({ item }: { item: Message }) => (
        <Card title={item.content}>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
        </Card>
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
    timestamp: {
        color: '#b0b0b0',
        fontSize: 12,
    },
});

export default MessagesScreen;