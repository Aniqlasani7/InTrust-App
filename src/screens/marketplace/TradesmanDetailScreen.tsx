import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';

import RatingBadge from '../../components/tradesmen/RatingBadge';
import Button from '../../components/common/Button';
import { theme } from '../../styles/theme';
import type { RootStackParamList } from '../../navigation/RootNavigator';

type TradesmanDetailRouteProp = RouteProp<
  RootStackParamList,
  'TradesmanDetail'
>;

type Props = {
  route: TradesmanDetailRouteProp;
};

const TradesmanDetailScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { id } = route.params;

  // 🔹 Temporary mock data (replace with API later)
  const tradesman = {
    id,
    name: 'John Doe',
    service: 'Plumber',
    rating: 4.6,
    description:
      'Experienced plumber with 10+ years of experience in residential and commercial plumbing.',
    image:
      'https://images.unsplash.com/photo-1603415526960-f7e0328b74b8',
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: tradesman.image }} style={styles.image} />

      <Text style={styles.name}>{tradesman.name}</Text>
      <Text style={styles.service}>{tradesman.service}</Text>

      <RatingBadge rating={tradesman.rating} />

      <Text style={styles.description}>{tradesman.description}</Text>

      <Button
        title="Book Now"
        onPress={() => navigation.navigate('Booking')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.medium,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium,
  },
  name: {
    fontSize: 24,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    marginBottom: 4,
  },
  service: {
    fontSize: 16,
    color: theme.colors.disabled,
    marginBottom: theme.spacing.small,
  },
  description: {
    fontSize: 16,
    color: theme.colors.text,
    marginVertical: theme.spacing.medium,
    fontFamily: theme.fonts.regular,
  },
});

export default TradesmanDetailScreen;
