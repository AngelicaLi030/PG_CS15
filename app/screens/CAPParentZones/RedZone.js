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

import styles from '../../styles/NextStepsScreenStyle';
import parent_styles from '../../styles/CAPParentStyle';
import zone_styles from '../../styles/CAPParentZoneStyle';
function RedZone({ navigation }) {
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
                  3. Use over the counter headache medication as needed.
                  {'\n'}
                  4. Complete the Symptoms Log Sheet, monitoring your child’s symptoms and signs. Continue using the sheet until your child reaches 14 days  without symptoms.
                  {'\n'}
                  5. Encourage your child to have a positive mental attitude towards their recovery
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
