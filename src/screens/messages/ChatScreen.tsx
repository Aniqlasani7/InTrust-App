import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = ({ route }) => {
    const { tradesmanId } = route.params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Fetch messages from the server or local storage
        const fetchMessages = async () => {
            // Replace with actual API call
            const fetchedMessages = await fetchMessagesFromAPI(tradesmanId);
            setMessages(fetchedMessages);
        };

        fetchMessages();
    }, [tradesmanId]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            // Send message to the server
            sendMessageToAPI(tradesmanId, newMessage);
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    };

    const renderMessage = ({ item }) => (
        <View style={item.sender === 'user' ? styles.userMessage : styles.tradesmanMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.messagesList}
                inverted
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Type a message..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity onPress={handleSendMessage}>
                    <Ionicons name="send" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    messagesList: {
        padding: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#007aff',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    tradesmanMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#444',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        maxWidth: '80%',
    },
    messageText: {
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#333',
    },
    input: {
        flex: 1,
        backgroundColor: '#444',
        borderRadius: 20,
        padding: 10,
        color: '#fff',
        marginRight: 10,
    },
});

export default ChatScreen;