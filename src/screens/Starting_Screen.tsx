import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {startingScreenStyles} from '../styles/styles';
import {RootStackParamList} from '../router/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Starting_Screen'>;

const Starting_Screen = ({navigation}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={startingScreenStyles.container}>

      <Text style={startingScreenStyles.title}>Password Manager</Text>

      <View style={startingScreenStyles.footer}>
        <Text style={startingScreenStyles.footerText}>Created By</Text>
        <Text style={startingScreenStyles.footerText}>Rishik Singha</Text>
      </View>
    </View>
  );
};

export default Starting_Screen;
