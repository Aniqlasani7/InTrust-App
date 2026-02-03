import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ServiceSelector from '../../components/booking/ServiceSelector';
import DatePicker from '../../components/booking/DatePicker';
import { useBooking } from '../../context/BookingContext';
import { theme } from '../../styles/theme';

const BookingScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const { bookingData, setBookingData } = useBooking();

  const [address, setAddress] = useState<string>('');
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);

  const handleBooking = () => {
    if (!service || !date || !address.trim()) {
      return;
    }

    setBookingData({
      ...bookingData,
      service,
      date,
      address,
    });

    navigation.navigate('BookingConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Service</Text>

      <ServiceSelector onSelectService={(s) => setService(s.name)} />
      <DatePicker onDateSelect={setDate} />

      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        placeholderTextColor={theme.colors.disabled}
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingScreen; // ✅ THIS LINE IS NON-NEGOTIABLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: theme.colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.disabled,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
