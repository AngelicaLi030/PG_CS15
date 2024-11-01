import * as React from 'react';
import {
  Text,
  View,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  IncidentReportRepoContext,
  IncidentIdContext,
  UserContext
} from '../components/GlobalContextProvider';
import styles from '../styles/CAPTestScreenStyle';
import uiStyle from '../styles/uiStyle';

function CAPSelectedPartDoctorComplete({ navigation }) {
  const { incidentId, updateIncidentId } = useContext(IncidentIdContext);
  const incidentReportRepoContext = useContext(IncidentReportRepoContext);
  const [user, setUser] = useContext(UserContext);

  async function fetchIncidents(uid) {
    try {
      const incidents = await incidentReportRepoContext.getIncidents(uid);
      console.log(incidents);
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  }

  const createAlert = () =>
    Alert.alert(
      'Alert',
      'We strongly recommend you have someone else do the concussion check for you',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            incidentReportRepoContext.createReport(user.uid, user.username, null, 0, 0).then((id) => {
              updateIncidentId(id);
              fetchIncidents(incidentId);
              navigation.navigate('Continue Tests', { screen: 'Red flags checklist' });
            });
          }
        },
      ],
    );

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.inputAreaContainer}>
        <TouchableOpacity
          style={[
            styles.bottomButton,
            styles.shadowProp,
            { backgroundColor: '#00ff00', flexDirection: 'row', alignItems: 'center' } // Background color changed to #00ff00
          ]}
          onPress={() => {}}
          disabled={true}
        >
          <Text style={[uiStyle.buttonLabel, { marginRight: 10 }]} maxFontSizeMultiplier={1}>
            Doctor to complete
          </Text>
          <Ionicons name="lock-closed" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bottomButton, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('Continue Tests', { screen: 'Parent Part' });
          }}
        >
          <Text style={uiStyle.buttonLabel} maxFontSizeMultiplier={1}>
            Parent to complete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bottomButton, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('Continue Tests', {screen: 'Patient Part'});
          }}
        >
          <Text style={uiStyle.buttonLabel} maxFontSizeMultiplier={1}>
            Patient to complete
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextButton, styles.shadowProp]}
          onPress={() => {
            navigation.navigate('Continue Tests', { screen: 'Prelim Report' });
          }}
        >
          <Text style={styles.nextText} maxFontSizeMultiplier={1}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default CAPSelectedPartDoctorComplete;
