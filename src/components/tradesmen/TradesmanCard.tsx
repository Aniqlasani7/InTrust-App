import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

type TradesmanProps = {
  name: string;
  profession: string;
  rating: number;
};

const TradesmanCard: React.FC<TradesmanProps> = ({ name, profession, rating }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.profession}>{profession}</Text>
      <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    marginVertical: theme.spacing.small,
    ...theme.shadows.small,
  },
  name: {
    color: theme.colors.text,
    fontSize: 18,
    fontFamily: theme.fonts.bold,
  },
  profession: {
    color: theme.colors.disabled,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    marginTop: 4,
  },
  rating: {
    color: theme.colors.accent,
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    marginTop: 6,
  },
});

export default TradesmanCard;
