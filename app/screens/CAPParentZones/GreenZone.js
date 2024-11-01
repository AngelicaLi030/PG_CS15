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


function GreenZone({ navigation }) {

  return (
    <SafeAreaView style={[parent_styles.container]}>
      <View style={[parent_styles.container]}>
        <Text style={[parent_styles.titleText, parent_styles.titleTextBox,{backgroundColor:'#B6FDB6'}]}>GREEN ZONE</Text>
        <View style={[parent_styles.infoTextContainer,{height: Dimensions.get('window').width/0.8}]}>
            <ScrollView style={[parent_styles.stackedTextBox]}>
                <Text style={[parent_styles.stackedText,{textAlign: 'left',marginVertical: Dimensions.get('window').width/20,fontSize: Dimensions.get('window').width/35}]}>
                    <Text style={{fontWeight:'bold'}}>RETURNING TO PRE-INJURY ACTIVITY</Text>
                    {'\n\n'}
                    <Text style={{fontWeight:'bold'}}>Step 4 – Pre-injury activity (without contact)</Text>
                    {'\n'}
                    1. Full time school with minimal accommodations progressing when able to handle all classroom activities.
                    {'\n'}
                    2. Attend sport practice, however with no contact or collision activities
                    {'\n\n'}
                    <Text style={{fontWeight:'bold'}}>Step 5 – Reconditioning (without contact)</Text>
                    {'\n'}
                    1. Full school.
                    {'\n'}
                    2. Progressively return to non-contact sports over the next few weeks (e.g. 10 minutes half game full game).
                    {'\n'}
                    3. Prepare for return to play with extra aerobic and (if relevant) resistance training. Your child must have 14 days symptom free before returning  to contact sport.
                    {'\n\n'}
                    <Text style={{fontWeight:'bold'}}>Step 6 – Full activity (with contact)</Text>
                    {'\n'}
                    1. Once your child has been symptom free for 14 days, return to all activities without restriction, including contact and collision sports.

                </Text>
            </ScrollView>
        </View>

        <View style={[parent_styles.infoTextContainer,parent_styles.stackedTextBox,{height: Dimensions.get('window').width/3.8,backgroundColor:'#fff'}]}>
            <Text style={[parent_styles.stackedText,{fontWeight:'bold',fontSize:15}]}>
                Child must be symptom-free for 14 days before proceeding to Step 6. For school or sports clearance, see your GP for sign-off.
            </Text>
        </View>
        <View style={zone_styles.bottomContainer}>
            <View style={zone_styles.bottomFlexContain}>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.bottomButton,zone_styles.bottomButton]}>
                <Text style={[styles.buttonLabel,zone_styles.buttonLabel]}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Continue Tests', {screen: 'Parent Sign'})}
                style={[styles.bottomButton,zone_styles.bottomButton]}>
                            <Text style={[styles.buttonLabel,zone_styles.buttonLabel]}>Sign-off</Text>
            </TouchableOpacity>

            </View>
        </View>



    </View>

  </SafeAreaView>
  );
}

export default GreenZone;
