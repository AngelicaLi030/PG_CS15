import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  ImageBackground,
  ProgressBarAndroid
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState, useEffect } from "react";
import {
  IncidentReportRepoContext,
  IncidentIdContext,
  AgeHopTestContext,
  UserContext
} from '../../components/GlobalContextProvider';

import uiStyle from '../../styles/uiStyle';
import styles from '../../styles/HopTestsStyles/HTCompleteStyle';
import ProgressBar from '../../styles/ProgressBar';

import preventBackAction from '../../components/preventBackAction';

function HTComplete({ route, navigation }) {
  const hopTestRoute = route.params;
  var hopTestPreFormResult = Object.values(hopTestRoute)[0]
  var hopTestCountResult = Object.values(hopTestRoute)[1]
  var hopTestPostFormResult = Object.values(hopTestRoute)[2]
  const { incidentId, updateIncidentId } = useContext(IncidentIdContext);
  const incidentReportRepoContext = useContext(IncidentReportRepoContext);
  const [user, setUser] = useContext(UserContext);
  const [ageHopTestContext, setAgeHopTestContext] = useContext(AgeHopTestContext);

  preventBackAction();

  async function fetchHops(uid, iid) {
    try {
      const hop = await incidentReportRepoContext.getHop(uid, iid);
      console.log(hop);
    } catch (error) {
      console.error('Error fetching hop result:', error);
    }
  }
  // console.log(ageHopTestContext)
  // console.log(hopTestPreFormResult)
  // console.log(hopTestCountResult)
  // console.log(hopTestPostFormResult)

  const storeResult = () => {
    var result = 0;

    if (ageHopTestContext <= 3 && hopTestCountResult >= 0) {
      result = 1;
    }
    else if (ageHopTestContext == 4 && hopTestCountResult >= 1) {
      result = 1;
    }
    else if (ageHopTestContext == 5 && hopTestCountResult >= 4) {
      result = 1;
    }
    else if (ageHopTestContext == 6 && hopTestCountResult >= 8) {
      result = 1;
    }
    else if (ageHopTestContext == 7 && hopTestCountResult >= 10) {
      result = 1;
    }
    else if (ageHopTestContext == 8 && hopTestCountResult >= 13) {
      result = 1;
    }
    else if (ageHopTestContext >= 9 && ageHopTestContext <= 10 && hopTestCountResult >= 15) {
      result = 1;
    }
    else if (ageHopTestContext >= 11 && ageHopTestContext <= 12 && hopTestCountResult >= 17) {
      result = 1;
    }
    else if (ageHopTestContext >= 13 && ageHopTestContext <= 14 && hopTestCountResult >= 18) {
      result = 1;
    }
    else if (ageHopTestContext >= 15 && hopTestCountResult >= 20) {
      result = 1;
    }

    incidentReportRepoContext.setHop(user.uid, incidentId, hopTestCountResult, result);
    console.log(fetchHops(user.uid, incidentId));
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <ImageBackground style={styles.image} 
          source = {require('../../../assets/b3.png')}>
        <ProgressBar percentage={89} />

        <View style={{ alignItems: 'center' }}>
          <Text style={[uiStyle.titleText, uiStyle.titleTextBox]}>Hop Test Complete</Text>
        </View>

        <View style={uiStyle.infoTextContainer}>
          <ScrollView style={uiStyle.stackedTextBox}>
          <Text style={uiStyle.stackedText}>
            You have successfully completed the hop test. Press next
            to continue with testing.
          </Text>
        </ScrollView>
        </View>


        <View style={uiStyle.bottomContainer}>
          <TouchableOpacity
            onPress={() => {
              storeResult()
              navigation.navigate('Memory Test 5 Intro');
            }}
            style={[uiStyle.bottomButtonBlue, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
          >
            <Text style={[uiStyle.buttonLabelWhite, { flex: 1 }]}>Next</Text>
            <Ionicons name="arrow-forward-outline" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default HTComplete;
