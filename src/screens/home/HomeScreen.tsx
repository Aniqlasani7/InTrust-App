import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';

import Header from '../../components/common/Header';
import TradesmanCard from '../../components/tradesmen/TradesmanCard';
import { theme } from '../../styles/theme';

type Tradesman = {
  id: string;
  name: string;
  service: string;
  rating: number;
};

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tradesmen: Tradesman[] = [
    { id: '1', name: 'John Doe', service: 'Plumber', rating: 4.5 },
    { id: '2', name: 'Jane Smith', service: 'Electrician', rating: 4.8 },
    { id: '3', name: 'Mike Johnson', service: 'Carpenter', rating: 4.2 },
  ];

  const renderTradesman: ListRenderItem<Tradesman> = ({ item }) => (
    <TradesmanCard tradesman={item} />
  );

  return (
    <View style={styles.container}>
      <Header title="Home" />

      <TextInput
        style={styles.searchInput}
        placeholder="Search for tradesmen..."
        placeholderTextColor={theme.colors.disabled}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={tradesmen}
        renderItem={renderTradesman}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.tradesmenList}
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
    height: 44,
    borderColor: theme.colors.disabled,
    borderWidth: 1,
    borderRadius: theme.borderRadius.medium,
    paddingHorizontal: theme.spacing.small,
    color: theme.colors.text,
    marginBottom: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
  },
  tradesmenList: {
    paddingBottom: theme.spacing.large,
  },
});

export default HomeScreen;
