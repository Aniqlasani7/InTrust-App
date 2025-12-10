import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookingConfirmationScreen = () => {
    const navigation = useNavigation();

    const handlePayment = () => {
        // Logic for handling payment
        navigation.navigate('PaymentScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Booking Confirmed!</Text>
            <Text style={styles.message}>Thank you for your booking. Your tradesman will contact you shortly.</Text>
            <TouchableOpacity style={styles.button} onPress={handlePayment}>
                <Text style={styles.buttonText}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#ffffff',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#1E88E5',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

export default BookingConfirmationScreen;