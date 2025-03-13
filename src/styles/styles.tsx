import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const startingScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A3D62',
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
    backgroundColor: '#0A3D62',
    padding: 20,
  },
});

export const passwordListStyles = StyleSheet.create({});
