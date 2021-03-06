
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ExchangeList,ExchangeRequest} from '../Api/ExchangeRequest'
import {ResponseSuccessStatus,InvalidResponse,DataUndefined,InvalidToken,TokenExpired} from './Constant'
import { Alert, LayoutAnimation,TouchableHighlight, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image,AsyncStorage } from 'react-native';

let datasource=[1]
export default class ExchangeMenu_Expandable extends Component {

    constructor() {
  
      super();
    
      this.state = {
        Updation:false,
        layout_Height: 0,
        userIdLogin:''
  
      }
    }
  
    componentWillReceiveProps(nextProps) {
      
      if(this.props.item!=nextProps)
      {
        this.setState(() => {
          return {
            Updation: true
          }
        });
      }
      if (nextProps.item.expanded) {
        this.setState(() => {
          return {
            layout_Height: null
          }
        });
      }
      else {
        this.setState(() => {
          return {
            layout_Height: 0
          }
        });
      }
    }

   

   
  
    shouldComponentUpdate(nextProps, nextState) {
       if(this.state.Updation)
      {
        return true;
      }
      if (this.state.layout_Height !== nextState.layout_Height ) {
        return true;
      }
      return false;
    }
    render() {
      var ExchangeCoin=this.props.item.exchangeType!=null?this.props.item.exchangeType.split('_', 1):null
     
        var icon = (this.props.item.status==0)
        ? require('../assets/exchange.png')
        : require('../assets/greenD.png');
        var status=(this.props.item.status===0)?'Exchanged':'Exchange'
        let GetAmount;
    if(this.props.item.exchangeType==='ETH_BTC_ADMIN' || this.props.item.exchangeType==='ETH_BTC_USER'){
      GetAmount='BTC'
    }
    else if(this.props.item.exchangeType==='BTC_ETH_ADMIN'  || this.props.item.exchangeType==='BTC_ETH_USER'){
      GetAmount='ETH'
    }
    else if(this.props.item.exchangeType==='ETH_BWN_ADMIN'){
      GetAmount='BWN'
    }
    else if(this.props.item.exchangeType==='BTC_BWN_ADMIN'){
      GetAmount='BWN'
    }
   
      return (
        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} >
        <View elevation={5} style={{shadowOffset: { width: 10, height: 10 }}}>
          
           
        <LinearGradient
    colors={['#4262B5', '#3A549B', '#314279', '#2C3765', '#2A335E']} style={{marginLeft:30,marginRight:30,marginBottom:20,height:100, shadowOffset: { width: 10, height: 10 },
       borderWidth:0.4,borderColor:'#7894f8',justifyContent:'center',
        borderRadius:20}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20,}}>
    <View style={{flexDirection:'row'}}>
      <View style={{
     justifyContent:'center',alignItems:"center"}} >
          <Image  style={{width: 40, height: 40}}  source={icon} ></Image>  
    

          </View>
        
          <View style={{marginLeft:30,justifyContent:
        'space-around'}}>
        <View style={{paddingBottom:10,width:100}}>
        <Text numberOfLines={1} style={{flexWrap: 'wrap', marginRight:20,color:(this.props.item.status==1)?'#fff':'#fff',fontFamily:"Exo2-Bold",}}>{this.props.item.userName}</Text>
        </View>
    <View>
    <Text  style={{marginRight:20,color:'#5496FF',fontFamily:'Exo2-Regular',}}>{this.props.item.date1}</Text> 
    </View>
        
     </View>
      </View>
      <View>
      <View style={{justifyContent:'space-between',paddingBottom:10}}>    
     
     <Text  style={{marginRight:20,color:'#fff',fontFamily:'Exo2-Regular'}}>{this.props.item.totalAmount}</Text>    
    </View>
    <View style={{justifyContent:'space-between'}}>    
    
    <Text  style={{marginRight:20,color:'#5496FF',fontFamily:'Exo2-Regular'}}> {this.props.mode=='All'?ExchangeCoin:this.props.mode}</Text> 
    </View>
      </View>
      
    </View>
  
     
  
      
</LinearGradient>

           

          
    
          </View>
          </TouchableOpacity>
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
         

         <View style={{paddingLeft:50,paddingRight:50,paddingBottom:20}}>
   {/* <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}} >
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Exchange Type</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.exchangeType}</Text> 

</View>  

</View> */}
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Amount you Get</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.amountYouGet} {GetAmount} </Text> 

</View>  

</View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Amount to Trade</Text>

</View>  

<View style={{marginRight:20}} >
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10,}}>{this.props.item.amountToTrade} {ExchangeCoin}</Text> 

</View>  

</View>
 <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Fee</Text>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>TOTAL</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10,marginLeft:20}}>{this.props.item.transactionFee} {ExchangeCoin}</Text> 
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,textAlign:'center',fontFamily:'Exo2-Regular',marginBottom:10,marginLeft:20}}>{this.props.item.totalAmount} {ExchangeCoin}</Text> 

</View>  
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#5496FF',borderWidth:0.5,}}>
<View style={{marginLeft:20}}>
<Text style={{fontSize:12,color:'#5496FF',marginTop:10,fontFamily:'Exo2-Medium',marginBottom:10}}>Date</Text>
</View>  

<View style={{marginRight:20}}>
<Text style={{fontSize:12,color:'#a9b4d4',marginTop:10,fontFamily:'Exo2-Regular',marginBottom:10}}>{this.props.item.date1}</Text> 

</View>  

</View>

</View> 
<View style={{justifyContent:'center',alignItems:'center',marginBottom:10,width:"100%"}}>
<View style={{width:"50%"}}>
<LinearGradient colors={[(status==='Exchanged')?'transparent':'#41da9c',(status==='Exchanged')?'transparent':'#36deaf',(status==='Exchanged')?'transparent':'#26e3ca']}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{borderColor:'#26e3ca', width:'100%',padding:12,borderWidth:0.8,justifyContent:'center',alignItems:'center',marginLeft:10,borderRadius:6}}>

<Text style={{color:(status==='Exchanged')?'#fff':'#fff',fontFamily:'Poppins-Medium'}}>{status}</Text>
</LinearGradient>

</View>

</View>


   </View>
        </View>
        
          
  
      );
    }
  }