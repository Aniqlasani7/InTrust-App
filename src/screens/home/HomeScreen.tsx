import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { Header } from '../../components/common/Header';
import { TradesmanCard } from '../../components/tradesmen/TradesmanCard';
import { colors } from '../../styles/colors';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const tradesmen = [
    // Sample data for tradesmen
    { id: '1', name: 'John Doe', service: 'Plumber', rating: 4.5 },
    { id: '2', name: 'Jane Smith', service: 'Electrician', rating: 4.8 },
    { id: '3', name: 'Mike Johnson', service: 'Carpenter', rating: 4.2 },
  ];

  const renderTradesman = ({ item }) => (
    <TradesmanCard tradesman={item} />
  );

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search for tradesmen..."
        placeholderTextColor={colors.gray}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={tradesmen}
        renderItem={renderTradesman}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.tradesmenList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.white,
    marginBottom: 16,
  },
  tradesmenList: {
    paddingBottom: 16,
  },
});

export default HomeScreen;