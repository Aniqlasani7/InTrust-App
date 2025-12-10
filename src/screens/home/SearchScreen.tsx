import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/common/Button';
import { TradesmanCard } from '../../components/tradesmen/TradesmanCard';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tradesmen, setTradesmen] = useState([]);
  const navigation = useNavigation();

  const handleSearch = () => {
    // Mock API call to fetch tradesmen based on search query
    const fetchedTradesmen = [
      { id: '1', name: 'John Doe', service: 'Plumber' },
      { id: '2', name: 'Jane Smith', service: 'Electrician' },
    ].filter(tradesman => tradesman.name.toLowerCase().includes(searchQuery.toLowerCase()));

    setTradesmen(fetchedTradesmen);
  };

  const renderTradesman = ({ item }) => (
    <TradesmanCard
      tradesman={item}
      onPress={() => navigation.navigate('TradesmanDetail', { tradesmanId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for tradesmen..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={tradesmen}
        renderItem={renderTradesman}
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
  searchInput: {
    height: 50,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff',
  },
  list: {
    paddingTop: 16,
  },
});

export default SearchScreen;