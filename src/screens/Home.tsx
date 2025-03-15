import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useContext} from 'react';
import {homeStyles} from '../styles/styles';
import {RootStackParamList} from '../router/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Store} from '../store/Store';
import Icons from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const {user, setUser, password, setPassword, dataIn, checkPassword, data} =
    useContext(Store);
  const isDarkMode = useColorScheme();

  return (
        <KeyboardAwareScrollView contentContainerStyle={homeStyles.container}>
          <View style={homeStyles.navigateBtn}>
            {data.length > 0 ? (
              <TouchableOpacity style={isDarkMode === 'dark' ? homeStyles.whiteBg : homeStyles.darkBg}
                onPress={() => navigation.navigate('PasswordList')}>
                <Text style={[homeStyles.allTxt,isDarkMode === 'dark' ? homeStyles.whiteTxt : homeStyles.darkTxt]}>Check all passwords</Text>
              </TouchableOpacity>
            ) : (
              <Text style={[homeStyles.allTxt,isDarkMode === 'dark' ? homeStyles.whiteTxt : homeStyles.darkTxt]}>No data found</Text>
            )}
          </View>
          <View style={homeStyles.inputContainer}>
            <TextInput
              placeholder="Username"
              value={user}
              onChangeText={e => setUser(e)}
              style={homeStyles.inputField}
              keyboardType="default"
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              value={password}
              onChangeText={e => {
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
            style={[homeStyles.saveBtn,isDarkMode === 'dark' ? homeStyles.whiteBg : homeStyles.darkBg]}
            onPress={() => dataIn({userData: user, passwordData: password})}>
            <Text style={[homeStyles.allTxt,isDarkMode === 'dark' ? homeStyles.whiteTxt : homeStyles.darkTxt]}>Save</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
  );
};

export default Home;
