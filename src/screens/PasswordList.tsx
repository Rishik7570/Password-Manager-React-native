import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useContext, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../router/Router';
import {passwordListStyles} from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Store} from '../store/Store';
import Clipboard from '@react-native-clipboard/clipboard';
import Snackbar from 'react-native-snackbar';

type Props = NativeStackScreenProps<RootStackParamList, 'PasswordList'>;

const PasswordList = ({navigation}: Props) => {
  const {data, removeData} = useContext(Store);
  const [isMasked, setIsMasked] = useState<{[key:string]:boolean}>({});

  const copyToClipboard = (e:string) => {
    Clipboard.setString(e);
    Snackbar.show({
      text:'Copied!',
      textColor:'green',
    });
  };

  const toggleMask = (key: string) => {
    setIsMasked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={passwordListStyles.container}>
      <TouchableOpacity
        style={passwordListStyles.backBtn}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-circle-o-left" size={30} />
        <Text style={passwordListStyles.backBtnTxt}>Back</Text>
      </TouchableOpacity>
      <Text style={passwordListStyles.headerTxt}>List of passwords :</Text>
      <FlatList
        style={passwordListStyles.cardContainer}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item}) => (
          <View style={passwordListStyles.card}>
            <View style={passwordListStyles.cardData}>
              <View style={passwordListStyles.cardIcon}>
                <Text style={passwordListStyles.cardTxt}>{item.userData}</Text>
                <Icon name="copy" size={25} onPress={()=>copyToClipboard(item.userData)}/>
              </View>
              <View style={passwordListStyles.cardIcon}>
                <Text style={passwordListStyles.cardTxt}>
                  {isMasked[item.userData]
                    ? item.passwordData
                    : '*'.repeat(item.passwordData.length)}
                </Text>
                <Icon
                  name={isMasked[item.userData] ? 'eye-slash' : 'eye'}
                  size={25}
                  onPress={() => toggleMask(item.userData)}
                />
                <Icon name="copy" size={25} onPress={()=>copyToClipboard(item.passwordData)}/>
              </View>
            </View>
            <Icon
              name="trash"
              size={30}
              color={'red'}
              onPress={() => removeData(item.userData)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default PasswordList;
