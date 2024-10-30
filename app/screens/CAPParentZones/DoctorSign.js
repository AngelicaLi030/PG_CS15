import React, { useState,useEffect,useRef } from 'react';
import { View, Text, TouchableOpacity,Dimensions } from 'react-native';
import Signature from 'react-native-signature-canvas';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../styles/DoctorInformationStyles/DoctorSignStyle';
import styles_1 from '../../styles/NextStepsScreenStyle';
import parent_styles from '../../styles/CAPParentStyle';
const DoctorSign = () => {
  const signRef = useRef();
  const navigation = useNavigation();
  const route = useRoute();

  const {
    doctorName = '',
    physicalSelectedSymptoms = [],
    cognitiveSelectedSymptoms = [],
    emotionalSelectedSymptoms = [],
    sleepSelectedSymptoms = [],
  } = route.params || {};

  const handleSave = (signature) => {
    console.log("Signature saved");

    navigation.navigate('Continue Tests', {
      screen: 'Doctor Review',
      params: {
        doctorName,
        physicalSelectedSymptoms,
        cognitiveSelectedSymptoms,
        emotionalSelectedSymptoms,
        sleepSelectedSymptoms,
        signature
      }
    });
  };

  const handleClear = () => {
    signRef.current.clearSignature();
  };

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day < 10 ? `0${day}` : day} / ${month < 10 ? `0${month}` : month} / ${year}`;

    setCurrentDate(formattedDate);
   }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Doctor's Signature</Text>

      <View style={styles.signatureContainer}>
        <Signature
          ref={signRef}
          onOK={handleSave}
          onEmpty={() => console.log("Signature cleared")}
          descriptionText="Sign above"
          clearText="Clear"
          confirmText="Save"
          webStyle={`.m-signature-pad--footer {display: none;}`}
          style={styles.signatureCanvas}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => signRef.current.readSignature()}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:10,marginBottom:10,height:Dimensions.get('window').height/8,width:Dimensions.get('window').width*0.8, borderRadius:30,backgroundColor:'#fff'}}>
        <Text style={styles.title}>Date</Text>
        <Text style={{
                         fontSize: 25,
                         color: '#000',
                         fontWeight: 'bold',
                         borderBottomWidth: 2,
                         borderBottomColor: '#000',
                       }}>  {currentDate}  </Text>
      </View>


      <TouchableOpacity
        onPress={() => navigation.navigate('Continue Tests', {screen: 'Success Submit'})}
        style={[styles_1.bottomButton, parent_styles.shadowProp]}
      >
        <Text style={[styles_1.buttonLabel]}>Next</Text>
      </TouchableOpacity>


    </SafeAreaView >
  );
};

export default DoctorSign;
