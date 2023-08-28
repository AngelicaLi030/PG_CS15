import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import uiStyle from '../../../styles/uiStyle';
import styles from '../../../styles/VOMSTestsStyles/Row1SmoothPursuits/SP6Response2Style';
import Slider from '@react-native-community/slider';
import { useContext } from 'react';
import {
  IncidentReportRepoContext,
  PrelimReportIdContext,
  AccountContext
} from '../../../components/GlobalContextProvider';

function SP6Response2({ navigation }) {
  const [reportId] = useContext(PrelimReportIdContext);
  const incidentRepoContext = useContext(IncidentReportRepoContext);
  const [account] = useContext(AccountContext);
  const [sliderOneValue, setSliderOneValue] = React.useState(0);
  const [sliderTwoValue, setSliderTwoValue] = React.useState(0);
  const [sliderThreeValue, setSliderThreeValue] = React.useState(0);
  const [sliderFourValue, setSliderFourValue] = React.useState(0);

  return (
    <SafeAreaView style={uiStyle.container}>
      <ScrollView>
        <Text style={uiStyle.text}>
          Does the affected person have any of these symptoms?
        </Text>
        <View style={[uiStyle.contentContainer]}>
          <View style={styles.sliders}>
            <View style={styles.sliderOne}>
              <Text style={uiStyle.text}>Headache:</Text>
              <Text style={[uiStyle.text]}>{sliderOneValue}</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderOneValue(val)}
            />
            <View style={styles.sliderOne}>
              <Text style={uiStyle.text}>Nausea: </Text>
              <Text style={[uiStyle.text]}>{sliderTwoValue}</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderTwoValue(val)}
            />
            <View style={styles.sliderOne}>
              <Text style={uiStyle.text}>Dizziness:</Text>
              <Text style={[uiStyle.text]}>{sliderThreeValue}</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderThreeValue(val)}
            />
            <View style={styles.sliderOne}>
              <Text style={uiStyle.text}>Fogginess:</Text>
              <Text style={[uiStyle.text]}>{sliderFourValue}</Text>
            </View>
            <Slider
              minimumValue={0}
              maximumValue={10}
              step={1}
              onValueChange={(val) => setSliderFourValue(val)}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            incidentRepoContext
              .createVOMSReport(
                'Smooth Pursuits Vertical',
                account.account_id,
                reportId,
                sliderOneValue,
                sliderTwoValue,
                sliderThreeValue,
                sliderFourValue,
              )
              .then((data) => {
                incidentRepoContext.getVOMS(data)
                                  .then((data)=> console.log(data));
              })
            navigation.navigate('VOMS Saccades 1');
          }}
          style={[styles.bottomButton, uiStyle.shadowProp]}
        >
          <Text style={uiStyle.buttonLabel}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SP6Response2;