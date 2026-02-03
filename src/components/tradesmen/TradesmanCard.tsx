import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export type Tradesman = {
  id: string;
  name: string;
  service: string;
  rating: number;
};

type TradesmanCardProps = {
  tradesman: Tradesman;
};

const TradesmanCard: React.FC<TradesmanCardProps> = ({ tradesman }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{tradesman.name}</Text>
      <Text style={styles.service}>{tradesman.service}</Text>
      <Text style={styles.rating}>⭐ {tradesman.rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium,
  },
  name: {
    fontSize: 18,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
  },
  service: {
    fontSize: 14,
    color: theme.colors.disabled,
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    color: theme.colors.accent,
    marginTop: 6,
  },
});

export default TradesmanCard;
