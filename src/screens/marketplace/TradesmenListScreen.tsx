import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TradesmanCard from '../../components/tradesmen/TradesmanCard';
import { fetchTradesmen } from '../../utils/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const TradesmenListScreen = () => {
    const [tradesmen, setTradesmen] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTradesmen = async () => {
            try {
                const data = await fetchTradesmen('');
                setTradesmen(data);
            } catch (error) {
                console.error("Error fetching tradesmen:", error);
            } finally {
                setLoading(false);
            }
        };

        loadTradesmen();
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        <TradesmanCard tradesman={item} />
    );

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tradesmen}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
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

export default TradesmenListScreen;