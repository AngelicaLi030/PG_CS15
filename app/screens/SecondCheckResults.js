import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import {
  IncidentReportRepoContext,
  PatientContext,
  PatientRepoContext,
  ReportIdContext,
  AccountContext,
  AccountRepoContext
} from '../components/GlobalContextProvider';
import uiStyle from '../styles/uiStyle';
import styles from '../styles/SecondCheckResultsScreenStyle';

const parseSingleResponses = (srs) => {
  let responsesArray = [];
  if (srs !== null) {
    srs.forEach((element) => {
      if (
        element.description === 'Mechanism of injury response' &&
        element.response === 'YES'
      ) {
        responsesArray.push('Yes');
      }
    });
  }
  return responsesArray;
};
/**
 * The screen will show the result after user has completed "IncidentReport"
 * The screen will either be:
 * patient needs to go to GP ASAP,
 * or
 * do further test to assess concussion or go to home and create profile
 *
 * @param {boolean} route.params.hasSymptoms if the individual has any PCSS symptoms
 */
function SecondCheckResults({ route, navigation }) {
  // Context variables
  const [reportId] = useContext(ReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const mounted = useRef(false);
  const [symptoms, setSymptoms] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const accountRepoContext = useContext(AccountRepoContext);
  const [account] = useContext(AccountContext);
  const sliderResult = route.params;

  useEffect(() => {
    mounted.current = true; // Component is mounted
    return () => {
      // Component is unmounted
      mounted.current = false;
    };
  }, []);

  // Local state
  let screen;


  let result = Object.values(sliderResult)[0]
  if (result >= 60) {

    screen = (
      <ScrollView styles={styles.scroll}>
        <View style={uiStyle.container}>
          <Text style={uiStyle.stackedText}>
            The affected individual is displaying some symptoms of concussion.
            {'\n'} {'\n'}
            We strongly recommend you complete our preliminary tests.
            {'\n'} {'\n'}
            If you are concerned, immediately contact a GP.
          </Text>
          <View style={styles.textContainer}>
            <TouchableOpacity
              style={[styles.bottomButton, uiStyle.shadowProp]}
              onPress={() => navigation.navigate('Further Tests')}
            >
              <Text style={uiStyle.buttonLabel}>Complete Preliminary Tests</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    screen = (
      <ScrollView styles={styles.scroll}>
        <View style={uiStyle.container}>
          <Text style={uiStyle.stackedText}>
            There is a low probability of a concussion injury.
            {'\n'} {'\n'}
            However, we strongly recommend you immediately remove yourself from
            play and complete the preliminary tests down below.
            {'\n'} {'\n'}
            You should rest for the next 24 hours. If symptoms should develop,
            see a GP immediately.
          </Text>
            <TouchableOpacity
              style={[styles.bottomButton, uiStyle.shadowProp]}
              onPress={() => navigation.navigate('Further Tests')}
            >
              <Text style={uiStyle.buttonLabel}>Complete Preliminary Tests</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text style={uiStyle.titleText}>Result</Text>
      <ScrollView>{screen}</ScrollView>
    </SafeAreaView>
  );
}

export default SecondCheckResults;