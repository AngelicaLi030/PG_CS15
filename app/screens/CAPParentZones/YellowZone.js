import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import parent_styles from '../../styles/CAPParentStyle';
import styles from '../../styles/NextStepsScreenStyle';
import zone_styles from '../../styles/CAPParentZoneStyle'
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
function YellowZone({ navigation }) {
  const openPartTimePDF = async () => {
      //    console.log(RNFS.DocumentDirectoryPath);
            const pdfPath = `${RNFS.DocumentDirectoryPath}/pdf/returnToSku.pdf`;
            try {
                const fileExists = await RNFS.exists(pdfPath);
                if (!fileExists) {
                  Alert.alert('Error', 'File does not exist at the specified path');
                  return;
                }
                await FileViewer.open(pdfPath);
              } catch (error) {
                console.error(error);
                Alert.alert('Error', 'Unable to open PDF');
              }
  };
  return (
    <SafeAreaView style={parent_styles.container}>
      <View style={[parent_styles.container]}>
        <Text style={[parent_styles.titleText, parent_styles.titleTextBox,{backgroundColor:'#FFFF88'}]}>YELLOW ZONE</Text>
           <View style={[parent_styles.infoTextContainer,{height: Dimensions.get('window').width/0.8}]}>
              <ScrollView style={[parent_styles.stackedTextBox]}>
                <Text style={[parent_styles.stackedText,{textAlign: 'left',marginVertical: Dimensions.get('window').width/20,fontSize: Dimensions.get('window').width/30}]}>
                  <Text style={{fontWeight:'bold'}}>GRADED RETURN TO ACTIVITY</Text>
                  {'\n\n'}

                  <Text style={{fontWeight:'bold'}}>Step 1 – Light Level</Text>
                  {'\n'}
                  1. Progress toward 30 minutes of cognitive exertion.
                  {'\n'}
                  2. Your child can perform 10-15 minutes of light aerobic activity.
                  {'\n'}
                  <Text style={{color:'#EC0000',fontWeight:'bold'}}>Progress to the next step if your child is symptom free for 24 hours.</Text>
                  {'\n\n'}
                  <Text style={{fontWeight:'bold'}}>Step 2 – Moderate Level</Text>
                  {'\n'}
                  1. {''}<Text style={{color:'blue',textDecorationLine:'underline'}} onPress={openPartTimePDF}>Part-time school</Text>{''} with accommodations (rest breaks, minimal homework, no exams) until tolerating 60 minutes of cognitive exertion.
                  {'\n'}
                  2. Specific skills and moderate aerobic activity for 20-30 minutes.
                  {'\n'}
                  <Text style={{color:'#EC0000',fontWeight:'bold'}}>Progress to the next step if your child is symptom free for 24 hours.</Text>
                  {'\n\n'}

                  <Text style={{fontWeight:'bold'}}>Step 3 – Extended activity</Text>
                  {'\n'}
                  1. Progress towards full time school with minimal accommodations.
                  {'\n'}
                  2. More intense aerobic and skill-based activity on a more regular basis.
                  {'\n'}
                  <Text style={{color:'#EC0000',fontWeight:'bold'}}>Progress to the next step if your child is symptom free for 24 hours.</Text>
                </Text>
              </ScrollView>
            </View>

          <View style={parent_styles.bottomContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Continue Tests', {screen: 'Parent Part'})}
              style={[styles.bottomButton, parent_styles.shadowProp,zone_styles.bottomButton]}
            >
              <Text style={[styles.buttonLabel, zone_styles.buttonLabel]}>Back</Text>
            </TouchableOpacity>
          </View>

      </View>
    </SafeAreaView>
  );
}

export default YellowZone;
