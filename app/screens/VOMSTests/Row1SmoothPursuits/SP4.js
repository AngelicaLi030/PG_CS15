import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground
} from 'react-native';
import uiStyle from '../../../components/uiStyle';

function SP4({ navigation }) {
  return (
    <SafeAreaView style={uiStyle.container}>
      <ImageBackground style={styles.image} 
          source = {require('../../../../assets/b3.png')}>
      <View style={uiStyle.container}>
        <Text style={styles.text}>
          Please hold the phone vertical at eye level, an arms length away.
          {'\n'} {'\n'}
          Ask the affected person to follow the circle while keeping their head
          still again.
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('VOMS Smooth Pursuits 5')}
          style={[styles.bottomButton, uiStyle.shadowProp]}
        >
          <Text style={uiStyle.buttonLabel}>Next</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomButton: {
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').width/7.5,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: (Dimensions.get('window').height)/3,
    marginTop: (Dimensions.get('window').height)/300,
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width/0.99,
    height: Dimensions.get('window').height/1.12,
    resizeMode: 'cover',
  },
  text: {
    color: '#003A67',
    fontWeight: '700',
    fontSize: Dimensions.get('window').width/20,
    lineHeight: Dimensions.get('window').width/15,
    letterSpacing: 0.3,
    marginHorizontal: Dimensions.get('window').width/10,
    marginVertical: Dimensions.get('window').width/15,
    marginTop: (Dimensions.get('window').height)/5,
    textAlign: 'center',
  },
});

export default SP4;
