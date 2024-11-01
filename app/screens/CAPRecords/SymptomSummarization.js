import * as React from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Svg, Rect, Text as SvgText, Line } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import uiStyle from '../../styles/uiStyle';
import styles from '../../styles/AllReportScreenStyle';
import { getData } from '../TempStorage';

function SymptomSummarization({ navigation }) {
    const [detailData, setDetailData] = useState([
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy", "Problems concentrating", "Problem remembering"],
                                                        "emotionalSelectedSymptoms": ["Sadness", "Nervousness", "Irritability", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Sensitivity to light"],
                                                        "sleepSelectedSymptoms": ["Sleeping less than usual"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy", "Feeling slowed down"],
                                                        "emotionalSelectedSymptoms": ["Sadness", "Nervousness", "Irritability", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Numbness/ tingling", "Sensitivity to noise", "Vomiting", "Fatigue", "Nausea", "Dizziness"],
                                                        "sleepSelectedSymptoms": ["Sleeping more than usual", "Trouble falling asleep", "Sleeping less than usual", "Drowsiness"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problems concentrating"],
                                                        "emotionalSelectedSymptoms": ["Feeling more emotional than usual", "Sadness", "Irritability", "Nervousness"],
                                                        "physicalSelectedSymptoms": ["Vomiting", "Numbness/ tingling",  "Balance problems", "Headache/s","Dizziness", "Nausea"],
                                                        "sleepSelectedSymptoms": ["Drowsiness", "Trouble falling asleep", "Sleeping more than usual", "Sleeping less than usual"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Sensitivity to noise", "Fatigue", "Dizziness", "Sensitivity to light"],
                                                        "sleepSelectedSymptoms": ["Drowsiness", "Sleeping less than usual"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problem remembering", "Feeling slowed down"],
                                                        "emotionalSelectedSymptoms": ["Irritability"],
                                                        "physicalSelectedSymptoms": ["Headache/s", "Fatigue", "Sensitivity to noise"],
                                                        "sleepSelectedSymptoms": ["Sleeping less than usual", "Drowsiness"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problems concentrating", "Feeling slowed down", "Problem remembering"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Feeling more emotional than usual", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Fatigue", "Sensitivity to light", "Nausea"],
                                                        "sleepSelectedSymptoms": ["Trouble falling asleep"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling slowed down", "Problems concentrating", "Feeling mentally foggy"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Feeling more emotional than usual", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Vomiting", "Sensitivity to light", "Numbness/ tingling", "Sensitivity to noise",  "Fatigue", "Visual Problems"],
                                                        "sleepSelectedSymptoms": ["Sleeping less than usual", "Sleeping more than usual", "Drowsiness", "Trouble falling asleep"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problems concentrating"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Irritability", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Numbness/ tingling", "Balance problems", "Dizziness", "Nausea", "Headache/s", "Visual Problems", "Sensitivity to noise", "Fatigue"],
                                                        "sleepSelectedSymptoms": ["Trouble falling asleep", "Drowsiness", "Sleeping more than usual"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problem remembering"],
                                                        "emotionalSelectedSymptoms": ["Sadness", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Dizziness", "Sensitivity to light", "Headache/s", "Balance problems"],
                                                        "sleepSelectedSymptoms": ["Drowsiness"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy", "Problems concentrating"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Nausea", "Fatigue", "Sensitivity to light", "Dizziness"],
                                                        "sleepSelectedSymptoms": ["Trouble falling asleep"]
                                                      },
                                                     {
                                                        "cognitiveSelectedSymptoms": ["Problem remembering", "Feeling slowed down"],
                                                        "emotionalSelectedSymptoms": ["Irritability"],
                                                        "physicalSelectedSymptoms": ["Headache/s", "Fatigue", "Sensitivity to noise"],
                                                        "sleepSelectedSymptoms": ["Sleeping less than usual", "Drowsiness"]
                                                      },
                                                    {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy", "Feeling slowed down"],
                                                        "emotionalSelectedSymptoms": ["Sadness", "Nervousness", "Irritability", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Numbness/ tingling", "Sensitivity to noise", "Vomiting", "Fatigue", "Nausea", "Dizziness"],
                                                        "sleepSelectedSymptoms": ["Sleeping more than usual", "Trouble falling asleep", "Sleeping less than usual", "Drowsiness"]
                                                      },
                                                    {
                                                        "cognitiveSelectedSymptoms": ["Problems concentrating", "Feeling slowed down", "Problem remembering"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Feeling more emotional than usual", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Fatigue", "Sensitivity to light", "Nausea"],
                                                        "sleepSelectedSymptoms": ["Trouble falling asleep"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling slowed down", "Problems concentrating", "Feeling mentally foggy"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Feeling more emotional than usual", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Vomiting", "Sensitivity to light",  "Nausea", "Dizziness", "Headache/s", "Fatigue", "Visual Problems"],
                                                        "sleepSelectedSymptoms": ["Sleeping less than usual", "Sleeping more than usual", "Drowsiness", "Trouble falling asleep"]
                                                      },
                                                    {
                                                        "cognitiveSelectedSymptoms": ["Problems concentrating"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Irritability", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Numbness/ tingling", "Balance problems", "Dizziness", "Nausea", "Sensitivity to noise",  "Sensitivity to light", "Vomiting"],
                                                        "sleepSelectedSymptoms": ["Trouble falling asleep", "Drowsiness", "Sleeping more than usual"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problem remembering"],
                                                        "emotionalSelectedSymptoms": ["Sadness", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Dizziness", "Sensitivity to light", "Headache/s", "Balance problems"],
                                                        "sleepSelectedSymptoms": ["Drowsiness"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy", "Problems concentrating"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Nausea", "Fatigue", "Sensitivity to light", "Dizziness"],
                                                        "sleepSelectedSymptoms": ["Trouble falling asleep"]
                                                      },
                                                    {
                                                        "cognitiveSelectedSymptoms": ["Feeling mentally foggy", "Feeling slowed down"],
                                                        "emotionalSelectedSymptoms": ["Sadness", "Nervousness", "Irritability", "Feeling more emotional than usual"],
                                                        "physicalSelectedSymptoms": ["Numbness/ tingling", "Sensitivity to noise", "Vomiting", "Fatigue", "Nausea", "Dizziness"],
                                                        "sleepSelectedSymptoms": ["Sleeping more than usual", "Trouble falling asleep", "Sleeping less than usual", "Drowsiness"]
                                                      },
                                                      {
                                                        "cognitiveSelectedSymptoms": ["Problems concentrating"],
                                                        "emotionalSelectedSymptoms": ["Feeling more emotional than usual", "Sadness", "Irritability", "Nervousness"],
                                                        "physicalSelectedSymptoms": ["Vomiting", "Numbness/ tingling", "Sensitivity to noise", "Balance problems", "Headache/s", "Nausea"],
                                                        "sleepSelectedSymptoms": ["Drowsiness", "Trouble falling asleep", "Sleeping more than usual", "Sleeping less than usual"]
                                                      },
                                                     {
                                                        "cognitiveSelectedSymptoms": ["Feeling slowed down", "Problems concentrating", "Feeling mentally foggy"],
                                                        "emotionalSelectedSymptoms": ["Nervousness", "Feeling more emotional than usual", "Sadness"],
                                                        "physicalSelectedSymptoms": ["Vomiting", "Sensitivity to light","Sensitivity to noise", "Nausea",  "Fatigue", "Visual Problems"],
                                                        "sleepSelectedSymptoms": ["Sleeping less than usual", "Sleeping more than usual", "Drowsiness", "Trouble falling asleep"]
                                                      }
    ]);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const patient_data = await getData('patient');
            const updatedDetailedData = [...detailData];
            updatedDetailedData[updatedDetailedData.length - 1] = patient_data;
            setDetailData(updatedDetailedData);

            const transformedData = detailData.map((item, index) => ({
                date: (index + 1).toString(),
                values: [
                    item.physicalSelectedSymptoms.length,
                    item.cognitiveSelectedSymptoms.length,
                    item.emotionalSelectedSymptoms.length,
                    item.sleepSelectedSymptoms.length,
                ],
            }));
            setData(transformedData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const colors = ['#357AF6', '#5CC8BE', '#F7CB45', '#AF52DE'];

    if (loading) {
        return <SafeAreaView style={uiStyle.container}></SafeAreaView>;
    }

    return (
        <SafeAreaView style={uiStyle.container}>
            <View style={{ alignItems: 'left', marginTop: 0 }}>
                <View style={{ backgroundColor: '#fff', borderRadius: 30 }}>
                    <Text style={[styles.text, { marginTop: 10, marginBottom: 10, paddingLeft: 10, paddingRight: 10 }]}>
                        Trends of changes in four aspects (Physical, Emotion, Memory, Sleep) in 20 days.
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: Dimensions.get('window').height / 20, backgroundColor: '#fff', height: Dimensions.get('window').height / 1.8, width: Dimensions.get('window').width * 0.9, borderRadius: 30 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', padding: 10, height: Dimensions.get('window').height / 2 }}>
                    <Svg height="400" width={data.length * 80 + 50}>
                        {/* y轴 */}
                        <Line x1="40" y1="30" x2="40" y2="300" stroke="black" strokeWidth="2" />
                        {/* x轴 */}
                        <Line x1="40" y1="300" x2={data.length * 80 + 50} y2="300" stroke="black" strokeWidth="2" />

                        {/* 柱状图 */}
                        {data.map((item, index) => {
                            let yOffset = 0;
                            return item.values.map((value, i) => {
                                const barHeight = value * 15;
                                const rect = (
                                    <Rect
                                        key={`${index}-${i}`}
                                        x={index * 25 + 50}
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

                        {/* x轴标签（日期） */}
                        {data.map((item, index) => (
                            <SvgText
                                key={`label-${index}`}
                                x={index * 25 + 50}
                                y={320}
                                fontSize="12"
                                fill="#8C8383"
                                textAnchor="middle"
                            >
                                {item.date}
                            </SvgText>
                        ))}

                        {/* y轴标签（数量刻度） */}
                        {[0, 2, 4, 6, 8, 10, 12, 14, 16].map(value => (
                            <SvgText
                                key={`y-label-${value}`}
                                x="30"
                                y={300 - value * 15}
                                fontSize="12"
                                fill="#8C8383"
                                textAnchor="end"
                            >
                                {value}
                            </SvgText>
                        ))}
                    </Svg>
                </ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: Dimensions.get('window').height / 10, width: Dimensions.get('window').width * 0.9 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#8C8383' }}>Day</Text>
                </View>
            </View>

            {/* 图例部分 */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 15, height: 15, backgroundColor: '#357AF6', marginRight: 5 }} />
                    <Text>Physical</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 15, height: 15, backgroundColor: '#F7CB45', marginRight: 5 }} />
                    <Text>Emotion</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 15, height: 15, backgroundColor: '#5CC8BE', marginRight: 5 }} />
                    <Text>Memory</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 15, height: 15, backgroundColor: '#AF52DE', marginRight: 5 }} />
                    <Text>Sleep</Text>
                </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style={[styles.bottomButton, styles.shadowProp, { backgroundColor: '#15336D' }]}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }} maxFontSizeMultiplier={1}>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SymptomSummarization;
