import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from 'react';

import uiStyle from '../styles/uiStyle';
import styles from '../styles/FurtherTestScreenStyle'
function CAPParentsHome({navigation}){

    return (
        <SafeAreaView style={uiStyle.container}>
          <View style={[uiStyle.container]}>


              <View style={[uiStyle.infoTextContainer,{height: Dimensions.get('window').width/1.5}]}>
                  <ScrollView style={uiStyle.stackedTextBox}>
                    <Text style={[uiStyle.stackedText,{fontSize: Dimensions.get('window').width/20}]}>
                      Complete the fo following zone and step-wise program. Seek urgent medical attention
                      if symptoms worsen or new ones appear (see HEAD BUMPS symptoms list)
                    </Text>
                  </ScrollView>
              </View>

              <View style={[uiStyle.bottomContainer]}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Continue Tests', {screen: 'CAP Red Zone'})
                  }}
                  style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#fff'}]}
                >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>RED ZONE</Text>

                </TouchableOpacity>
              </View>
              <View style={[uiStyle.bottomContainer]}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('Continue Tests', {screen: 'CAP Orange Zone'})
                                }}
                                style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#fff'}]}
                              >
                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>ORANGE ZONE</Text>

                              </TouchableOpacity>
                            </View>
              <View style={[uiStyle.bottomContainer,{marginTop:0}]}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('Continue Tests', {screen: 'CAP Yellow Zone'})
                                }}
                                style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#fff'}]}
                              >
                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>YELLOW ZONE</Text>

                              </TouchableOpacity>
                            </View>
              <View style={uiStyle.bottomContainer}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('Continue Tests', {screen: 'CAP Green Zone'})
                                }}
                                style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: '#fff'}]}
                              >
                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>GREEN ZONE</Text>

                              </TouchableOpacity>
                            </View>

          </View>
        </SafeAreaView>
    );
}
export default CAPParentsHome