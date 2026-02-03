import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ListRenderItem,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/common/Header';
import Card from '../../components/common/Card';
import { theme } from '../../styles/theme';

type Category = {
  id: string;
  title: string;
};

const categories: Category[] = [
  { id: '1', title: 'Plumbing' },
  { id: '2', title: 'Electrical' },
  { id: '3', title: 'Carpentry' },
  { id: '4', title: 'Cleaning' },
  { id: '5', title: 'Landscaping' },
];

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const renderCategory: ListRenderItem<Category> = ({ item }) => (
    <Card
      title={item.title}
      onPress={() =>
        navigation.navigate('TradesmenList', { id: item.id })
      }
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Service Categories" />

      <FlatList
        data={categories}
        renderItem={renderCategory}
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
  list: {
    paddingBottom: theme.spacing.large,
  },
});

export default CategoryScreen;
