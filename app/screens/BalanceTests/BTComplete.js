import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  ImageBackground,
  ProgressBarAndroid
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useContext } from 'react';
import uiStyle from '../../styles/uiStyle';
import styles from '../../styles/BalanceTestsStyles/BTCompleteStyle';
import ProgressBar from '../../styles/ProgressBar';

import preventBackAction from '../../components/preventBackAction';

function BTComplete({ navigation }) {

  preventBackAction();

  return (
    <SafeAreaView style={uiStyle.container}>
      <ImageBackground style={styles.image}
          source = {require('../../../assets/b3.png')}>
        <ProgressBar percentage={50} />

        <View style={{ alignItems: 'center' }}>
          <Text
            style={[uiStyle.titleText, uiStyle.titleTextBox]}
            adjustsFontSizeToFit={true}
            numberOfLines={1}
          >
            Balance Test Complete
          </Text>
        </View>

        <View style={uiStyle.infoTextContainer}>
        <ScrollView style={uiStyle.stackedTextBox}>
          <Text style={uiStyle.stackedText}>
            You have successfully completed the first balance test. Press next
            to continue to the second balance test.
          </Text>
        </ScrollView>
        </View>

        <View style={uiStyle.bottomContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Balance Test 4');
            }}
            style={[uiStyle.bottomButton, uiStyle.shadowProp]}
          >
            <Text style={uiStyle.buttonLabel}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default BTComplete;
