import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const startingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
});

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  navigateBtn: {
    alignSelf:'center',
    padding: 10,
    margin:50,
  },
  inputContainer: {
    padding: 20,
    gap: '10',
  },
  inputField: {
    width: width * 0.8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 10,
    fontSize: 25,
  },
  inputPass: {
    position:'absolute',
    bottom:30,
    right:30,
  },
  saveBtn: {
    width: width * 0.8,
  },
  allTxt: {
    fontSize: 20,
    textAlign: 'center',
    padding:10,
  },
  whiteTxt:{
    color:'white',
  },
  whiteBg:{
    backgroundColor:'#baab6a',
  },
  darkTxt:{
    color:'black',
  },
  darkBg:{
    backgroundColor: '#efd9b4',
  },
});

export const passwordListStyles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    gap:20,
  },
  backBtn:{
    marginTop:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: '#efd9b4',
    gap:10,
    padding:5,
  },
  backBtnTxt:{
    fontSize:20,
  },
  headerTxt:{
    fontSize:30,
  },
  cardContainer:{
    width:width * 0.8,
    backgroundColor:'#A4B0BD',
  },
  card:{
    borderWidth:1,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
  },
  cardData:{
    display:'flex',
  },
  cardTxt:{
    fontSize:25,
  },
  cardIcon:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    gap:10,
  },
  whiteTxt:{
    color:'white',
  },
  whiteBg:{
    backgroundColor:'#baab6a',
  },
  darkTxt:{
    color:'black',
  },
  darkBg:{
    backgroundColor: '#efd9b4',
  },
});
