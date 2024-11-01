import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    headingText: {
      color: '#003A67',
      fontWeight: 'bold',
      fontSize: Dimensions.get('window').width/14,
      letterSpacing: 0.3,
      marginHorizontal: Dimensions.get('window').width/10,
      marginVertical: Dimensions.get('window').width/20,
      textAlign: 'center',
    },
    subheadingText: {
      color: '#003A67',
      fontWeight: 'bold',
      fontSize: Dimensions.get('window').width/23,
      letterSpacing: 0.3,
      marginHorizontal: Dimensions.get('window').width/50,
      marginVertical: Dimensions.get('window').width/250,
      textAlign: 'center',
    },
    bottomButton: {
      elevation: 3,
      width: Dimensions.get('window').width/1.3,
      height: Dimensions.get('window').width/7.5,
      padding: 10,
      borderRadius: 30,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: (Dimensions.get('window').height)/50,
      marginBottom: (Dimensions.get('window').height)/50,
      alignSelf: 'center',
    }
  });