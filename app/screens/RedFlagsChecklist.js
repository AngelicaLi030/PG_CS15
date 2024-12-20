import * as React from 'react';
import {
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import uiStyle from '../styles/uiStyle';
import cbStyle from '../components/checkboxStyle';
import styles from '../styles/RedFlagsVTChecklistScreenStyle';

import preventBackAction from '../components/preventBackAction';

import {
  IncidentReportRepoContext,
  IncidentIdContext,
  UserContext
} from '../components/GlobalContextProvider';

const tests = [
  { title: 'PCSS', screen: 'PCSS Checklist' },
  // and so on
];

/**
 * The screen will ask user for details about concussion in checklist form.
 */

function RedFlagsChecklist({ navigation }) {
  preventBackAction();
  const [user, setUser] = useContext(UserContext);
  const incidentReportRepoContext = useContext(IncidentReportRepoContext);
  incidentReportRepoContext.setFinishedupto(incidentId, 0);

  // IMPORTANT: this incidentId is for the PREVIOUS incident, need to increment when use
  const { incidentId, updateIncidentId } = useContext(IncidentIdContext);

  const MyCheckbox = (props) => {
    const [checked, onChange] = useState(false);

    function onCheckmarkPress() {
      onChange(!checked);
      onUpdate(props.value);
    }

    return (
      <Pressable
        style={[cbStyle.checkboxBase, checked && cbStyle.checkboxChecked]}
        onPress={onCheckmarkPress}
      >
        {checked && <Ionicons name="checkmark" size={28} color="white" />}
      </Pressable>
    );
  };

  // Initialize an array of length 10 with zeros
  const chosenList = new Array(10).fill(0);

  // Function to toggle values from 0 to 1
  function onUpdate(index) {
  // Check if the index is valid
    if (index >= 0 && index < chosenList.length) {
      chosenList[index] = chosenList[index] === 0 ? 1 : 0;
    }
//    console.log(chosenList)
    return chosenList;
  }

  async function fetchRedFlag(uid, iid) {
    try {
      const redFlags = await incidentReportRepoContext.getRedFlag(uid, iid);
      console.log(redFlags);
    } catch (error) {
      console.error('Error fetching incidents:', error);
    }
  }

  return (
    <SafeAreaView style={uiStyle.container}>
      <Text
        style={styles.headingText}
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        Red Flag Checklist
      </Text>
      <Text style={styles.subheadingText}>
        Are any of the following symptoms present? Select all that apply.
      </Text>

      <ScrollView>
        <View style={cbStyle.allCheckboxContainer}>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
            >{`Neck pain or tenderness`}</Text>
            <MyCheckbox testID='neck_pain' accessible={true} accessibilityLabel={'neck_pain'} label='neck_pain' value="0" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text style={cbStyle.checkboxLabel}>{`Double vision`}</Text>
            <MyCheckbox testID='double_vision' accessible={true} accessibilityLabel={'double_vision'} label='double_vision' value="1" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
              adjustsFontSizeToFit={true}
              numberOfLines={2}
            >{`Weakness or tingling/burning in the arms or legs`}</Text>
            <MyCheckbox testID='weakness_tingling' accessible={true} accessibilityLabel={'weakness_tingling'} label='weakness_tingling' value="2" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
            >{`Severe or increasing headache`}</Text>
            <MyCheckbox testID='severe_headache' accessible={true} accessibilityLabel={'severe_headache'} label='severe_headache' value="3" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
            >{`Seizures or convulsions`}</Text>
            <MyCheckbox testID='seizures' accessible={true} accessibilityLabel={'seizures'} label='seizures' value="4" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text style={cbStyle.checkboxLabel}>{`Loss of consciousness`}</Text>
            <MyCheckbox testID='consciousness' accessible={true} accessibilityLabel={'consciousness'} label='consciousness' value="5" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
            >{`Deteriorating conscious state`}</Text>
            <MyCheckbox testID='deteriorating' accessible={true} accessibilityLabel={'deteriorating'} label='deteriorating' value="6" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text style={cbStyle.checkboxLabel}>{`Vomiting`}</Text>
            <MyCheckbox testID='vomiting' accessible={true} accessibilityLabel={'vomiting'} label='vomiting' value="7" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
            >{`Increasing restlessness`}</Text>
            <MyCheckbox testID='restlessness' accessible={true} accessibilityLabel={'restlessness'} label='restlessness' value="8" />
          </View>
          <View style={cbStyle.checkboxContainer}>
            <Text
              style={cbStyle.checkboxLabel}
            >{`Agitation or combativeness`}</Text>
            <MyCheckbox testID='agitation' accessible={true} accessibilityLabel={'agitation'} label='agitation' value="9" />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          // Using reduce() to sum the array
          const sum = chosenList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          let pass = null;
          if (sum > 0) {
            pass = 0;
          } else {
            pass = 1;
          }

          // IMPORTANT: we use "incidentId + 1" because incidentId was set before we create a
          // new report for this incident (should have a more elegant implementation)
          incidentReportRepoContext.setRedFlag(user.uid, incidentId, chosenList[0],
                      chosenList[1], chosenList[2], chosenList[3], chosenList[4],
                      chosenList[5], chosenList[6], chosenList[7], chosenList[8],
                      chosenList[9], pass)
          fetchRedFlag(user.uid, incidentId + 1)

          if (pass === 1) {
            incidentReportRepoContext.setFinishedupto(incidentId, 1);
            navigation.navigate('Next Steps');

          } else {
            incidentReportRepoContext.resetFinishedupto(incidentId); // set finishedupto to -1 when fail
            navigation.navigate('Check Result');
          }
        }}
        style={[styles.bottomButton, uiStyle.shadowProp]}
      >
        <Text style={uiStyle.buttonLabel}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RedFlagsChecklist;
