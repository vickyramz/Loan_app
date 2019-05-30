import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,ScrollView,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import { Switch} from 'react-native'
import * as shape from 'd3-shape'
import Logo from '../logo'
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
      Coin: 'Us Doller',
      animate:false,
      app1icon:require('./assets/app1.png'),
      app6icon:require('./assets/app6.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
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
      app2color:'#5099f0',
      app3color:'#5099f0',
      app4color:'#5099f0',
      app5color:'#5099f0'
    };
  
  }
  
  componentDidMount()
  {
    this.GetListData()
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
_onPress=()=>{
  if(!this.state.click){
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 50})
    this.setState({click:true})
  }else{
    LayoutAnimation.spring();
    this.setState({w:50})
    this.setState({click:false})
  }
   
}
toggleSwitch=(value)=>{
  this.setState({switchValue: value})
}
pressRight=()=>{
  if(!this.state.clickr){
    LayoutAnimation.spring();
    this.setState({wr: this.state.wr + 50})
    this.setState({clickr:true})
  }else{
    LayoutAnimation.spring();
    this.setState({wr:50})
    this.setState({clickr:false})
}
}
SlideMenu=()=>{
  if(!this.state.slide){
    LayoutAnimation.spring();
    if(this.state.Awr>80){
      this.setState({Awr:80})
      this.setState({slide:false})
    }
    else{
      this.setState({Awr:this.state.Awr+250})
      this.setState({slide:true})
    }
    
  }
  else{
    LayoutAnimation.spring();
    this.setState({Awr:80})
    this.setState({slide:false})
  }
  }
  HideMenu=()=>{
    LayoutAnimation.spring();
    this.setState({Awr:80})
  }
  AppTouch=()=>{
    this.setState({
      app2color:'#5099f0',
      app1color:'#fff',
      app3color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#5099f0',
      app1icon:require('./assets/app1.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
  
    })
    LayoutAnimation.spring();
    if(!this.state.clickopen){
      if(this.state.Awr>80)
      {
        this.setState({Awr:80,clickopen:false})
      }
      else
      {
        this.setState({Awr:this.state.Awr+250,clickopen:true})
      }
     
    }
    else{
      this.setState({Awr:80,clickopen:false})
    }
    
  }
  App2Touch=()=>{
    this.setState({
      app2color:'#fff',
      app1color:'#5099f0',
      app3color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#5099f0',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app4-blue.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
    
    })
    this.props.navigation.navigate('Vault');
  }
  App3Touch=()=>{
    this.setState({
      app3color:'#fff',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#5099f0',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3-blue.png'),
      app4icon:require('./assets/app4.png'),
      app5icon:require('./assets/app5.png'),
    })
    this.props.navigation.navigate('Price')
  }
  App4Touch=()=>{
    this.setState({
      app3color:'#5099f0',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app5color:'#5099f0',
      app4color:'#fff',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app5icon:require('./assets/app5.png'),
      app4icon:require('./assets/app5-blue.png')
    })
  }
  App5Touch=()=>{
    this.setState({
      app3color:'#5099f0',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app4color:'#5099f0',
      app6color:'#5099f0',
      app6icon:require('./assets/app6.png'),
      app5color:'#fff',
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app6icon:require('./assets/app6.png'),
      app5icon:require('./assets/app2-blue.png'),
     
    })
    this.props.navigation.navigate('Profile')
  }
  App6Touch=()=>{
    this.setState({
      app3color:'#5099f0',
      app1color:'#5099f0',
      app2color:'#5099f0',
      app4color:'#5099f0',
      app5color:'#5099f0',
      app6color:'#fff',
      app1icon:require('./assets/app1white.png'),
      app2icon:require('./assets/app2.png'),
      app3icon:require('./assets/app3.png'),
      app4icon:require('./assets/app4.png'),
      app6icon:require('./assets/app6-blue.png'),
      app5icon:require('./assets/app5.png'),
     
    })
   // this.props.navigation.navigate('Profile')
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
      <LinearGradient
   colors={['#1a5fe1','#00a5ff','#81DCF9']} style={{height:200,}}>    
      <LinearGradient
   colors={['#1a5fe1','#81DCF9','#81DCF9']} style={{height:250,marginRight:30,marginTop:30}}>
 <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',marginTop:20}}>
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/app4.png")} ></Image>     
          <Text style={{fontSize:18,fontWeight:'bold',color:'#fff'}}>Exchange</Text>
          </View>      
          <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginTop:10}}>Vendor</Text>  
          <Text style={{fontSize:20,fontWeight:'bold',color:'#fff',marginTop:10}}>-2.258978</Text>   
          <View style={{flexDirection: 'row',marginLeft:20}}>
          <Text style={{marginLeft:10,color:' #000000',marginTop:15}}>880.660</Text>
     <Picker
         style={{ width: 130,color:'#000000',marginLeft:10 }}
          selectedValue={this.state.Coin}
          itemStyle={{ backgroundColor: "#000000", color: "#000000", fontFamily:"Ebrima", fontSize:17 }}
          onValueChange={(lang) => this.setState({Coin: lang})}>
          <Picker.Item label="Us doller" value="Us doller" />
          <Picker.Item label="Indian" value="js" />
        </Picker>
     </View>            
          </View>
         <View>  
          </View>
          </LinearGradient>    
         


          </LinearGradient> 
          
<View style={{flex:1}}>

          <LinearGradient  colors={['#fff','#CCCFE2','#CCCFE2']} style={{marginTop:60}} >
   <ScrollView>
<View style={{marginTop:20}}>   

<View
  style={{
    marginTop:10,
    borderBottomColor: '#D3D3D3',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
 
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#000000',marginTop:10}}>Fraction</Text>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginRight:90}}>1</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#D3D3D3',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#000000',marginTop:10}}>Fraction Value</Text>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginRight:90}}>1</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#D3D3D3',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#000000',marginTop:10}}>Market Rate</Text>  
<View style={{flexDirection:'row',width:90,height:30,marginRight:50,marginTop:10}}>
<View style={{justifyContent:'center',width:40,alignItems:'center',borderWidth:1,borderColor:'#000000', backgroundColor:'#4286f4'}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Yes</Text> 
</View>
<View style={{justifyContent:'center',width:40,alignItems:'center',borderWidth:1,borderColor:'#000000'}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#000000'}}>No</Text> 
</View>
</View>

</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#D3D3D3',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
<View style={{justifyContent:'space-between',flexDirection:'row',marginLeft:20,marginRight:20}}>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#000000',marginTop:10}}>Minimum Value</Text>  
<Text style={{fontSize:12,fontWeight:'bold',color:'#4286f4',marginTop:10,marginRight:90}}>0.000</Text> 
</View>
<View
  style={{
    marginTop:10,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
  }}
/>
<View style={{backgroundColor:'#CCCFE2'}}>
<View style={{justifyContent:'center',alignItems:'center'}}>
<View style={{flexDirection:'row'}}>  
<Text style={{fontSize:15,fontWeight:'bold',color:'#000000',marginTop:10,marginBottom:10}}>Payment Methods</Text>  
<Image style={{marginLeft:10,width: 20, height: 20,marginTop:10}}   source={require("./assets/plus.png")} ></Image>
</View>
</View>
<LinearGradient  colors={['#81DCF9','#00a5ff','#1a5fe1']}  style={{width:'90%',height:200, backgroundColor:'#4286f4',borderTopRightRadius:20,borderTopLeftRadius:20,borderBottomRightRadius:20, borderBottomLeftRadius:20, marginLeft:20,marginRight:30,borderBottomWidth:15,borderBottomColor:'#42f4f4'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:30}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>currency</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Tittle</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Plat.Elect</Text> 
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>BTC</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Minimum value</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>paypal</Text> 
</View>
<View style={{flexDirection:'row',marginLeft:30,marginRight:30,marginTop:30}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>Description</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:50}}>Country</Text> 

</View>
<View style={{flexDirection:'row',marginLeft:30,marginRight:30,marginTop:10}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',}}>Transferdata...</Text> 
<Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:30}}>Cloumbia</Text> 

</View>
<View style={{position:'absolute',left:0,right:0,top:20,bottom:0,alignItems:'flex-end'}}>
<Image style={{marginRight:20,width: 100,opacity:0.5, height: "80%"}}   source={require("./assets/logo-white.png")} ></Image>  
</View>
</LinearGradient>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:20,marginRight:70,marginTop:20}}>
<Text style={{fontSize:12,fontWeight:'bold',color:'#000000',marginTop:10,marginBottom:10}}>I accept terms and conditions</Text> 
<Switch
          style={{marginRight:30}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
</View>
<View style={{flexDirection:'row',marginLeft:20,marginRight:20,marginBottom:50,marginTop:20}}>
<LinearGradient colors={['#FC686F','#FD6A72','#F74B71']}  style={{width:'50%',padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity>
<Text style={{color:'#fff'}}>Cancel</Text>
</TouchableOpacity>
</LinearGradient>
<LinearGradient colors={['#4C8DFE','#4D91FF','#5D5CFE']} style={{width:'50%',padding:10,backgroundColor:'green',justifyContent:'center',alignItems:'center',marginLeft:10}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<Text style={{color:'#fff'}}>Accept</Text></TouchableOpacity>
</LinearGradient>
</View>
</View>
   
</View>
    </ScrollView>    
</LinearGradient>
   
      
    
         <LinearGradient colors={['#81DCF9','#5099f0','#1a5fe1']} style={{  width: 100,marginLeft:20,position:'absolute',top:-20,left:120,right:100,bottom:50,
    height: 100,
    borderRadius: 100/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 60, height: 60}}  source={require('./assets/walletpurse.png')} ></Image>
    
            
          </LinearGradient> 
 
    <View  style={{justifyContent:'flex-end',alignItems:'flex-end', top: 0,marginBottom:30,position:'absolute',
        bottom: 0,
        left: 0,
        right: 0,}}>
     <TouchableOpacity onPress={this.SlideMenu}>
     <View style={{backgroundColor:'#5099f0',height:this.state.Ahr,width:this.state.Awr,justifyContent:'center',alignItems:'flex-start',borderTopStartRadius:40,borderBottomStartRadius:40, marginTop:10}}>
           
       <View style={{flexDirection: 'row',marginRight:20,}}> 
       <TouchableOpacity onPress={this.AppTouch}>
       <View style={{  width: 40,marginLeft:20,
    height: 40,
    borderRadius: 40/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app1icon} ></Image>
    
            
          </View> 
          </TouchableOpacity> 
          <TouchableOpacity onPress={this.App6Touch}>
       <View style={{  width: 40,marginLeft:20,
    height: 40,
    borderRadius: 40/2,
    backgroundColor:this.state.app6color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
          </TouchableOpacity>   
          <TouchableOpacity onPress={this.App2Touch}>
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor:this.state.app2color,justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.App3Touch}>
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: this.state.app3color,justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app3icon} ></Image>
    
           
          </View>   
          </TouchableOpacity>
          <TouchableOpacity onPress={this.App4Touch}>
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: this.state.app4color,justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app4icon} ></Image> 
    
            
          </View>  
          </TouchableOpacity> 
          <TouchableOpacity onPress={this.App5Touch}>
          <View style={{ backgroundColor:'red',width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: this.state.app5color,justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app5icon} ></Image> 
          </View>         
          </TouchableOpacity>
     
          </View>
            </View>
            </TouchableOpacity>
      </View>
      </View>
     </View>
  
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
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