import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { BookingContext } from '../../context/BookingContext';
import DatePicker from '../../components/booking/DatePicker';
import ServiceSelector from '../../components/booking/ServiceSelector';

const BookingScreen = () => {
    const { bookingData, setBookingData } = useContext(BookingContext);
    const [address, setAddress] = useState('');

    const handleBooking = () => {
        // Logic to handle booking submission
        console.log('Booking data:', { ...bookingData, address });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Book a Service</Text>
            <ServiceSelector />
            <DatePicker />
            <TextInput
                style={styles.input}
                placeholder="Enter your address"
                value={address}
                onChangeText={setAddress}
            />
            <Button title="Confirm Booking" onPress={handleBooking} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#ffffff',
        marginBottom: 20,
    },
});

export default BookingScreen;