import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const VaultSystemApi=async(params,VaultResponse)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/currentcryptovalue', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
             cryptoType:params,
             userId:await AsyncStorage.getItem('UserId') 


        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        VaultResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}

export const CryptoInvestment=async(VaultResponse)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/fetch/user/cryptoinvestmnet', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
            email:await AsyncStorage.getItem('email'),
        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        VaultResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
export const CryptoTypeInvestment=async(Type,VaultResponse)=>
{
    fetch('http://192.168.2.78:9090/API/bluewallet/fetch/user/investmentinfoforcrypto', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
            email:await AsyncStorage.getItem('email'),
            typeOfInvestment:Type
        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        VaultResponse(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}
