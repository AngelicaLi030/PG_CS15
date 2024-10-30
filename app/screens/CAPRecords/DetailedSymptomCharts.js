import * as React from 'react';
import {
  Text,
  Alert,
  View,
  ImageBackground,
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

function DetailedSymptomCharts({ navigation }){
    const n = 20;
    const buttons = Array.from({ length: n }, (_, index) => index);

    const [mainContentIsVisible, setMainContentIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const selectedDateTail = null;
    const handleButtonPress = (index) => {
        setMainContentIsVisible(true);
//        mainContentIsVisible=False;
        setSelectedIndex(index);

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
    const categories = ['Physical', 'Memory', 'Sleep', 'Emotion'];
    const symptomList =[['Headache/s', 'Nausea', 'Vomiting', 'Tired','Vision problems','Dizziness or balance problems','Tingling feeling/ numbness','Bothered by light/ noise'],
        ['Concentrating trouble','Remembering trouble','Thinking difficult','Feel slowed down','Hazy, foggy/ groggy'],
        ['Irritability','Nervousness','Sadness','Feeling more emotional'],
        ['Drowsiness','Trouble fall asleep','Sleep more than usual','Sleep less than usual']
    ];
    const physicalCategories = ['Headache/s', 'Nausea', 'Vomiting', 'Tired','Vision problems','Dizziness or balance problems','Tingling feeling/ numbness','Bothered by light/ noise'];
    const memoryCategories = ['Concentrating trouble','Remembering trouble','Thinking difficult','Feel slowed down','Hazy, foggy/ groggy'];
    const sleepCategories = ['Irritability','Nervousness','Sadness','Feeling more emotional'];
    const emotionCategories = ['Drowsiness','Trouble fall asleep','Sleep more than usual','Sleep less than usual'];
    const [selectedButtonName, setSelectedButtonName] = useState('');
    const switchButtonText = (outside_index,inside_index,button)=>{
        setSelectedCategory(button);
        setSelectedButtonName(button);

    }

    return(
        <SafeAreaView style={uiStyle.container}>
            <View style={styles.titlecontainer,{alignItems: 'left',marginTop:0}}>
                <Text style={[styles.text,{marginTop:10,marginBottom:10}]}>
                  Choose day you want to see
                </Text>
                <View style={{ height: Dimensions.get('window').height/14,}}>
                <View style={{flex:1}}>
                    <ScrollView
                            horizontal={true} // 设置 ScrollView 为水平滚动
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
                <View style={styles.imagecontainer,{justifyContent: 'center', // 垂直居中
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
                    <View style={{height:Dimensions.get('window').height*0.55}}>
                        <ScrollView contentContainerStyle={symptomsStyles.outsideContainer}>
                            {categories.map((item, index) => (
                            <View key={item} style={[symptomsStyles.row]}>
                                <View style={[symptomsStyles.smallCell]}>
                                    <Text style={symptomsStyles.containerTitle} > {item}</Text>
                                </View>
                                <View style={[symptomsStyles.bigCell,{backgroundColor:'#fff'}]}>

                                        <ScrollView contentContainerStyle={[symptomsStyles.container]}>
                                            <View style={[symptomsStyles.grid]}>
                                                {symptomList[index].map((inside_category, inside_index) => (
                                                    <TouchableOpacity
                                                        key={inside_category}
                                                        style={[
                                                            symptomsStyles.button,
                                                            selectedCategory === inside_category ? symptomsStyles.selectedButton : symptomsStyles.unselectedButton,
                                                            ]}
                                                        onPress={() =>switchButtonText(index,inside_index,inside_category)}
                                                    >

                                                        <Text style={selectedCategory === inside_category?symptomsStyles.buttonText:symptomsStyles.hiddenText}>{inside_category}</Text>
                                                    </TouchableOpacity>
                                                ))}

                                            </View>
                                        </ScrollView>
                                </View>
                            </View>
                            ))}
                        </ScrollView>

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
