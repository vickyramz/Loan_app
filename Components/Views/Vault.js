import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Logo from '../logo'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
export default class Vault extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      app1icon:require('./assets/app1.png'),
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
  this.setState({Awr:this.state.wr+220})
  this.setState({slide:true})
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
    this.setState({Awr:this.state.wr+220,clickopen:true})
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
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app4-blue.png'),
    app3icon:require('./assets/app3.png'),
    app4icon:require('./assets/app4.png'),
    app5icon:require('./assets/app5.png'),
  })
}
App3Touch=()=>{
  this.setState({
    app3color:'#fff',
    app1color:'#5099f0',
    app2color:'#5099f0',
    app5color:'#5099f0',
    app4color:'#5099f0',
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app2.png'),
    app3icon:require('./assets/app3-blue.png'),
    app4icon:require('./assets/app4.png'),
    app5icon:require('./assets/app5.png'),
  })
}
App4Touch=()=>{
  this.setState({
    app3color:'#5099f0',
    app1color:'#5099f0',
    app2color:'#5099f0',
    app5color:'#5099f0',
    app4color:'#fff',
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
    app5color:'#fff',
    app1icon:require('./assets/app1white.png'),
    app2icon:require('./assets/app2.png'),
    app3icon:require('./assets/app3.png'),
    app4icon:require('./assets/app4.png'),
    app5icon:require('./assets/app2-blue.png'),
   
  })
}
  render() {
    const { navigate } = this.props.navigation;
    const data = [ 50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100 ]
    const Line = ({ line }) => (
      <Path
          key={'line'}
          d={line}
          stroke={'#5099f0'}
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
      <View >
      <LinearGradient
   colors={['#00a5ff','#00a5ff','#1a5fe1']} style={{justifyContent:'space-between',flexDirection:'row',borderTopLeftRadius:300,borderBottomRightRadius:200}}>
      <View style={{backgroundColor:'#fff',height:this.state.h,width:this.state.w,justifyContent:'center',borderWidth:1, alignItems:'flex-end',borderTopEndRadius:25,borderBottomEndRadius:25,  borderWidth: 1,
  borderColor: '#fff',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
   marginTop:10}}>

<TouchableOpacity onPress={this._onPress}>
 <View style={{flexDirection: 'row'}}> 
    <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/iicon.png")} ></Image>     

    </View>
    </TouchableOpacity>

      </View>
      
             
            <View style={{justifyContent:'flex-start',alignItems:'flex-start',marginTop:15,marginLeft:50}}> 
            <View style={{flexDirection: 'row',justifyContent:'center',alignItems:"center",marginTop:15,marginLeft:50}}> 
            <Image  style={{width:30,height: 30}}  source={require("./assets/app2.png")} ></Image>
            <Text style={{marginLeft:10,marginTop:5,fontSize:18,color:"#fff"}}>Vault</Text>
             </View>         
          <View style={{flexDirection: 'row',marginTop:10,marginLeft:20}}> 
     <Image style={{width:20, height: 40}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text style={{fontSize:20,color:'#fff',}}>2.8066589</Text>
          </View>
          <View style={{flexDirection: 'row',justifyContent:'space-between',marginLeft:10,marginTop:-5}}> 
   
   <Text style={{color:'#fff'}}>880.660</Text>
   <View style={{flexDirection: 'row',marginLeft:10,marginTop:-16}}>
   <Picker
       style={{ width: 130,color:'#fff' ,fontSize:12 }}
        selectedValue={this.state.Coin}
        onValueChange={(lang) => this.setState({Coin: lang})}>
        <Picker.Item label="USDoller" value="USDoller" />
        <Picker.Item label="Indian" value="js" />
      </Picker>
   </View>         
        </View>  
        <View style={{flexDirection:'column',alignItems:'flex-end',justifyContent:'flex-end',marginLeft:120,paddingBottom:50}}>
                 <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#fff',justifyContent:'center',alignItems:"center"}}>
     <Image style={{width:20,height:20}}   source={require('./assets/Refresh.png')} ></Image> 
    
            
          </View>  
                 </View>       
          </View>
   
            <View style={{backgroundColor:'#fff',height:this.state.hr,width:this.state.wr,justifyContent:'center',alignItems:'flex-start',borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30}}   source={require("./assets/app4-blue.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </View>
          </LinearGradient>
      </View>    
      <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:20,
    borderBottomColor: 'grey',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>
   
      <View style={styles.containers}>
              <FlatList 
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{backgroundColor:(item.Status=='Completed')?'#fff':'#5099f0',marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
  borderColor: '#fff',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
   colors={[(item.Status=='Completed')?'#96cef7':'#fff', (item.Status=='Completed')?'#5099f0':'#fff', (item.Status=='Completed')?'#5099f9':'#fff']} style={{ borderRadius:25}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        <View >
        {(item.Status=='Cancelled')? <LinearGradient
   colors={['#f8b971','#ec663c','#f8b971']} style={{width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#fff',justifyContent:'center',alignItems:"center"}}>
<Image  style={{width: 30, height: 30}}  source={require("./assets/Bicon.png")} ></Image>  
   </LinearGradient>: <LinearGradient
   colors={['#fff','#fff','#fff']} style={{width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: '#fff',justifyContent:'center',alignItems:"center"}}>
<Image  style={{width: 30, height: 30}}  source={require("./assets/diamond-blue.png")} ></Image>  
   </LinearGradient>}
          </View>
          <View >         
          </View>
          <View style={{flexDirection:'column',marginLeft:30}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#162061':'#fff'}}>{item.Status}</Text>       
     <View style={{flexDirection:'row'}}>
     <Image style={{width: 25,marginTop:10, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#162061':'#fff'}}>$ 9060</Text> 
     </View>
        
     </View>  
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
 
            
         <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#162061':'#fff'}}>12.38 .782</Text>       
     
      <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#162061':'#fff'}}>5.4587ETH</Text>    
     </View>  
          </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />
       
    </View>

 
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
    backgroundColor: 'transparent',
    marginTop:5,
   
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