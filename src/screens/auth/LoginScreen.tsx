import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../styles/theme';

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<any>(); // 👈 fixes the "never" error

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor={theme.colors.disabled}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    padding: theme.spacing.medium,
  },
  title: {
    fontSize: 24,
    color: theme.colors.text,
    marginBottom: theme.spacing.large,
    textAlign: 'center',
    fontFamily: theme.fonts.bold,
  },
  input: {
    height: 50,
    borderColor: theme.colors.disabled,
    borderWidth: 1,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.small,
    color: theme.colors.text,
    marginBottom: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
  },
  button: {
    backgroundColor: theme.colors.accent,
    paddingVertical: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
  },
  buttonText: {
    color: theme.colors.background,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.medium,
  },
});

export default LoginScreen;
