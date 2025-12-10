import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '../../components/common/Button';

const OnboardingScreen = ({ navigation }) => {
    const handleNext = () => {
        navigation.navigate('Login'); // Navigate to the Login screen
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/onboarding-image.png')} style={styles.image} />
            <Text style={styles.title}>Welcome to Intrust</Text>
            <Text style={styles.subtitle}>Connecting you with verified tradesmen.</Text>
            <Button title="Get Started" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: '#ffffff',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
});

export default OnboardingScreen;