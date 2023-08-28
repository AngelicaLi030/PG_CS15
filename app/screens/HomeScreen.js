import * as React from 'react';
import {
  Text,
  View,
  Alert,
  ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../styles/HomeScreenStyle';

/**
 * Starting screen that handles navigation to main app flows.
 *
 * @param navigation used to move to the other screens
 */
function HomeScreen({ navigation }) {
  const createAlert = () =>
    Alert.alert(
      'Alert',
      'We strongly recommend you have someone else do the concussion check for you',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Continue Tests', { screen: 'Red flags checklist' } ),
        },
      ],
    );

  return (
    
    <View style={styles.screen}>
     <View style={styles.container}>
        <ImageBackground source = {require('../../assets/logo.png')} style={styles.image}>
         <View style={styles.containerText}>
            <Text style={styles.titleText}>Concussion Check</Text> 
            
            <ImageBackground source = {require('../../assets/b2.png')} style={styles.imageBackground}>
            <View style={[styles.containerButton, styles.shadowProp]}>
              <TouchableOpacity onPress={createAlert} style={styles.startCheckButton}>
                <Text style={styles.buttonLabel}>Begin Check</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Continue Tests', {screen: 'All Reports'}) } style={[styles.viewHistoryButton, styles.shadowProp]}>
                <Text style={styles.buttonLabel}>View Reports</Text>
              </TouchableOpacity>
              </View>      
             </ImageBackground>       
                
          </View>
         </ImageBackground>
        </View>
      </View>
    
  );
}

export default HomeScreen;