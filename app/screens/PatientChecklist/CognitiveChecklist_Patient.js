import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/PatientChecklistStyles/CognitiveChecklistStyle_Patient';
import { useNavigation } from '@react-navigation/native';

const CognitiveChecklist_Patient = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(Array(4).fill(false));
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    // Start the 5-second timer when the component mounts
    const timer = setTimeout(() => {
      setTimerExpired(true);
      Alert.alert('Reminder', 'Please complete the checklist within 30 minutes.');
    }, 5000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const toggleSelection = (index) => {
    const updatedSelection = [...selected];
    updatedSelection[index] = !updatedSelection[index];
    setSelected(updatedSelection);
  };

  const resetSelections = () => {
    setSelected(Array(4).fill(false));
  };

  const handleConfirm = () => {
    const cognitiveSelectedCount = selected.filter(Boolean).length;
    const selectedSymptomsCognitive = symptoms.filter((_, index) => selected[index]);
    console.log('Cognitive Confirmed', cognitiveSelectedCount);
    console.log('Selected Cognitive Symptoms:', selectedSymptomsCognitive);

    navigation.navigate('Continue Tests', {
      screen: 'Patient Part',
      params: { cognitiveSelectedCount, selectedSymptomsCognitive }
    });
  };

  const handleCancel = () => {
    console.log('Cognitive Cancelled');
    resetSelections();
  };

  const symptoms = [
    "Difficulty thinking clearly",
    "Problems concentrating",
    "Problems remembering",
    "Feeling slowed down",
    "Feeling hazy, foggy or groggy",
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity testID="back-button" style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#003A67" />
      </TouchableOpacity>

      <Text testID="title" style={styles.title}>Thinking or remembering</Text>

      {symptoms.map((symptom, index) => (
        <View key={index} style={styles.symptomRow}>
          <Text style={styles.symptomText}>{symptom}</Text>
          <TouchableOpacity onPress={() => toggleSelection(index)}>
            <Ionicons
              name={selected[index] ? "radio-button-on" : "radio-button-off"}
              size={24}
              color={selected[index] ? "#003A67" : "#003A67"}
            />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity testID="confirm-button" style={styles.actionButton} onPress={handleConfirm}>
          <Ionicons name="checkmark-circle" size={70} color="green" />
        </TouchableOpacity>

        <TouchableOpacity testID="cancel-button" style={styles.actionButton} onPress={handleCancel}>
          <Ionicons name="close-circle" size={70} color="red" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity testID="reset-button" style={styles.resetButton} onPress={resetSelections}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CognitiveChecklist_Patient;
