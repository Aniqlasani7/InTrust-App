import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RatingBadge } from './RatingBadge';

interface TradesmanCardProps {
  name: string;
  image: string;
  rating: number;
  services: string[];
}

const TradesmanCard: React.FC<TradesmanCardProps> = ({ name, image, rating, services }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <RatingBadge rating={rating} />
        <Text style={styles.services}>{services.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  services: {
    color: '#B0B0B0',
    fontSize: 14,
  },
});

export default TradesmanCard;