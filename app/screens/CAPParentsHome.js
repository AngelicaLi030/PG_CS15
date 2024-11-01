import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';

import uiStyle from '../styles/uiStyle';
import styles from '../styles/FurtherTestScreenStyle';
import zone_styles from '../styles/CAPParentZoneStyle';

function CAPParentsHome({ navigation }) {
    const [redBgColor, setRedBgColor] = useState('#fff');
    const [orangeBgColor, setOrangeBgColor] = useState('#fff');
    const [yellowBgColor, setYellowBgColor] = useState('#fff');
    const [greenBgColor, setGreenBgColor] = useState('#fff');
    const [modalVisible, setModalVisible] = useState(false); // 控制 Modal 的显示状态

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
          <View style={uiStyle.container}>

              {/* Modal for displaying information */}
              <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <View style={{ backgroundColor: 'white', padding: 20, width: '80%', borderRadius: 10 }}>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>H</Text> Headache, seizure, unconscious</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>E</Text> Eye problems (blurred/double vision)</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>A</Text> Abnormal behaviour change</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>D</Text> Dizziness, persistent vomiting</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>B</Text> Balance dysfunctions with weakness or numbness in legs/arms</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>U</Text> Unsteady on feet, slurred speech</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>M</Text> Memory impaired, confused, disoriented</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>P</Text> Poor concentration, drowsy, sleepy</Text>
                    <Text></Text>
                    <Text style={{ textAlign: 'left' }}><Text style={{ fontWeight: 'bold' }}>S</Text> Something's not right (concerned about child)</Text>
                    <Text></Text>
                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20, alignItems: 'center' }}>
                      <Text style={{ textAlign: 'center', color: 'blue' }}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

              {/* Information section with clickable HEAD BUMPS */}
              <View style={[uiStyle.infoTextContainer, { height: Dimensions.get('window').width / 1.5 }]}>
                  <ScrollView style={uiStyle.stackedTextBox}>
                    <Text style={[uiStyle.stackedText, { fontSize: Dimensions.get('window').width / 20 }]}>
                      Complete the following zone and step-wise program. Seek urgent medical attention
                      if symptoms worsen or new ones appear (see{' '}
                      <Text
                        style={{ color: 'blue', textDecorationLine: 'underline' }}
                        onPress={() => setModalVisible(true)}
                      >
                        HEAD BUMPS
                      </Text>{' '}
                      symptoms list)
                    </Text>
                  </ScrollView>
              </View>

              {/* Bottom buttons */}
              <View style={[uiStyle.bottomContainer]}>
                <TouchableOpacity
                  style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: redBgColor }]}
                  onPressIn={() => setRedBgColor('#FFA8A8')}
                  onPressOut={() => setRedBgColor('#fff')}
                  onPress={() => {
                    setRedBgColor('#FFA8A8');
                    setTimeout(() => {
                      navigation.navigate('Continue Tests', { screen: 'CAP Red Zone' });
                    }, 200);
                  }}
                >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67' }]}>RED ZONE</Text>
                </TouchableOpacity>
              </View>

              <View style={[uiStyle.bottomContainer]}>
                <TouchableOpacity
                  onPressIn={() => setOrangeBgColor('#FFE6B7')}
                  onPressOut={() => setOrangeBgColor('#fff')}
                  onPress={() => {
                    setOrangeBgColor('#FFE6B7');
                    setTimeout(() => {
                      navigation.navigate('Continue Tests', { screen: 'CAP Orange Zone' });
                    }, 200);
                  }}
                  style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: orangeBgColor }]}
                >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67' }]}>ORANGE ZONE</Text>
                </TouchableOpacity>
              </View>

              <View style={[uiStyle.bottomContainer]}>
                <TouchableOpacity
                  onPressIn={() => setYellowBgColor('#FFFF88')}
                  onPressOut={() => setYellowBgColor('#fff')}
                  onPress={() => {
                    setYellowBgColor('#FFFF88');
                    setTimeout(() => {
                      navigation.navigate('Continue Tests', { screen: 'CAP Yellow Zone' });
                    }, 200)
                  }}
                  style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: yellowBgColor }]}
                >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67' }]}>YELLOW ZONE</Text>
                </TouchableOpacity>
              </View>

              <View style={uiStyle.bottomContainer}>
                <TouchableOpacity
                  onPressIn={() => setGreenBgColor('#B6FDB6')}
                  onPressOut={() => setGreenBgColor('#fff')}
                  onPress={() => {
                    setGreenBgColor('#B6FDB6')
                    setTimeout(() => {
                      navigation.navigate('Continue Tests', { screen: 'CAP Green Zone' });
                    }, 200);
                  }}
                  style={[styles.bottomButton, uiStyle.shadowProp, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: greenBgColor }]}
                >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67' }]}>GREEN ZONE</Text>
                </TouchableOpacity>
              </View>

              <View style={uiStyle.bottomContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Concussion Action Plan')}
                  style={[styles.bottomButton, uiStyle.shadowProp, zone_styles.bottomButton]}
                >
                  <Text style={[styles.buttonLabel, { flex: 1, color: '#003A67' }]}>BACK</Text>
                </TouchableOpacity>
              </View>
          </View>
        </SafeAreaView>
    );
}

export default CAPParentsHome;
