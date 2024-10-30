import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/SuccessPageStyle';

const SuccessPage = () => {
  const navigation = useNavigation();
  const smileImage = require('../../assets/Wechat426.jpg');

  const handleDone = () => {
    console.log("Done button pressed");
    navigation.navigate('Continue Tests', { screen:'CAPSelectPage Doctor Complete'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Image
          source={smileImage}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>Woo hoo!!</Text>

        <Text style={styles.subtitle}>Congrats! Symptoms have{"\n"}been successfully logged.</Text>
      </View>

      <TouchableOpacity onPress={handleDone} style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessPage;

