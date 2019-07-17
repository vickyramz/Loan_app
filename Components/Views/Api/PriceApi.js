import Url from './CommonApi'
import{AsyncStorage} from 'react-native'
export const PriceList=async(PriceListdata)=>
{
    fetch(Url+'currentcryptovalueforuser', {  
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':'bearer '+await AsyncStorage.getItem('AccessToken')
        },
        body: JSON.stringify({
             
             userId:await AsyncStorage.getItem('UserId') 

        })
      }) .then((res)=> {
        return res.json();
       })
       .then((resJson)=>{
        PriceListdata(resJson)
       
        return resJson;
       })
       .catch((error) => {
        console.error(error);
    });
}