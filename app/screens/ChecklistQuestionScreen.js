import * as React from 'react';
import {
  CheckBox,
  Text,
  View,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CheckBox from 'react-native-community/checkbox';
import { useState } from 'react';
import styles from '../styles/CheckListQuestionScreenStyle';

/**
 * The screen will ask user for details about concussion in checklist form.
 */
function CheckListQuestionScreen({ navigation }) {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [toggleCheckBox7, setToggleCheckBox7] = useState(false);
  const [toggleCheckBox8, setToggleCheckBox8] = useState(false);
  const [toggleCheckBox9, setToggleCheckBox9] = useState(false);
  const [toggleCheckBox10, setToggleCheckBox10] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Does the affected person have any of the following symptoms? Please
        select all that apply.
      </Text>
      <Text> </Text>
      <View testID='neck_pain' style={styles.checkboxContainer}>
        <CheckBox testID='neck_pain' accessible={true} accessibilityLabel={'neck_pain'} label='neck_pain'
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(newValue) => setToggleCheckBox1(newValue)}
        />
        <Text> Neck pain or tenderness</Text>
      </View>
      <View testID='double_vision' style={styles.checkboxContainer}>
        <CheckBox testID='double_vision' accessible={true} accessibilityLabel={'double_vision'} label='double_vision'
          disabled={false}
          value={toggleCheckBox2}
          onValueChange={(newValue) => setToggleCheckBox2(newValue)}
        />
        <Text> Double vision</Text>
      </View>
      <View testID='weakness' style={styles.checkboxContainer}>
        <CheckBox testID='weakness' accessible={true} accessibilityLabel={'weakness'} label='weakness'
          disabled={false}
          value={toggleCheckBox3}
          onValueChange={(newValue) => setToggleCheckBox3(newValue)}
        />
        <Text> Weakness or tingling/burning in the arms or legs</Text>
      </View>
      <View testID='severe_headache' style={styles.checkboxContainer}>
        <CheckBox testID='severe_headache' accessible={true} accessibilityLabel={'severe_headache'} label='severe_headache'
          disabled={false}
          value={toggleCheckBox4}
          onValueChange={(newValue) => setToggleCheckBox4(newValue)}
        />
        <Text> Severe or increasing headache</Text>
      </View>
      <View testID='seizures' style={styles.checkboxContainer}>
        <CheckBox testID='seizures' accessible={true} accessibilityLabel={'seizures'} label='seizures'
          disabled={false}
          value={toggleCheckBox5}
          onValueChange={(newValue) => setToggleCheckBox5(newValue)}
        />
        <Text> Seizures or convulsions</Text>
      </View>
      <View testID='consciousness' style={styles.checkboxContainer}>
        <CheckBox testID='consciousness' accessible={true} accessibilityLabel={'consciousness'} label='consciousness'
          disabled={false}
          value={toggleCheckBox6}
          onValueChange={(newValue) => setToggleCheckBox6(newValue)}
        />
        <Text> Loss of consciousness</Text>
      </View>
      <View testID='deteriorating' style={styles.checkboxContainer}>
        <CheckBox testID='deteriorating' accessible={true} accessibilityLabel={'deteriorating'} label='deteriorating'
          disabled={false}
          value={toggleCheckBox7}
          onValueChange={(newValue) => setToggleCheckBox7(newValue)}
        />
        <Text> Deteriorating conscious state</Text>
      </View>
      <View testID='vomiting' style={styles.checkboxContainer}>
        <CheckBox testID='vomiting' accessible={true} accessibilityLabel={'vomiting'} label='vomiting'
          disabled={false}
          value={toggleCheckBox8}
          onValueChange={(newValue) => setToggleCheckBox8(newValue)}
        />
        <Text> Vomiting</Text>
      </View>
      <View testID='restlessness' style={styles.checkboxContainer}>
        <CheckBox testID='restlessness' accessible={true} accessibilityLabel={'restlessness'} label='restlessness'
          disabled={false}
          value={toggleCheckBox9}
          onValueChange={(newValue) => setToggleCheckBox9(newValue)}
        />
        <Text> Increasing restlessness</Text>
      </View>
      <View testID='agitation' style={styles.checkboxContainer}>
        <CheckBox testID='agitation' accessible={true} accessibilityLabel={'agitation'} label='agitation'
          disabled={false}
          value={toggleCheckBox10}
          onValueChange={(newValue) => setToggleCheckBox10(newValue)}
        />
        <Text> Agitation or combativeness</Text>
      </View>
      <Text>
        Do you have the first symptom(testing)?: {toggleCheckBox1 ? '✅' : '❌'}
      </Text>
      <Text>
        Do you have the second symptom(testing)?:{' '}
        {toggleCheckBox2 ? '✅' : '❌'}
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Injury Sus (IR5)')}
      >
        <Text style={styles.label}>Submit</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default CheckListQuestionScreen;
