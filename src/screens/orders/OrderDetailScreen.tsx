import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Button from '../../components/common/Button';

const OrderDetailScreen = () => {
    const route = useRoute<any>();
    const { orderId } = route.params as { orderId: string };

    // Mock order data
    const orderDetails = {
        id: orderId,
        tradesman: 'John Doe',
        service: 'Plumbing',
        date: '2023-10-15',
        status: 'Completed',
        total: '$150',
        description: 'Fixed the leaking sink in the kitchen.',
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Order Details</Text>
            <View style={styles.detailContainer}>
                <Text style={styles.label}>Tradesman:</Text>
                <Text style={styles.value}>{orderDetails.tradesman}</Text>
                <Text style={styles.label}>Service:</Text>
                <Text style={styles.value}>{orderDetails.service}</Text>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.value}>{orderDetails.date}</Text>
                <Text style={styles.label}>Status:</Text>
                <Text style={styles.value}>{orderDetails.status}</Text>
                <Text style={styles.label}>Total:</Text>
                <Text style={styles.value}>{orderDetails.total}</Text>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.value}>{orderDetails.description}</Text>
            </View>
            <Button title="Contact Tradesman" onPress={() => console.log('Contact tradesman')} />
        </ScrollView>
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
    detailContainer: {
        backgroundColor: '#1e1e1e',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        color: '#cccccc',
    },
    value: {
        fontSize: 18,
        color: '#ffffff',
        marginBottom: 8,
    },
});

export default OrderDetailScreen;