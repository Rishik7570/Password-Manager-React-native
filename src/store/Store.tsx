import { createContext, ReactNode, useEffect, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import Snackbar from 'react-native-snackbar';


type StoreProviderProps = {
    children:ReactNode
}

type StoreData = {
    user: string,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    data: arrayData[],
    setData: React.Dispatch<React.SetStateAction<arrayData[]>>,
    dataIn: (newData: arrayData) => void,
    removeData: (userDataToRemove: string) => void,
    checkPassword: () => boolean,
}

type arrayData = {
    userData:string,
    passwordData:string,
}

type dataParsedType = {
    data:arrayData[],
}

export const Store = createContext<StoreData>({
    user:'',
    setUser:()=>{},
    password:'',
    setPassword:()=>{},
    data:[],
    setData:()=>{},
    dataIn:()=>{},
    removeData:()=>{},
    checkPassword: () => false,
});


const StoreProvider = (props:StoreProviderProps) => {

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [data,setData] = useState<arrayData[]>([]);

    //Saving data to Encrypted Storage
    const saveToStorage = async(updatedData:arrayData[]) => {
        try {
            await EncryptedStorage.setItem(
                'user_data',
                JSON.stringify({data:updatedData})
            );
            Snackbar.show({
                text:'Saved Successfully',
            });
        } catch (error) {
            Snackbar.show({
                text:'Error saving data' + String(error),
            });
        }
    };

    //Loading data from Encrypted Storage
    const loadFromStorage = async() => {
        try {
            const storedData = await EncryptedStorage.getItem('user_data');
            if(storedData){
                const parsedData = JSON.parse(storedData) as dataParsedType;
                if(parsedData.data){
                    setData(parsedData.data);
                }
            }
        } catch (error) {
            Snackbar.show({
                text:'Error loading data' + String(error),
            });
        }
    };

    //Checking if password meets our requirements
    const checkPassword = () => {
        return (
            password.length > 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password)
        );
    };

    //Getting the input of the user and saving it to Encrypted Storage
    const dataIn = (newData:arrayData) => {
        const isValid = checkPassword();
        if(isValid){
            setData((prev)=>{
                const updatedData = [...prev,newData];
                saveToStorage(updatedData);
                return updatedData;
            });
            setUser('');
            setPassword('');
        }
        else{
            Snackbar.show({
                numberOfLines:2,
                text:'Password must be of minimum 8 letters & contain uppercase,lowercase,numbers and special characters',
            });
        }
    };

    //Deleting data and updating the Encrypted Storage
    const removeData = (userDataToRemove: string) => {
        setData((prevData) => {
            const updatedData = prevData.filter(item => item.userData !== userDataToRemove);
            saveToStorage(updatedData);
            return updatedData;
        });
        Snackbar.show({ text: 'Deleted Successfully' });
    };

    useEffect(()=>{
        loadFromStorage();
    },[]);

    const value = {
        user,setUser,password,setPassword,data,setData,
        dataIn,removeData,checkPassword,
    };

    return(
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    );
};

export default StoreProvider;
