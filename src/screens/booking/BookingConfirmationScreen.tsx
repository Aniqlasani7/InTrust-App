import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../styles/theme';

const BookingConfirmationScreen: React.FC = () => {
  const navigation = useNavigation<any>(); // 👈 fixes the "never" TS error

  const handlePayment = () => {
    // Logic for handling payment
    navigation.navigate('PaymentScreen'); // make sure this route exists in RootNavigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.message}>
        Thank you for your booking. Your tradesman will contact you shortly.
      </Text>
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
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: 24,
    color: theme.colors.text,
    marginBottom: theme.spacing.small,
    fontFamily: theme.fonts.bold,
  },
  message: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
    fontFamily: theme.fonts.regular,
  },
  button: {
    backgroundColor: theme.colors.accent,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: 16,
    fontFamily: theme.fonts.medium,
  },
});

export default BookingConfirmationScreen;
