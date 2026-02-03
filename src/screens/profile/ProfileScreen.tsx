import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../styles/colors';

const ProfileScreen = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>John Doe</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>john.doe@example.com</Text>
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>+1234567890</Text>
            </View>
            <TouchableOpacity 
                style={styles.editButton} 
                onPress={() => navigation.navigate('EditProfile')}
            >
                <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: colors.text,
        marginBottom: 20,
    },
    profileInfo: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        color: colors.placeholder,
    },
    value: {
        fontSize: 18,
        color: colors.text,
    },
    editButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    editButtonText: {
        color: colors.text,
        fontSize: 16,
    },
});

export default ProfileScreen;