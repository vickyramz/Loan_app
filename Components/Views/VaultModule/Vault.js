import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,Picker,NativeModules,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,Animated,Easing} from 'react-native';
import { Alert } from 'react-native';
const { UIManager } = NativeModules;
import Logo from '../../logo'
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
      data1:[require('../assets/biconback.png'),require('../assets/etherem.png'),require('../assets/biconback.png'),require('../assets/etherem.png')],
      Amount:'USDoller',
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate:false,
      AnimatedWidth:new Animated.Value(50),
      AnimatedHieght:new Animated.Value(45),

      RightSideWidth:new Animated.Value(50),
      RightsideHeight:new Animated.Value(45),
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
      ActiveOpacity:1,
      CompleteOpacity:0.5

    };
  
  }
  
  componentDidMount()
  {
     //this.GetListData()
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
    Animated.timing(this.state.AnimatedWidth, {
      toValue: 150,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 50,
    }).start();
    this.setState({click:true})

  }
  else{
    Animated.timing(this.state.AnimatedWidth, {
      toValue: 50,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 50,
    }).start(() => console.log('animation complete'));
    this.setState({click:false})
  }
 
    }
pressRight=()=>{
  if(!this.state.clickopen){
    Animated.timing(this.state.RightSideWidth, {
      toValue: 150,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 10,
    }).start();
    this.setState({clickopen:true})

  }
  else{
    Animated.timing(this.state.RightSideWidth, {
      toValue: 50,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      delay: 10,
    }).start(() => console.log('animation complete'));
    this.setState({clickopen:false})
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
      <LinearGradient colors= {['#354E91','#314682','#283563','#222B50','#21284A']}>
      <ScrollView>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}> 
     
      <Animated.View style={{borderColor:'#c978f8',borderRightWidth:1,borderLeftWidth:0,borderTopWidth:1,borderBottomWidth:1,position:'absolute',height:this.state.AnimatedHieght,width:this.state.AnimatedWidth,borderTopRightRadius:25,borderBottomRightRadius:25,marginTop:10}}>
      <TouchableOpacity onPress={this._onPress}>
      <View>
      <LinearGradient colors={['transparent','transparent','transparent']} style={{justifyContent:'center', alignItems:'flex-end',paddingTop:10,paddingBottom:10}}>
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginRight:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("../assets/iicon.png")} ></Image>     
          </View>        
</LinearGradient>
 </View> 
 </TouchableOpacity>
      </Animated.View> 
   
         
              <Animated.View style={{height:this.state.RightsideHeight,width:this.state.RightSideWidth,borderTopLeftRadius:25,borderBottomLeftRadius:25, marginTop:10,position:'absolute',right:0}}>
              <TouchableOpacity onPress={this.pressRight}>
              <View>
              <LinearGradient colors={['#fff','#fff','#fff']} style={{justifyContent:'center',alignItems:'flex-start',paddingTop:10,paddingBottom:10,borderTopLeftRadius:25,borderBottomLeftRadius:25}}>
           
       <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("../assets/app4-blue.png")} ></Image>         
          </View>
            </LinearGradient>
              </View>
              </TouchableOpacity>           
              </Animated.View>
           
      </View>
   
      
    <View style={{marginTop:20}}> 
    <View style={{flexDirection: 'row',justifyContent:'center',alignItems:"center" }}> 
          <Image  style={{width: 20, height: 20,resizeMode:'contain'}}  source={require("../assets/app2.png")} ></Image>   
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:10,fontSize:16,color:'#fff',fontFamily:'Exo2-Regular'}}>Vault</Text>       
          </View>       
          </View>
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:70,marginTop:10}}>
    <TouchableOpacity onPress={this.ActiveTouch}>
    <View style={{width:80,height:50,borderRightWidth:1,borderRightColor:'#4d6bc1'}}>
    <Text style={{marginLeft:10,marginTop:15,fontSize:14,color:'#FFFFFF',fontFamily:'Exo2-Medium',opacity:this.state.ActiveOpacity}}>Active</Text> 
    </View>
    </TouchableOpacity>
   <TouchableOpacity onPress={this.CompleteTouch}>
   <View style={{width:150,height:50}}>
    <Text style={{marginLeft:20,marginTop:15,fontSize:14,color:'#fff',fontFamily:'Exo2-Medium',opacity:this.state.CompleteOpacity}}>Completed</Text> 
    </View>
   </TouchableOpacity>
    
    </View> 
    <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:50,paddingRight:50}}>
 <Text style={{marginTop:15,fontSize:15,color:'#fff',opacity:0.5,fontFamily:'Exo2-Medium'}}>Monero</Text> 
 <Text style={{marginTop:15,fontSize:15,color:'#fff',opacity:1,fontFamily:'Exo2-Medium'}}>Ethereum</Text> 
 <Text style={{marginTop:15,fontSize:15,color:'#fff',opacity:0.5,fontFamily:'Exo2-Medium'}}>Bitcoin</Text> 
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
   <Image style={{width: 50, height: 50}}   source={require("../assets/biconback.png")} ></Image> 
</LinearGradient>

    </View> 
            </TouchableOpacity>
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('VaultFilter')}>
    <View>
<LinearGradient style={{  width: 90,marginLeft:-20,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#5582ff','#5e5cff','#6730ff']}>
   <Image style={{width: 50, height: 50}}   source={require("../assets/etheremicon.png")} ></Image> 
</LinearGradient>

    </View> 
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
<LinearGradient style={{  width: 90,marginLeft:-20,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#8be6f8','#59a7f2','#3652bd']}>
     <Image style={{width: 50, height: 50}}   source={require("../assets/shareicon.png")} ></Image> 
</LinearGradient>
 
    </View> 
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
<LinearGradient style={{  width: 90,marginLeft:-20,marginRight:-20,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#faaf15','#fbcc0a','#fddf01']}>
      <Image style={{width: 50, height: 50}}   source={require("../assets/ziconback.png")} ></Image> 
</LinearGradient>
 
    </View> 
    </TouchableOpacity>
    <TouchableOpacity>
    <View>
<LinearGradient style={{  width: 90,marginRight:10,
height: 90,
borderRadius: 90/2,
justifyContent:'center',alignItems:"center"}} colors= {['#fd7170','#fa5a76','#f53d7b']}>
        <Image style={{width: 50, height: 50}}   source={require("../assets/miconback.png")} ></Image> 
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
                 <Text style={{marginLeft:10,marginTop:15,fontSize:20,fontWeight:'bold',color:'#ABB3D0',fontFamily:'Exo2-SemiBold'}}>Balance</Text> 
                 </View>
               
               <View style={{ marginTop:10,justifyContent:'center',alignItems:'center'}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <View>
                </View>
                <View>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginLeft:30,fontSize:36,color:'#F5F6F9',fontFamily:'Exo2-SemiBold'}}>4.80258789</Text>
                <View style={{marginTop:-10,marginLeft:5}}>
                
                </View>
                </View>
                                        
                </View>
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:20}}>
                 <View style={{width:40,height:15,backgroundColor:'#314985',justifyContent:'center',alignItems:'center',marginTop:-10,marginRight:30}}>
                <Text style={{fontSize:12,color:'#5496FF',fontFamily:'Exo2-Regular'}}>All</Text>
                
                </View>
				
				
                <Text style={{fontSize:15,color:'#5496FF',fontFamily:'Exo2-Regular'}}>880.889</Text>
                  
               
                
        <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center',marginLeft:-60}}>
        <Text style={{color:'#ABB3D0',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,marginLeft:10,tintColor:'#ABB3D0'}}  source={require("../assets/down_arrow.png")} ></Image> 
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
      data={this.state.data1}
          renderItem={({item,separators})  =>
        <TouchableOpacity onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight} onPress = { this.clickedItemText.bind(this, item)}>
      <View style={{marginLeft:30,marginRight:30, shadowOffset: { width: 10, height: 10 },

  borderBottomWidth: 0,
  shadowColor: '#394d88',
  shadowOffset: { width: 0, height: 12 },
  shadowOpacity: 0.8,
  shadowRadius: 2,
  elevation: 24,
  borderRadius:25}}>
  <LinearGradient
     colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']} style={{ borderRadius:25,paddingTop:10,paddingBottom:10}}>
        <View style={{alignItems:'center',flexDirection:'row',padding:15}}>
        <View style={{justifyContent:'center'}}>
        <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("../assets/etheriumblue.png")} ></Image>
        </View>
      
      
          <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>    
          <View style={{justifyContent:'space-around',alignItems:'center'}}>
          <Text  style={{ fontSize:12,fontFamily:'Exo2-Bold', color:'#ffffff',marginTop:-10}}>ETH</Text> 
          <Text  style={{fontSize:12,color:'#a9b4d4',marginTop:10}}>$435</Text> 
          </View>  
          <View>
          <View style={{flexDirection:'row',marginLeft:20}}>
          <View>
          <Text  style={{fontSize:12,color:'#ABB3D0',marginTop:-10,fontFamily:'Exo2-Regular'}}>{(item.Status!='Completed')?'Produced':"Produced"}</Text> 
          <Text  style={{fontSize:12,fontFamily:'Exo2-Regular',marginTop:10,color:'#ABB3D0'}}>Coins</Text>    
          </View>
          
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:-15}}>
     <Image style={{width: 25, height: 25,resizeMode:'contain',tintColor:'#15E9E9'}}   source={require("../assets/plusblue.png")} ></Image>   
     <View style={{marginTop:5}}>
     <Text  style={{fontSize:12,textAlign:'center',fontFamily:'Exo2-Bold',color:'#2A335E'}}>$ 9060</Text> 
     </View> 
     
     </View>  
          </View>    
         
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:20}}>
          <Text  style={{fontFamily:'Exo2-Regular',color:'#5496FF'}}>+8.5%</Text> 
          <Image style={{width: 10, height: 10,resizeMode:'contain'}}   source={require("../assets/green.png")} ></Image> 
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