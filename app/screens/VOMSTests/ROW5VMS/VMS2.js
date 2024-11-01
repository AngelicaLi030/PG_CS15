import * as React from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import uiStyle from '../../../styles/uiStyle';
import styles from '../../../styles/VOMSTestsStyles/ROW5VMS/VMS2Style';
import { Audio } from 'expo-av';
import { useEffect } from 'react';

function VMS2({ navigation }) {
  const [sound, setSound] = React.useState();
  // middle, right, middle, left x 5 repetitions
  const [repetition, setRepetition] = React.useState(21);
  const [intervalId, setIntervalId] = React.useState(null);

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    async function playSound() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../../assets/beep.mp3'),
      );
      setSound(sound);
      await sound.playAsync();
      setRepetition(repetition - 1);
    }

    if (repetition < 0) {
      return;
    }

    const id = setInterval(function () {
      playSound().then();
      console.log(repetition);
    }, 1200);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [repetition]);

  return (
    <SafeAreaView style={uiStyle.container}>
      <View style={styles.circleContainer}>
        <View style={uiStyle.vomsCircle} />
      </View>
      <TouchableOpacity
        onPress={() => {
          window.clearInterval(intervalId);
          navigation.navigate('VOMS VMS 3 Response 8');
        }}
        style={[styles.bottomButton, uiStyle.shadowProp]}
      >
        <Text style={uiStyle.buttonLabel}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


export default VMS2;
