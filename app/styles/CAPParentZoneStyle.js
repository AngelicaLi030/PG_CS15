import { StyleSheet, Dimensions } from 'react-native';

// This file is for the UI of the test & reports.
// UI for disclaimer page, home page, account management are in their individual file
const background = '#9AD3FF';
const test_background = '#9AD3FF';

export default StyleSheet.create({
    bottomContain:{
        alignItems:'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/15
    },
    bottomFlexContain:{
        flexDirection:'row',
        justifyContent: 'center',
        gap:30,
        width: Dimensions.get('window').width
    },
    bottomButton:{
        backgroundColor:'#fff',
        width: Dimensions.get('window').width/3
    },
    buttonLabel:{
         flex: 1,
         color:'#000000'
    }

});
