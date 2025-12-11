import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../../components/common/Button';
import { theme } from '../../styles/theme';

type OnboardingProps = {
  navigation: any; // simple fix; we can strongly type this later if you want
};

const OnboardingScreen: React.FC<OnboardingProps> = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/onboarding-image.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Intrust</Text>
      <Text style={styles.subtitle}>
        Connecting you with verified tradesmen.
      </Text>
      <Button title="Get Started" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.medium,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: theme.spacing.medium,
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
    fontFamily: theme.fonts.regular,
  },
});

export default OnboardingScreen;
