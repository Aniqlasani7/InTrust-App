import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/common/Header';
import { Card } from '../../components/common/Card';

const categories = [
    { id: '1', title: 'Plumbing' },
    { id: '2', title: 'Electrical' },
    { id: '3', title: 'Carpentry' },
    { id: '4', title: 'Cleaning' },
    { id: '5', title: 'Landscaping' },
];

const CategoryScreen = () => {
    const navigation = useNavigation();

    const renderCategory = ({ item }) => (
        <Card 
            title={item.title} 
            onPress={() => navigation.navigate('TradesmenList', { categoryId: item.id })}
        />
    );

    return (
        <View style={styles.container}>
            <Header title="Service Categories" />
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    list: {
        paddingBottom: 16,
    },
});

export default CategoryScreen;