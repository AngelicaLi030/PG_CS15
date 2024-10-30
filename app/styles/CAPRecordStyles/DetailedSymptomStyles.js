import { StyleSheet,Dimensions, } from 'react-native';

const styles = StyleSheet.create({
  outsideContainer:{
    padding:10,
  },
  smallCell:{
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  bigCell:{
    width: '70%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  container: {
    flexGrow: 1,
//    justifyContent: 'center',
//        padding: 16,
//        backgroundColor: '#f0f0f0',
  },
  row: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width:'90%',
      backgroundColor:'#ffffff',
//      justifyContent: 'space-between',
  },
  containerTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {

    height:Dimensions.get('window').height/20,
    marginVertical: 8,
    backgroundColor: '#87ceeb',
    padding: 10,
//    borderRadius: 8,
//    alignItems: 'center',
    elevation:3,
  },
  unselectedButton: {
    width: Dimensions.get('window').width/8,
    backgroundColor: '#ADD8E6', // 浅蓝色
  },
  selectedButton: {
    backgroundColor: '#FFB6C1', // 浅粉色
  },
  buttonText: {
    fontSize: 8,
    fontWeight:'bold',
    color: '#000000',
  },
  selectedText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
   hiddenText: {
      color: 'transparent',
    },
});
export default styles;