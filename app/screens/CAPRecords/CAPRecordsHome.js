import * as React from 'react';
import {
  Text,
  Alert,
  View,
  ImageBackground,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  IncidentReportRepoContext,
  UserContext,
  UserRepoContext,
  IncidentIdContext
} from '../../components/GlobalContextProvider';
import { useContext, useState, useRef, useEffect } from 'react';
import uiStyle from '../../styles/uiStyle';
import styles from '../../styles/AllReportScreenStyle';


function CAPRecordsHome({ navigation }){
  // const patientRepoContext = useContext(PatientRepoContext);
  // const accountRepoContext = useContext(AccountRepoContext);
  // const incidentRepoContext = useContext(IncidentReportRepoContext);
  // const [, setPatient] = useContext(PatientContext);
  // const [account] = useContext(AccountContext);
  // const [reportId] = useContext(ReportIdContext);
  const { incidentId, updateIncidentId } = useContext(IncidentIdContext);
  const incidentReportRepoContext = useContext(IncidentReportRepoContext);
  const [user, setUser] = useContext(UserContext);
  const mounted = useRef(false);


  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

//   useEffect(() => {
//     // Everytime there is a new patientRepoContext we
//     // get patients from it.
//     if (accountRepoContext !== null) {
//         accountRepoContext.getAllAccounts().then((pts) => {
//         if (mounted.current) {
//           setAccounts(pts);
//         }
//       });
//     } else {
//       console.log('null patientRepo');
//     }
//   }, [accountRepoContext]);


//  const createAlert = () =>
//  Alert.alert(
//    'Alert',
//    'Need to Login to see reports',
//    [
//      {
//        text: 'OK',
//        onPress: () => navigation.navigate('Login'),
//      },
//    ],
//  );

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.imagecontainer}>
        <ImageBackground source = {require('../../../assets/brainImg.png')} style={styles.image,{width: Dimensions.get('window').width/1.8,
                                                                                                       height: Dimensions.get('window').width/1.8,}}>
        </ImageBackground>
      </View>
      <View style={styles.titlecontainer}>
        <Text style={styles.text}>
          Which kind of chat would you like to  see?
        </Text>

        <View style={styles.inputAreaContainer}>
          <TouchableOpacity
            style={[styles.bottomButton, styles.shadowProp]}
            onPress={() => {
                navigation.navigate('Continue Tests', {screen: 'Detailed Symptom Charts'});
            }}
          >
            <Text
              style={uiStyle.buttonLabel}
              maxFontSizeMultiplier={1}
            >
              Detailed Symptom Charts
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.bottomButton,  styles.shadowProp]}
            onPress={() => {
              navigation.navigate('Continue Tests', {screen: 'Symptom Summarization'});
            }}
          >
            <Text
              style={uiStyle.buttonLabel}
              maxFontSizeMultiplier={1}
            >
              Symptom Summarization
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottomButton,  styles.shadowProp,{backgroundColor:'#15336D'}]}
            onPress={() => {
                navigation.goBack();
            }}
          >
            <Text
              style={uiStyle.buttonLabel,{fontWeight:'bold',color:'#ffffff'}}
              maxFontSizeMultiplier={1}
          >
                Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CAPRecordsHome;