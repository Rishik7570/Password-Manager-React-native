import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useContext } from 'react';
import { homeStyles } from '../styles/styles';
import { RootStackParamList } from '../router/Router';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Store } from '../store/Store';

type Props = NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:Props) => {

  const {user,setUser,password,dataIn,isPassOK,handlePassword} = useContext(Store);

  return (
    <View style={homeStyles.container}>
      <TextInput placeholder="Username" value={user} onChangeText={(e)=>setUser(e)}/>
      <TextInput placeholder="Password" value={password} onChangeText={(e)=>handlePassword(e)}/>
      <TouchableOpacity disabled={!isPassOK} onPress={()=>dataIn({userData:user,passwordData:password})}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
