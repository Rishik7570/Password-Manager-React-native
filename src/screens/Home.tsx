import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {homeStyles} from '../styles/styles';
import {RootStackParamList} from '../router/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Store} from '../store/Store';
import Icons from 'react-native-vector-icons/FontAwesome';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {user, setUser, password, setPassword, dataIn, checkPassword, data} =
    useContext(Store);

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.navigateBtn}>
        {data.length > 0 ? (
          <TouchableOpacity onPress={() => navigation.navigate('PasswordList')}>
            <Text style={homeStyles.allTxt}>Check all passwords</Text>
          </TouchableOpacity>
        ) : (
          <Text style={homeStyles.allTxt}>No data found</Text>
        )}
      </View>
      <View style={homeStyles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={user}
          onChangeText={(e) => setUser(e)}
          style={homeStyles.inputField}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={(e) => {
            setPassword(e);
            checkPassword();
          }}
          style={homeStyles.inputField}
        />
        <Icons
          style={homeStyles.inputPass}
          name={checkPassword() ? 'check-circle' : 'exclamation-circle'}
          size={35}
          color={checkPassword() ? 'green' : 'red'}
        />
      </View>
      <TouchableOpacity
        style={homeStyles.saveBtn}
        onPress={() => dataIn({userData: user, passwordData: password})}>
        <Text style={homeStyles.allTxt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
