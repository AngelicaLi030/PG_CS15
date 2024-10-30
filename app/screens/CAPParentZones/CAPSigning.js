import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
//import SignatureCanvas from 'react-native-signature-canvas';
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import parent_styles from '../../styles/CAPParentStyle';
import styles from '../../styles/NextStepsScreenStyle';
import zone_styles from '../../styles/CAPParentZoneStyle';
function CAPSigning({ navigation }){


    return (
        <SafeAreaView style={parent_styles.container}>
        <View style={[parent_styles.container]}>
            <View style={[parent_styles.infoTextContainer,parent_styles.stackedTextBox,{height: Dimensions.get('window').width/3.8,backgroundColor:'#fff'}]}>
                    <Text style={[parent_styles.stackedText,{fontWeight:'bold',fontSize:15}]}>
                        Child must be symptom-free for 14 days before proceeding to Step 6. For school or sports clearance, see your GP for sign-off.
                    </Text>
            </View>
            <TouchableOpacity
                                       onPress={() => navigation.navigate('Continue Tests', {screen: 'Success Submit'})}
                                       style={[styles.bottomButton, parent_styles.shadowProp]}
                                     >
                          <Text style={[styles.buttonLabel]}>Next</Text>
                        </TouchableOpacity>
        </View>

        </SafeAreaView>
    );


}
export default CAPSigning;