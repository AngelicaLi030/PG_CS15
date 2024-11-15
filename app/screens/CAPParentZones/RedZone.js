import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState,useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FileViewer from 'react-native-file-viewer';
import styles from '../../styles/NextStepsScreenStyle';
import parent_styles from '../../styles/CAPParentStyle';
import zone_styles from '../../styles/CAPParentZoneStyle';
import RNFS from 'react-native-fs';


function RedZone({ navigation }) {
//  const [filePath, setFilePath] = useState(null);


  const openSymptomLogSheetPDF = async () => {

      const pdfPath = `${RNFS.DocumentDirectoryPath}/pdf/symptomLogSheet.pdf`;
//      RNFS.copyFileAssets(pdfSourcePath, pdfPath)
//                  .then(() => {
//                      Alert.alert('Success', 'copy success');
//                  })
//                  .catch(error => {
//                      Alert.alert('Error', `copy failure: ${error.message}`);
//                  });

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
  const openSymptomSignPDF = async () => {
  //    console.log(RNFS.DocumentDirectoryPath);
        const pdfPath = `${RNFS.DocumentDirectoryPath}/pdf/symptomsAndSigns.pdf`;
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
  const openRecoveryPDF = async () => {
  //    console.log(RNFS.DocumentDirectoryPath);
        const pdfPath = `${RNFS.DocumentDirectoryPath}/pdf/physicalCognitiveActivitySuggestion.pdf`;
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
  const openHeadachePDF = async () => {
  //    console.log(RNFS.DocumentDirectoryPath);
        const pdfPath = `${RNFS.DocumentDirectoryPath}/pdf/headacheInfoSheet.pdf`;
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
        <Text style={[parent_styles.titleText, parent_styles.titleTextBox,{backgroundColor:'#FFA8A8'}]}>RED ZONE</Text>
           <View style={[parent_styles.infoTextContainer,{height: Dimensions.get('window').width/0.75}]}>
              <ScrollView style={[parent_styles.stackedTextBox]}>
                <Text style={[parent_styles.stackedText]}>
                  <Text style={{fontWeight:'bold'}}>REST PERIOD: Days 1, 2 following injury:</Text>
                  {'\n\n'}
                  <Text style={{ fontWeight: 'bold' }}>Rest your child from any physical or cognitive activity.</Text>
                  {'\n\n'}
                  <Text style={{fontWeight:'bold'}}>Supportive care:</Text>
                  {'\n'}
                  1. Encourage good sleep patterns. Rest your child with no TV, phone or disruptions.
                  {'\n'}

                  2. Provide regular meals and a minimum of 2L of water per day.
                  {'\n'}
                  3. Use over the counter{' '}<Text style={{color:'blue',textDecorationLine:'underline'}} onPress={openHeadachePDF}>headache medication</Text>{''}as needed.
                  {'\n'}
                  4. Complete the{' '}<Text style={{color:'blue',textDecorationLine:'underline'}} onPress={openSymptomLogSheetPDF}> Symptoms Log Sheet</Text>{' '}, monitoring your child’s{' '}<Text style={{color:'blue',textDecorationLine:'underline'}} onPress={openSymptomSignPDF}>symptoms and signs</Text>{''}. Continue using the sheet until your child reaches 14 days  without symptoms.
                  {'\n'}
                  5. Encourage your child to have a positive mental attitude towards their{' '}<Text style={{color:'blue',textDecorationLine:'underline'}} onPress={openRecoveryPDF}>recovery</Text>{' '}
                </Text>
              </ScrollView>
            </View>
             <View style={parent_styles.bottomContainer}>
             <TouchableOpacity
                           onPress={() => navigation.goBack()}
                           style={[styles.bottomButton, parent_styles.shadowProp,zone_styles.bottomButton ]}
                         >
              <Text style={[styles.buttonLabel, zone_styles.buttonLabel]}>Back</Text>
            </TouchableOpacity>
          </View>

      </View>
    </SafeAreaView>
  );
}

export default RedZone;
