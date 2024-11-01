import * as React from 'react';
import {
  Text,
  Alert,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';
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
import symptomsStyles from '../../styles/CAPRecordStyles/DetailedSymptomStyles';
import tbcStyles from '../../styles/TbcStyle'
import { getData } from '../TempStorage';
const TbcItem = ({ title, tags }) => {
  return (
    <View style={tbcStyles.item}>
      <Text style={tbcStyles.itemTilte}>{title}</Text>
      <View style={tbcStyles.itemContent}>

        {tags.map((tag, index) => (
          <View style={tbcStyles.itemTag} key={index}>
            <Text style={tbcStyles.itemTagTitle}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
function DetailedSymptomCharts({ navigation }){
//    const data = {"cognitiveSelectedSymptoms": ["Problems concentrating"], "emotionalSelectedSymptoms": ["Nervousness", "Sadness"], "physicalSelectedSymptoms": ["Headache/s"], "sleepSelectedSymptoms": ["Drowsiness", "Sleeping more than usual", "Sleeping less than usual", "Trouble falling asleep"]};
    const [data, setData] = useState([
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


    const n = 20;
    const buttons = Array.from({ length: n }, (_, index) => index);
    const [displayData, setDisplayData] = useState(data[0]);
    const [mainContentIsVisible, setMainContentIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const selectedDateTail = null;
    const handleButtonPress = (index) => {
        setMainContentIsVisible(true);
//        mainContentIsVisible=False;
        setSelectedIndex(index);
        setDisplayData(data[index])
     };
    const getSuffix = (index) => {switch (index) {
        case 0:
            return 'st';
        case 1:
            return 'nd';
        case 2:
            return 'rd';
        default:
            return 'th';
    }};
    const [selectedCategory, setSelectedCategory] = useState(null);
//    const categories = ['Physical', 'Memory', 'Sleep', 'Emotion'];
//    const symptomList =[['Headache/s', 'Nausea', 'Vomiting', 'Tired','Vision problems','Dizziness or balance problems','Tingling feeling/ numbness','Bothered by light/ noise'],
//        ['Concentrating trouble','Remembering trouble','Thinking difficult','Feel slowed down','Hazy, foggy/ groggy'],
//        ['Irritability','Nervousness','Sadness','Feeling more emotional'],
//        ['Drowsiness','Trouble fall asleep','Sleep more than usual','Sleep less than usual']
//    ];
//    const physicalCategories = ['Headache/s', 'Nausea', 'Vomiting', 'Tired','Vision problems','Dizziness or balance problems','Tingling feeling/ numbness','Bothered by light/ noise'];
//    const memoryCategories = ['Concentrating trouble','Remembering trouble','Thinking difficult','Feel slowed down','Hazy, foggy/ groggy'];
//    const sleepCategories = ['Irritability','Nervousness','Sadness','Feeling more emotional'];
//    const emotionCategories = ['Drowsiness','Trouble fall asleep','Sleep more than usual','Sleep less than usual'];
    const [selectedButtonName, setSelectedButtonName] = useState('');
    const switchButtonText = (outside_index,inside_index,button)=>{
        setSelectedCategory(button);
        setSelectedButtonName(button);

    }
    useEffect(() => {
        const fetchData = async () => {
        const patient_data = await getData('patient');
        //      console.log(patient_data)
        const updatedData = [...data];
        updatedData[updatedData.length - 1] = patient_data;
        setData(updatedData)
        };
        fetchData();


//        console.log(data)
    }, []);
    return(
        <SafeAreaView style={uiStyle.container}>
            <View style={styles.titlecontainer,{alignItems: 'left',marginTop:0}}>
                <Text style={[styles.text,{marginTop:10,marginBottom:10}]}>
                  Choose day you want to see
                </Text>
                <View style={{ height: Dimensions.get('window').height/14,}}>
                <View style={{flex:1}}>
                    <ScrollView
                            horizontal={true}
                            contentContainerStyle={{ flexDirection: 'row', backgroundColor:'#DFEFF8', padding: 10,height: Dimensions.get('window').height/15 }} // 设置内容的方向为水平
                            showsHorizontalScrollIndicator={false} // 隐藏滚动条
                          >
                        {buttons.map((button, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[{
                          backgroundColor: '#fff',
                          padding: 10,
                          marginBottom: 10,
                          marginLeft:10,
                          borderRadius: 30,
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: Dimensions.get('window').width/6,
                          height: Dimensions.get('window').height/20,

                          }]}
                          onPress={() => handleButtonPress(index)}
                        >
                          <Text style={{fontWeight:'bold',color:'#000000'}}>Day {index + 1}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                </View>
                </View>
            </View>
            {!mainContentIsVisible &&(<View style={{marginTop:10,backgroundColor:'#DFEFF8',height:Dimensions.get('window').height*0.5,width:Dimensions.get('window').width,borderRadius: 30}}>
                <View style={styles.imagecontainer,{justifyContent: 'center',
                                                       alignItems: 'center',marginTop:Dimensions.get('window').height*0.1}}>
                    <ImageBackground source = {require('../../../assets/recordsHome.png')} style={styles.image,{width: Dimensions.get('window').width/1.8,
                                                                                                                       height: Dimensions.get('window').width/1.8,}}>
                    </ImageBackground>

                </View>
                 <View style={styles.titlecontainer,{backgroundColor:'#DFEFF8'}}>
                        <Text style={styles.text}>
                            I will show your charts here.
                    </Text>
                 </View>
                </View>)
            }
            {
                mainContentIsVisible &&(<View style={{marginTop:10,backgroundColor:'#fff',height:Dimensions.get('window').height*0.6,width:Dimensions.get('window').width,borderRadius: 30}}>
                    <View style={{justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.bottomButton,styles.shadowProp,{backgroundColor:'#FDFDCC',width:Dimensions.get('window').width*0.8,borderRadius:30,marginTop:10,elevation:5}}>
                        <Text style={uiStyle.buttonLabel}>
                            Symptom On The {selectedIndex+1}{getSuffix(selectedIndex)} Day
                        </Text>
                    </View>

                    </View>
                    <View style={tbcStyles.container,{padding:10,justifyContent: 'center',alignItems: 'center',height:Dimensions.get('window').height*0.55}}>
                        <View style={tbcStyles.card}>

                                {/* {data.map((d) => (
                                  <TbcItem key={d.title} title={d.title} tags={d.tags} />
                                ))} */}
                                {Object.keys(displayData).map((key) => (
                                  <TbcItem key={key} title={key} tags={displayData[key]} />
                                ))}
                              </View>
                    </View>

                </View>)
            }
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


export default DetailedSymptomCharts;
