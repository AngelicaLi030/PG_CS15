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

import uiStyle from '../../styles/uiStyle';
import styles from '../../styles/NextStepsScreenStyle';



function GreenZone({ navigation }) {

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={[uiStyle.container]}>
        <Text style={[uiStyle.titleText, uiStyle.titleTextBox]}>GREEN ZONE</Text>
           <View style={[uiStyle.infoTextContainer,{height: Dimensions.get('window').width/0.8}]}>
              <ScrollView style={[uiStyle.stackedTextBox]}>
                <Text style={[uiStyle.stackedText,{textAlign: 'left',marginVertical: Dimensions.get('window').width/20,fontSize: Dimensions.get('window').width/30}]}>
                  RETURNING TO PRE-INJURY ACTIVITY
                  {'\n\n'}
                  Step 4 – Pre-injury activity (without contact)
                  Full time school with minimal accommodations progressing when able to handle all classroom activities.
                  Attend sport practice, however with no contact or collision activities
                  {'\n\n'}
                  Step 5 – Reconditioning (without contact)
                  Full school.
                  Progressively return to non-contact sports over the next few weeks (e.g. 10 minutes half game full game).
                  Prepare for return to play with extra aerobic and (if relevant) resistance training. Your child must have 14 days symptom free before returning  to contact sport.
                  {'\n\n'}
                  Step 6 – Full activity (with contact)
                  Once your child has been symptom free for 14 days, return to all activities without restriction, including contact and collision sports.

                </Text>
              </ScrollView>
            </View>

          <View style={uiStyle.bottomContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Continue Tests', {screen: 'Parent Part'})}
              style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor:'#fff'}]}
            >
              <Text style={[styles.buttonLabel, { flex: 1,color:'#000000'}]}>Back</Text>
            </TouchableOpacity>
          </View>
          <View style={uiStyle.bottomContainer}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Continue Tests', {screen: 'Parent Part'})}
                        style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor:'#fff'}]}
                      >
                        <Text style={[styles.buttonLabel, { flex: 1,color:'#000000'}]}>Sign-off</Text>
                      </TouchableOpacity>
                    </View>
      </View>
    </SafeAreaView>
  );
}

export default GreenZone;
