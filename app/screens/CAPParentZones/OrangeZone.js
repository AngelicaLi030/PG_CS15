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
import zone_styles from '../../styles/CAPParentZoneStyle';


function OrangeZone({ navigation }) {

  return (
    <SafeAreaView style={parent_styles.container}>
      <View style={[parent_styles.container]}>
        <Text style={[parent_styles.titleText, parent_styles.titleTextBox]}>ORANGE ZONE</Text>
           <View style={[parent_styles.infoTextContainer,{height: Dimensions.get('window').width/0.8}]}>
              <ScrollView style={[parent_styles.stackedTextBox]}>
                <Text style={[parent_styles.stackedText,{textAlign: 'left',marginVertical: Dimensions.get('window').width/20,fontSize: Dimensions.get('window').width/30}]}>
                  <Text style={{fontWeight:'bold'}}>RELATIVE REST PERIOD: Days 3, 4, and 5 following injury:</Text>
                  {'\n\n'}
                  <Text style={{fontWeight:'bold'}}>Recommendations:</Text>
                  {'\n'}
                  1. 5-10 minutes walking
                  {'\n'}
                  2. Balance exercises like single leg stands and heel-toe walking
                  {'\n'}
                  3. Cognitive tasks like crosswords or reading
                  {'\n\n'}
                  <Text style={{fontWeight:'bold'}}>Supportive care:</Text>
                  {'\n'}
                  1. Try to reduce and/or stop headache medication once your child is more physically/mentally active.
                  {'\n'}
                  2. Should sleep pattern remain a problem, then further assessment and possible treatment with Melanin may be considered.  This will require medical supervision and is best discussed with your local GP
                </Text>
              </ScrollView>
            </View>

          <View style={parent_styles.bottomContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Continue Tests', {screen: 'Parent Part'})}
              style={[styles.bottomButton, parent_styles.shadowProp, zone_styles.bottomButton]}
            >
              <Text style={[styles.buttonLabel, zone_styles.buttonLabel]}>Back</Text>
            </TouchableOpacity>
          </View>

      </View>
    </SafeAreaView>
  );
}

export default OrangeZone;
