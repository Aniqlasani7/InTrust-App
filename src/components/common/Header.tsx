import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.medium,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.disabled,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});

export default Header;
