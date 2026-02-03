// ...existing code...
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const services = [
  { id: '1', name: 'Plumbing' },
  { id: '2', name: 'Electrical' },
  { id: '3', name: 'Carpentry' },
  { id: '4', name: 'Cleaning' },
  { id: '5', name: 'Landscaping' },
];

type Service = {
  id: string;
  name: string;
};

type Props = {
  onSelectService?: (service: Service) => void;
};

const ServiceSelector: React.FC<Props> = ({ onSelectService }) => {
  const renderServiceItem = ({ item }: { item: Service }) => (
    <TouchableOpacity
      style={styles.serviceItem}
      onPress={() => onSelectService?.(item)}  // safe call (no crash if undefined)
    >   
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Service</Text>
      <FlatList
        data={services}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const COLORS = {
  background: '#061A23', // primary background (deep navy)
  card: '#0A2430',
  accent: '#19C3AE',
  white: '#FFFFFF',
  muted: '#B9C6CC',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  serviceItem: {
    backgroundColor: '#2C2C2C',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  serviceText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default ServiceSelector;