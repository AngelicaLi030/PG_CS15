import { Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  bottomButton: {
    elevation: 3,
    width: Dimensions.get('window').width/1.3,
    height: Dimensions.get('window').width/7.5,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: (Dimensions.get('window').height)/3.5,
    marginTop: (Dimensions.get('window').height)/300,
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width/0.99,
    height: Dimensions.get('window').height/1.27,
    resizeMode: 'cover',
  }
});