import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { RatingBadge } from '../../components/tradesmen/RatingBadge';
import { Button } from '../../components/common/Button';

const TradesmanDetailScreen = ({ route }) => {
    const { tradesman } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: tradesman.image }} style={styles.image} />
            <Text style={styles.name}>{tradesman.name}</Text>
            <RatingBadge rating={tradesman.rating} />
            <Text style={styles.description}>{tradesman.description}</Text>
            <Button title="Book Now" onPress={() => { /* Booking logic here */ }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    name: {
        fontSize: 24,
        color: '#ffffff',
        marginVertical: 8,
    },
    description: {
        fontSize: 16,
        color: '#b0b0b0',
        marginVertical: 8,
    },
});

export default TradesmanDetailScreen;