import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';
import { theme } from '../../styles/theme';

type DatePickerProps = {
  onDateSelect: (date: string) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ onDateSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toLocaleDateString();
  });

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    onDateSelect(date);
    setModalVisible(false);
  };

  return (
    <View style={styles.datePickerContainer}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.datePickerButton}
      >
        <Text style={styles.datePickerText}>
          {selectedDate || 'Select a date'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Date</Text>

            <FlatList
              data={dates}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dateItem}
                  onPress={() => handleDateSelect(item)}
                >
                  <Text style={styles.dateItemText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: {
    width: '100%',
  },
  datePickerButton: {
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.medium,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
    ...theme.shadows.small,
  },
  datePickerText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    maxHeight: '70%',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadius.large,
    ...theme.shadows.medium,
  },
  modalTitle: {
    color: theme.colors.text,
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    marginBottom: theme.spacing.medium,
    textAlign: 'center',
  },
  dateItem: {
    paddingVertical: theme.spacing.small,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.disabled,
  },
  dateItemText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
  closeButton: {
    marginTop: theme.spacing.medium,
    backgroundColor: theme.colors.accent,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius.medium,
    alignItems: 'center',
  },
  closeButtonText: {
    color: theme.colors.background,
    fontFamily: theme.fonts.medium,
  },
});

export default DatePicker;
