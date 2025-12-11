import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/common/Button';
import { theme } from '../../styles/theme';

const SignupScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    console.log('User signed up:', { name, email, password });
    navigation.navigate('Login'); // route name MUST match RootNavigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={theme.colors.disabled}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={theme.colors.disabled}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={theme.colors.disabled}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Sign Up" onPress={handleSignup} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Log in</Text>
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
    color: theme.colors.text,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
    fontFamily: theme.fonts.bold,
  },
  input: {
    height: 50,
    borderColor: theme.colors.disabled,
    borderWidth: 1,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.small,
    marginBottom: theme.spacing.medium,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
  link: {
    color: theme.colors.accent,
    textAlign: 'center',
    marginTop: theme.spacing.medium,
    fontFamily: theme.fonts.medium,
  },
});

export default SignupScreen;
