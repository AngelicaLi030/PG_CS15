import * as React from 'react';
import {
  Text,
  Alert,
  View,
  ImageBackground,
  Dimensions,
  ScrollView,

} from 'react-native';
import {Svg, Rect, Text as SvgText} from 'react-native-svg';


import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  IncidentReportRepoContext,
  UserContext,
  UserRepoContext,
  IncidentIdContext
} from '../../components/GlobalContextProvider';
import { useContext, useState, useRef, useEffect } from 'react';
import uiStyle from '../../styles/uiStyle';
import styles from '../../styles/AllReportScreenStyle';
import { getData } from '../TempStorage';

function SymptomSummarization({ navigation }){
    const [data, setData] = useState([
            { date: '1', values: [7, 4, 3, 2] },
            { date: '2', values: [4, 2, 3, 3] },
            { date: '3', values: [1, 3, 1, 4] },
            { date: '4', values: [5, 4, 3, 4] },
            { date: '5', values: [6, 1, 4, 3] },
            { date: '6', values: [5, 4, 2, 4] },
            { date: '7', values: [8, 2, 3, 2] },
            { date: '8', values: [8, 2, 3, 2] },
            { date: '9', values: [8, 2, 3, 2] },
            { date: '10', values: [8, 2, 3, 2] },
            { date: '11', values: [8, 2, 3, 2] },
            { date: '12', values: [8, 2, 3, 2] },
            { date: '13', values: [8, 2, 3, 2] },
            { date: '14', values: [8, 2, 3, 2] },
            { date: '15', values: [8, 2, 3, 2] },
            { date: '16', values: [8, 2, 3, 2] },
            { date: '17', values: [8, 2, 3, 2] },
            { date: '18', values: [8, 2, 3, 2] },
            { date: '19', values: [8, 2, 3, 2] },
            { date: '20', values: [8, 2, 3, 2] },
    ]);
    const [storedData, setStoredData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [patientData,setPatientData] = useState(null);
    useEffect(() => {

      const fetchData = async () => {
      const patient_data = await getData('patient');
//      console.log(patient_data)
      setPatientData(patient_data)
      setStoredData(patient_data);
      };
      fetchData();
      console.log("patient")
      console.log(patientData)

      physical_len = patient_data["physicalSelectedSymptoms"].length;
      emotional_len = patient_data["emotionalSelectedSymptoms"].length;
      cognitive_len = patient_data["cognitiveSelectedSymptoms"].length;
      sleep_len = patient_data["sleepSelectedSymptoms"].length;
      const update_data = data.map((item) => {
        if (item.date === '20') {

          return {date:'20',values:[physical_len,cognitive_len,emotional_len,sleep_len]};
        }

        return item;
      });
//      console.log(data);
      setData(update_data)
      setLoading(false);
    }, []);
    const colors = ['#357AF6', '#5CC8BE', '#F7CB45','#AF52DE'];

    return(
        <SafeAreaView style={uiStyle.container}>
             <View style={styles.titlecontainer,{alignItems: 'left',marginTop:0}}>
                <View style={{backgroundColor:'#fff',borderRadius:30}}>
                <Text style={[styles.text,{marginTop:10,marginBottom:10,paddingLeft:10,paddingRight:10}]}>
                    Trends of changes in four aspects(Physical, Emotion, Memory, Sleep) in 20 days.
                </Text>
                </View>
             </View>
             <View style={{marginTop:Dimensions.get('window').height/20,backgroundColor:'#fff', height: Dimensions.get('window').height/2,width:Dimensions.get('window').width*0.9,borderRadius:30}}>
                {!loading &&(
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row', padding: 10,height: Dimensions.get('window').height/2.5 }} // 设置内容的方向为水平
                            >
                      <Svg height="500" width={data.length * 80}>
                        {data.map((item, index) => {
                                  let yOffset = 0;
                                  return  item.values.map((value, i) => {
                                    const barHeight = value * 15;
                                    const rect = (
                                      <Rect
                                        key={`${index}-${i}`}
                                        x={index * 25 + 20}
                                        y={300 - barHeight - yOffset}
                                        width="10"
                                        height={barHeight}
                                        fill={colors[i]}
                                      />
                                    );
                                    yOffset += barHeight;
                                    return rect;
                                  });
                                })}

                        {data.map((item, index) => (
                                  <SvgText
                                    key={`label-${index}`}
                                    x={index * 25 + 20}
                                    y={330}
                                    fontSize="20"
                                    fontWeight="bold"
                                    fill="#8C8383"
                                    textAnchor="middle"
                                    alignmentBaseline="middle"

                                  >
                                    {item.date}
                                  </SvgText>
                                ))}
                      </Svg>

                    </ScrollView>)}
                    {!loading &&(<View style={{justifyContent: 'center', alignItems: 'center',height:Dimensions.get('window').height/10,width:Dimensions.get('window').width*0.9}}>
                        <Text style={{fontSize:20,fontWeight:"bold",color:'#8C8383'}} >Day</Text>
                    </View>)}
             </View>
             <View>
                             <View style={{justifyContent: 'center', alignItems: 'center' }}>
                                 <TouchableOpacity
                                     style={[styles.bottomButton,  styles.shadowProp,{backgroundColor:'#15336D'}]}
                                     onPress={() => {
                                                     navigation.goBack();
                                     }}
                                 >
                                     <Text style={uiStyle.buttonLabel,{fontWeight:'bold',color:'#ffffff'}}
                                                         maxFontSizeMultiplier={1}>Back</Text>
                                 </TouchableOpacity>
                             </View>
                         </View>
        </SafeAreaView>
    );
}

export default SymptomSummarization;
