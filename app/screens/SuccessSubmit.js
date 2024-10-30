import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image
} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/NextStepsScreenStyle';
import parent_styles from '../styles/CAPParentStyle';
import zone_styles from '../styles/CAPParentZoneStyle';

function SuccessSubmit({ navigation }) {
    return (
        <SafeAreaView style={parent_styles.container}>
            <View style={[parent_styles.container]}>
                <View style={[parent_styles.infoTextContainer,parent_styles.stackedTextBox,{height: Dimensions.get('window').height/2.5,width: Dimensions.get('window').width/1.5,backgroundColor:'#fff'}]}>
                    <Image
                          style={{ width: 200, height: 200 ,marginVertical:10}}
                          source={require('../../assets/Wechat426.jpg')}
                    />
                    <Text style={{fontWeight:'bold',fontSize:25,marginVertical:10}}>
                        Woo hoo!!
                    </Text>
                    <Text style={{color:'#696262',fontSize:15,marginVertical:15,marginHorizontal: 30}}>
                        Congrats! Daily symptoms have been successfully recorded!
                    </Text>
                </View>
                <View style={{paddingTop:100}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Concussion Action Plan')}
                        style={[styles.bottomButton, parent_styles.shadowProp]}
                    >
                        <Text style={[styles.buttonLabel]}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SuccessSubmit;