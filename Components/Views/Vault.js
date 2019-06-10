import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Logo from '../logo'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export default class Vault extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      ImagArray:['image1'],
      Amount:'USDoller',
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      app1icon:require('./assets/app1white.png'),
      app6icon:require('./assets/app6.png'),
      app2icon:require('./assets/app4-blue.png'),
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
      app1color:'#5099f0',
      app6color:'#5099f0',
      app3color:'#fff',
      app4color:'#5099f0',
      app5color:'#5099f0',
      ActiveOpacity:1,
      CompleteOpacity:0.5

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
ProfileTouch=()=>{
  this.setState({
  })
  this.props.navigation.navigate('Profile');
  
}
DashBoardTouch=()=>{
  this.props.navigation.navigate('DashBoard')
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
    app2icon:require('./assets/app4-blue.png'),
    app3icon:require('./assets/app3.png'),
    app5icon:require('./assets/app5.png'),
    app4icon:require('./assets/app4.png')
  })
  this.props.navigation.navigate('ExchangeMenu')
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
CreditCardTouch=()=>{
  Alert.alert('Development Progressing');
}
ActiveTouch=()=>{
  this.setState({
    ActiveOpacity:1,
    CompleteOpacity:0.5
  })
}
CompleteTouch=()=>{
  this.setState({
    ActiveOpacity:0.5,
    CompleteOpacity:1
  })
}
  render() {

    const { navigate } = this.props.navigation;
    const data = [ 100, 500, 1000, 500, 400, 600,800,400,300,500 ]
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
  color = '#bc2b78'
  size = "large"
  style = {styles.activityIndicator}/>
  </View>
  }
    return (  
      <View style={styles.Maincontainers}>    
      <LinearGradient colors= {['#2b3f74','#232d51','#232d51']}>
      <ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>  
<LinearGradient colors={['transparent','transparent','transparent']} style={{justifyContent:'center',height:this.state.h,width:this.state.w, alignItems:'flex-end', marginTop:10,borderTopRightRadius:25,borderBottomRightRadius:25,borderColor:'#c978f8',borderWidth:1,position:'absolute'}}>
<TouchableOpacity onPress={this._onPress}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30}}   source={require("./assets/iicon.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
</LinearGradient>    
         
              
            <LinearGradient colors={['#fff','#fff','#fff']} style={{height:this.state.hr,width:this.state.wr,justifyContent:'center',alignItems:'flex-start',borderTopLeftRadius:25,borderBottomLeftRadius:25, marginTop:10,position:'absolute',right:0}}>
            <TouchableOpacity onPress={this.pressRight}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30}}   source={require("./assets/app4-blue.png")} ></Image>     
     
          </View>
          </TouchableOpacity>
            </LinearGradient>
      </View>
   
      
    <View style={{marginTop:20}}> 
    <View style={{flexDirection: 'row',justifyContent:'center',alignItems:"center" }}> 
          <Image  style={{width: 30, height: 30}}  source={require("./assets/app2.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:18,fontWeight:'bold',color:'#fff'}}>Vault</Text>       
          </View>       
          </View>
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:70,marginTop:10}}>
    <TouchableOpacity onPress={this.ActiveTouch}>
    <View style={{width:80,height:50,borderRightWidth:1,borderRightColor:'#4d6bc1'}}>
    <Text style={{marginLeft:10,marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',opacity:this.state.ActiveOpacity}}>Active</Text> 
    </View>
    </TouchableOpacity>
   <TouchableOpacity onPress={this.CompleteTouch}>
   <View style={{width:150,height:50}}>
    <Text style={{marginLeft:20,marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',opacity:this.state.CompleteOpacity}}>Completed</Text> 
    </View>
   </TouchableOpacity>
    
    </View> 
    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:50,paddingRight:50}}>
 <Text style={{marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',opacity:0.5}}>Monero</Text> 
 <Text style={{marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',opacity:1}}>Ethereum</Text> 
 <Text style={{marginTop:15,fontSize:15,fontWeight:'bold',color:'#fff',opacity:0.5}}>Bitcoin</Text> 
    </View>
   <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
   <FlatList  style={{marginTop:10}}
      showsHorizontalScrollIndicator={false}
      data={this.state.ImagArray}
      horizontal={true}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
            <TouchableOpacity onPress={this.App2Touch}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
            <View>
<LinearGradient style={{  width: 90,marginLeft:10,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#f8bc73','#f0824d','#ec643a']}>
   <Image style={{width: 50, height: 50}}   source={require("./assets/biconback.png")} ></Image> 
</LinearGradient>

    </View> 
            </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('VaultFilter')}>
    <View>
<LinearGradient style={{  width: 90,marginLeft:-20,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#5582ff','#5e5cff','#6730ff']}>
   <Image style={{width: 50, height: 50}}   source={require("./assets/etheremicon.png")} ></Image> 
</LinearGradient>

    </View> 
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
<LinearGradient style={{  width: 90,marginLeft:-20,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#8be6f8','#59a7f2','#3652bd']}>
     <Image style={{width: 50, height: 50}}   source={require("./assets/shareicon.png")} ></Image> 
</LinearGradient>
 
    </View> 
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
<LinearGradient style={{  width: 90,marginLeft:-20,marginRight:-20,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#faaf15','#fbcc0a','#fddf01']}>
      <Image style={{width: 50, height: 50}}   source={require("./assets/ziconback.png")} ></Image> 
</LinearGradient>
 
    </View> 
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
<LinearGradient style={{  width: 90,marginRight:10,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#fd7170','#fa5a76','#f53d7b']}>
        <Image style={{width: 50, height: 50}}   source={require("./assets/miconback.png")} ></Image> 
</LinearGradient>
 
    </View> 
    </TouchableOpacity>
    
    </View>
    </TouchableOpacity>  
  </TouchableOpacity>  
       }
    />

   </View>
    </View> 
      <View style={styles.containers}>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                 <Text style={{marginLeft:10,marginTop:15,fontSize:20,fontWeight:'bold',color:'#4d6bc1'}}>Balance</Text> 
                 </View>
               
               <View style={{ marginTop:10,justifyContent:'center',alignItems:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View>
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:30,fontSize:30,fontWeight:'bold',color:'#fff'}}>4.80258789</Text>
                <View style={{marginTop:-10,marginLeft:5}}>
                
                </View>
                </View>
                                        
                </View>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:20}}>
                 <View style={{width:40,height:15,backgroundColor:'#314985',justifyContent:'center',alignItems:'center',marginTop:-10,marginRight:30}}>
                <Text style={{fontSize:12,fontWeight:'bold',color:'#4d6bc1'}}>All</Text>
                </View>
				
				
				 <Text style={{fontSize:12,fontWeight:'bold',color:'#4d6bc1',marginLeft:-40}}>880.889</Text>
                  
               
                
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:-60}}>
        <Text style={{color:'#4e649f',fontWeight:'bold',opacity:1,fontSize:12}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10}}  source={require("./assets/down_arrow.png")} ></Image> 
        </View>
        
  <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000 }}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedPrice(itemValue,itemIndex)}>
  
  <Picker.Item label="USDoller" value="USDoller" />
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
<View style={{height:'100%'}}>
<FlatList  style={{marginTop:20}}
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },
   borderWidth: 1,
  borderColor: '#394d88',
  borderBottomWidth: 0,
  shadowColor: '#394d88',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
   colors={['#374c8d', '#32437b','#2c3868']} style={{ borderRadius:25}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        {(
          (item.Status!='Completed')?<View>
<LinearGradient style={{  width: 50,shadowOpacity:1,shadowColor:"#FFF",shadowRadius:50,
height: 50,
borderRadius: 50/2,
justifyContent:'center',alignItems:"center"}} colors= {['#f8bc73','#f0824d','#ec643a']}>
   <Image style={{width: 30, height: 30}}   source={require("./assets/biconback.png")} ></Image> 
</LinearGradient>

    </View> :  <View>
<LinearGradient style={{  width: 50,
height: 50,
borderRadius: 50/2,
justifyContent:'center',alignItems:"center"}} colors= {['#5582ff','#5e5cff','#6730ff']}>
   <Image style={{width: 30, height: 30}}   source={require("./assets/etheremicon.png")} ></Image> 
</LinearGradient>

    </View> 

        )}
      
          <View style={{flexDirection:'column',marginLeft:10}}>
          <View style={{flex:1, flexDirection: 'row',justifyContent:'space-between'}}>    
          <View>
          <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#4286f4':'#4286f4'}}>ETH</Text> 
          <Text  style={{marginRight:20,marginTop:10,color:(item.Status!='Completed')?'#a9b4d4':'#a9b4d4'}}>$435</Text> 
          </View>  
          <View>
          <View style={{flexDirection:'row'}}>
          <Text  style={{marginTop:10,color:(item.Status!='Completed')?'#a9b4d4':'#a9b4d4'}}>{(item.Status!='Completed')?'Produced':"Produced"}</Text>    
          <View style={{flexDirection:'row',marginTop:10}}>
     <Image style={{width: 25, height: 25}}   source={require("./assets/plusblue.png")} ></Image>    
     <Text  style={{fontSize:10,color:(item.Status!='Completed')?'#232d51':'#232d51'}}>$ 9060</Text> 
     </View>  
          </View>    
          <View style={{flexDirection:'row'}}>
          <Text  style={{color:(item.Status!='Completed')?'#a9b4d4':'#a9b4d4'}}>Coins</Text> 
          <Text  style={{marginLeft:10 ,color:(item.Status!='Completed')?'#a9b4d4':'#a9b4d4'}}>0.123</Text> 
          </View>
          </View>
          <View style={{flexDirection:'row',marginTop:15,marginRight:15}}>
          <Text  style={{marginTop:5,color:(item.Status!='Completed')?'#a9b4d4':'#a9b4d4'}}>+8.5%</Text> 
          <Image style={{width: 10,marginTop:10, height: 10}}   source={require("./assets/green.png")} ></Image> 
          </View>                
     </View>  
          </View>
         
        </View>
</LinearGradient>
  </View>
       
  </TouchableOpacity>  
       }
    />
</View>
                
       
    </View>
    </ScrollView>
</LinearGradient>
<View style={{ width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,}}>
<LinearGradient colors= {['#1a5fe1','#00a5ff','#00a5ff']} style={{borderTopRightRadius:20,borderTopLeftRadius:20,height:80,width:'100%',justifyContent:'center',alignItems:'center'}} >
    <View style={{flexDirection: 'row',marginRight:20,marginLeft:20,alignItems:"center",justifyContent:'center'}}> 
       <TouchableOpacity onPress={this.ProfileTouch}>
    
       <View style={{ width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app5icon} ></Image> 
          </View>  
       
          </TouchableOpacity>  
          <TouchableOpacity  onPress={this.DashBoardTouch}>
       
       <View style={{ width: 40,marginLeft:10,
 height: 40,
 borderRadius: 40/2,
justifyContent:'center',alignItems:"center"}} >

 <Image style={{width:20,height:20}}   source={this.state.app1icon} ></Image> 
       </View>    
              
       </TouchableOpacity>   
          <TouchableOpacity onPress={this.CreditCardTouch}>
      
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 20, height: 20}}  source={this.state.app6icon} ></Image>
    
            
          </View> 
       
       
          </TouchableOpacity>  
          <TouchableOpacity>
    
          <View style={{  width: 40,marginLeft:10,backgroundColor:'#fff',
    height: 40,
    borderRadius: 40/2,
  justifyContent:'center',alignItems:"center"}} >
  
    <Image style={{width:20,height:20}}   source={this.state.app2icon} ></Image> 
   
        
          </View> 
      
          
          </TouchableOpacity>  
          <TouchableOpacity onPress={this.App3Touch}>
   
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app3icon} ></Image>
    
           
          </View>   
       
         
          </TouchableOpacity>
          <TouchableOpacity onPress={this.App4Touch}>
     
          <View style={{  width: 40,marginLeft:10,
    height: 40,
    borderRadius: 40/2,
   justifyContent:'center',alignItems:"center"}} >
    
     <Image style={{width:20,height:20}}   source={this.state.app4icon} ></Image> 
    
            
          </View>  
         
          </TouchableOpacity> 
          
          </View>
          </LinearGradient>  
</View>
      </View>
  
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      selectedPrice=(item,itemIndex)=>{
        this.setState({
          Amount:item
        })
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1,   
    backgroundColor: '#fff',
  },
  containers: {
    backgroundColor: 'transparent',
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