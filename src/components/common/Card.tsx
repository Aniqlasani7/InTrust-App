import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../styles/theme';

export type CardProps = {
  title: string;
  onPress?: () => void;
};

const Card: React.FC<CardProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={styles.card}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card ?? theme.colors.surface,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium,
  },
  title: {
    fontSize: 16,
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
  },
});

export default Card;
