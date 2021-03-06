import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,ScrollView,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Switch} from 'react-native'
import * as shape from 'd3-shape'
import Logo from '../../logo'
import LinearGradient from 'react-native-linear-gradient';


export default class  Sell  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      switchValue:false,
      cityItems:["US Doller,Indian,Eutherium"],
      Amount: 'USDoller',
      animate:false,
      w: 50,
      h: 45,
      wr:50,
      hr:45,
      Ahr:80,
      Awr:80,
      clickr:false,
      clickopen:false,
      click:false,
      slide:false,
      visible: false,
      hidden: false,
      app1color:'#fff',
      app6color:'#5099f0',
      yesbackgroundcolor:'#4286f4',
      nobackgroundcolor:'#fff',
      yesfontcolor:'#fff',
      nofontcolor:'#4286f4',
      app2color:'#5099f0',
      app3color:'#5099f0',
      app4color:'#fff',
      app5color:'#5099f0'
    };
  
  }
  
  componentDidMount()
  {
  //  this.GetListData()
  }
  GetListData=()=>{
    this.Load()
    var obj = {  
      method: 'GET',
      headers: {
        'Content-Type'    : 'application/json',
        'Accept'          : 'application/json',
       'Authorization':'Bearer '+'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJRCI6ImJmNDczYTU5LTQxNzAtNDQ2My05YTI2LWZlNWNhYTVlZjMwZiIsIkV4cGlyeSI6bnVsbH0.tUaime3lRYn7wAu2KCnW3oFwIZa18eIL_4AOnoGJiKU'.trim()   
         }
  }
  fetch("https://apptest.supplynow.co.uk/api/v1/Bookings/MyBookings",obj)  
  .then((res)=> {
    return res.json();
   })
   .then((resJson)=>{
     this.dataset(resJson)
   
    return resJson;
   })
   .catch((error) => {
    console.error(error);
});
}
dataset=(data)=>{
  this.setState({
    dataSource:data
  })
  this.hide()
}
Load(){
  this.setState({animate:true})
}
hide(){
  this.setState({animate:false})
}
space(){
  return(<View style={{height: 10, width: 1, backgroundColor:'black'}}/>)
} 
  render() {
    const data = [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ]
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'#25e2cd'}
          fill={'none'}
      />
  )

   
  if(this.state.animate){  
    return <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
    <ActivityIndicator
  color = '#1a5fe1'
  size = "large"
  style = {styles.activityIndicator}/>
  </View>
  }
    return (  
   
      <View style={styles.Maincontainers}>   
       <LinearGradient colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={styles.Maincontainers}>  
      <LinearGradient
   colors={['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} style={{height:200,opacity:0.9}}>    
      <LinearGradient
   colors={['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} style={{height:230,marginRight:30,marginTop:20}}>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Image style={{marginRight:10,width: 18, height: 22,resizeMode:'contain'}}   source={require("../assets/app4.png")} ></Image>     
          <Text style={{fontSize:18,color:'#fff',fontFamily:'Exo2-Regular'}}>Exchange</Text>
          </View>      
          <Text style={{fontSize:12,color:'#fff',marginTop:10,fontFamily:'Exo2-Regular'}}>Sell</Text> 
          <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{width: 20, height: 20,resizeMode:'contain'}}   source={require("../assets/minus.png")} ></Image> 
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{fontSize:20,fontSize:36,color:'#F5F6F9',fontFamily:'Exo2-SemiBold'}}>2.258978</Text> 
          </View>
        
          </View> 
          
          <View style={{flexDirection:'row',justifyContent:'center',width:'100%',marginTop:10,alignItems:'center'}}>       		
				 <Text style={{fontSize:15,fontFamily:'Exo2-Medium',color:'#4e649f'}}>880.889</Text>                                          
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:20}}>
        <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:''}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10,tintColor:'#4e649f'}}  source={require("../assets/down_arrow.png")} ></Image>
        <Picker style={{ position:'absolute', top: 0, width: 500, height: 3000 }}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedAmount(itemValue,itemIndex)}>
  <Picker.Item label="Inr" value="Inr" />
  <Picker.Item label="USA" value="USA" />
  <Picker.Item label="German" value="German" />
  <Picker.Item label="Italy" value="Italy" />
  <Picker.Item label="Aus" value="Aus" />
  <Picker.Item label="India" value="India" />
  <Picker.Item label="Aus" value="Aus" />
  </Picker>
        </View>
        
  
     
                 </View>            
          </View>
         <View>  
          </View>
          </LinearGradient>    
         


          </LinearGradient> 
          
<View style={{flex:1}}>

          <LinearGradient   colors= {['transparent','transparent','transparent']} style={{marginTop:60}} >
   <ScrollView>
<View style={{marginTop:20}}>   

<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
 
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF'}}>Fraction</Text>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF',marginTop:10,marginRight:90}}>1</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF',marginTop:10,}}>Fraction Value</Text>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF',marginTop:10,marginRight:90,}}>1</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF',marginTop:10,}}>Market Rate</Text>  
<View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={this.yesTap}>
<View style={{width:70,height:25,borderRadius:6,backgroundColor:this.state.yesbackgroundcolor,justifyContent:'center'}}>
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.yesfontcolor,marginLeft:20,fontFamily:''}}>Yes</Text> 
</View>
</TouchableOpacity>
<TouchableOpacity onPress={this.NoTap}>
<View style={{width:50,height:25,borderRadius:6,backgroundColor:this.state.nobackgroundcolor,marginLeft:-10,justifyContent:'center',alignItems:'center'}}>
<Text style={{fontSize:12,fontWeight:'bold',color:this.state.nofontcolor,fontFamily:'Exo2-Medium'}}>No</Text> 
</View>
</TouchableOpacity>
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF',marginTop:10,}}>Minimum Value</Text>  
<Text style={{fontSize:12,fontFamily:'Exo2-Medium',color:'#5496FF',marginTop:10,marginRight:90,}}>0.000</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#394d88',
    borderBottomWidth: 1,
  }}
/>
<View style={{backgroundColor:'transparent'}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<View style={{flexDirection:'row'}}>  
<Text style={{fontSize:15,color:'#fff',marginTop:10,marginBottom:10,fontFamily:'Exo2-Regular'}}>Payment Methods</Text>  
<Image style={{marginLeft:10,width: 20, height: 20,marginTop:10}}   source={require("../assets/plus.png")} ></Image>
</View>
</View>
<LinearGradient  colors={['#81DCF9','#00a5ff','#1a5fe1']}  style={{width:'90%',height:200, backgroundColor:'#4286f4',borderTopRightRadius:20,borderTopLeftRadius:20,borderBottomRightRadius:20, borderBottomLeftRadius:20, marginLeft:20,marginRight:30,borderBottomWidth:15,borderBottomColor:'#42f4f4'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:30}}>
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>currency</Text> 
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>Tittle</Text> 
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>Plat.Elect</Text> 
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:10}}>
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>BTC</Text> 
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>Minimum value</Text> 
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>paypal</Text> 
</View>
<View style={{flexDirection:'row',marginLeft:30,marginRight:30,marginTop:30}}>
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>Description</Text> 
<Text style={{fontSize:12,color:'#fff',marginLeft:70,fontFamily:'Exo2-Regular'}}>Country</Text> 
 
</View>
<View style={{flexDirection:'row',marginTop:10,marginLeft:30,marginRight:30}}>
<Text style={{fontSize:12,color:'#fff',fontFamily:'Exo2-Regular'}}>Transferdata...</Text> 
<Text style={{fontSize:12,color:'#fff',marginLeft:50,fontFamily:'Exo2-Regular'}}>Cloumbia</Text> 


</View>
<View style={{position:'absolute',left:0,right:15,top:0,bottom:0,alignItems:'flex-end'}}>
<Image style={{width: 120,opacity:0.9, height: "100%",tintColor:'#fff',resizeMode:'contain'}}   source={require("../assets/three.png")} ></Image>  
</View>
</LinearGradient>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:70,marginTop:20}}>
<Text style={{fontSize:12,color:'#ffffff',marginTop:10,marginBottom:10,fontFamily:'Exo2-Regular'}}>I accept terms and conditions</Text> 
<Switch
          trackColor={{true: '#25e2cd'}}
          style={{marginRight:30}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
</View>
<View style={{flexDirection:'row',marginLeft:20,marginRight:20,marginBottom:300,marginTop:20}}>
<LinearGradient colors={['#F74B71','#FD6A72','#FC686F']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'50%',borderRadius:6, padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff',fontFamily:'Poppins-Medium'}}>Cancel</Text>
</TouchableOpacity>
</LinearGradient>
<LinearGradient  colors={['#26e3ca','#36deaf','#41da9c']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{width:'50%',borderRadius:6,padding:10,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginLeft:10}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<Text style={{color:'#fff',fontFamily:'Poppins-Medium'}}>Accept</Text></TouchableOpacity>
</LinearGradient>
</View>
</View>
   
</View>
    </ScrollView>    
</LinearGradient>
   
      
    
         <LinearGradient colors= {['#97F5F9','#7ED5F6','#529DF3','#4781DF','#2D3CAD']} style={{  width: 100,marginLeft:20,position:'absolute',top:-20,left:120,right:100,bottom:50,
    height: 100,
    borderRadius: 100/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 60, height: 60,resizeMode:'contain'}}  source={require('../assets/sell.png')} ></Image>
    
            
          </LinearGradient> 
      </View>
      </LinearGradient>
     </View>
  
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      selectedAmount=(item,index)=>{
        this.setState({
          Amount:item
        })
      }
      yesTap=()=>{
this.setState({
  yesbackgroundcolor:'#4286f4',
  nobackgroundcolor:'#fff',
  yesfontcolor:'#fff',
  nofontcolor:'#4286f4'
})
      }
      NoTap=()=>{
        this.setState({
          yesbackgroundcolor:'#fff',
          nobackgroundcolor:'#4286f4',
          yesfontcolor:'#4286f4',
          nofontcolor:'#fff'
        })
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#fff',
  },
  containers: {
   backgroundColor: '#fff',
    marginTop:5,
  },
  containers: {
  flex:1,
   height:'30%'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 img: {
  width: '30%',
  height: '32%',
  resizeMode: 'cover',
},
  ButtonRow: {
    justifyContent: 'center', 
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    backgroundColor: '#fbfbfb',

   
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  input:{
      height: 50,
      backgroundColor: '#fff',
      borderWidth: 0.5,
     
      borderColor: '#d6d7da',
      width: '50%',
      color: '#000'
  },
  textStyle :{
    textAlign: 'center',   
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '40%',
      marginTop:15,
     
      paddingVertical: 15
  },
  SignInbuttonContainer:{
    backgroundColor: '#7f7f7f',
    width: '40%',
    marginTop:15,
    marginLeft:10,
    paddingVertical: 15
},
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});