import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TradesmanCard, {
  Tradesman,
} from '../../components/tradesmen/TradesmanCard';
import { theme } from '../../styles/theme';

const SearchScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const [searchQuery, setSearchQuery] = useState('');
  const [tradesmen, setTradesmen] = useState<Tradesman[]>([]);

  const handleSearch = () => {
    const fetchedTradesmen: Tradesman[] = [
      { id: '1', name: 'John Doe', service: 'Plumber', rating: 4.5 },
      { id: '2', name: 'Jane Smith', service: 'Electrician', rating: 4.8 },
    ].filter((t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setTradesmen(fetchedTradesmen);
  };

  const renderTradesman: ListRenderItem<Tradesman> = ({ item }) => (
    <TradesmanCard
      tradesman={item}
      /* card handles its own press later */
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for tradesmen..."
        placeholderTextColor={theme.colors.disabled}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      <FlatList
        data={tradesmen}
        renderItem={renderTradesman}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  searchInput: {
    height: 48,
    borderColor: theme.colors.disabled,
    borderWidth: 1,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.small,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
  list: {
    paddingTop: theme.spacing.medium,
  },
});

export default SearchScreen;
