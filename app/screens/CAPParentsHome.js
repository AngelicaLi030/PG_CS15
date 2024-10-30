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
import zone_styles from '../styles/CAPParentZoneStyle'

import {  useFocusEffect } from '@react-navigation/native';
function CAPParentsHome({navigation}){
    const [redBgColor, setRedBgColor] = useState('#fff');
    const [orangeBgColor, setOrangeBgColor] = useState('#fff');
    const [yellowBgColor, setYellowBgColor] = useState('#fff');
    const [greenBgColor, setGreenBgColor] = useState('#fff');
    useFocusEffect(
        React.useCallback(() => {
            setRedBgColor('#fff');
            setOrangeBgColor('#fff');
            setYellowBgColor('#fff');
            setGreenBgColor('#fff');
        }, [])
    );
    return (
        <SafeAreaView style={uiStyle.container}>
          <View style={[uiStyle.container]}>


              <View style={[uiStyle.infoTextContainer,{height: Dimensions.get('window').width/1.5}]}>
                  <ScrollView style={uiStyle.stackedTextBox}>
                    <Text style={[uiStyle.stackedText,{fontSize: Dimensions.get('window').width/20}]}>
                      Complete the following zone and step-wise program. Seek urgent medical attention
                      if symptoms worsen or new ones appear (see HEAD BUMPS symptoms list)
                    </Text>
                  </ScrollView>
              </View>

              <View style={[uiStyle.bottomContainer]}>
                <TouchableOpacity
                  style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: redBgColor}]}
                   onPressIn={() => setRedBgColor('#FFA8A8')}
                   onPressOut={() => setRedBgColor('#fff')}
                  onPress={() => {
                    setRedBgColor('#FFA8A8');
                    setTimeout(()=>{
                        navigation.navigate('Continue Tests', {screen: 'CAP Red Zone'});
                    },200);
                  }}
                  >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>RED ZONE</Text>

                </TouchableOpacity>
              </View>
              <View style={[uiStyle.bottomContainer]}>
                              <TouchableOpacity
                                onPressIn={() => setOrangeBgColor('#FFE6B7')}
                                onPressOut={() => setOrangeBgColor('#fff')}
                                onPress={() => {
                                  setOrangeBgColor('#FFE6B7');
                                  setTimeout(()=>{
                                    navigation.navigate('Continue Tests', {screen: 'CAP Orange Zone'});
                                  },200);
                                }}
                                style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: orangeBgColor}]}
                              >
                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>ORANGE ZONE</Text>

                              </TouchableOpacity>
                            </View>
              <View style={[uiStyle.bottomContainer]}>
                              <TouchableOpacity
                                onPressIn={() => setYellowBgColor('#FFFF88')}
                                onPressOut={() => setYellowBgColor('#fff')}
                                onPress={() => {
                                  setYellowBgColor('#FFFF88');
                                  setTimeout(()=>{
                                    navigation.navigate('Continue Tests', {screen: 'CAP Yellow Zone'});
                                  },200)
                                }}
                                style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: yellowBgColor}]}
                              >
                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>YELLOW ZONE</Text>

                              </TouchableOpacity>
                            </View>
              <View style={uiStyle.bottomContainer}>
                              <TouchableOpacity
                                onPressIn={() => setGreenBgColor('#B6FDB6')}
                                onPressOut={() => setGreenBgColor('#fff')}
                                onPress={() => {
                                    setGreenBgColor('#B6FDB6')
                                    setTimeout(()=>{
                                        navigation.navigate('Continue Tests', {screen: 'CAP Green Zone'});
                                    },200)

                                }}
                                style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',backgroundColor: greenBgColor}]}
                              >
                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>GREEN ZONE</Text>

                              </TouchableOpacity>
                            </View>
                <View style={uiStyle.bottomContainer}>
                                              <TouchableOpacity
                                                onPress={() => navigation.navigate('Concussion Action Plan')}

                                                style={[styles.bottomButton, uiStyle.shadowProp, zone_styles.bottomButton]}
                                              >
                                                <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67',}]}>BACK</Text>

                                              </TouchableOpacity>
                                            </View>
          </View>

        </SafeAreaView>
    );
}
export default CAPParentsHome