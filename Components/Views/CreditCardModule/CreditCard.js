import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image,ScrollView,NativeModules,Text,ActivityIndicator,TouchableOpacity,Animated,Easing} from 'react-native';
import { Alert } from 'react-native';


import LinearGradient from 'react-native-linear-gradient';

export default class CreditCard  extends React.Component {

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
      AnimatedWidth:new Animated.Value(50),
      AnimatedHieght:new Animated.Value(45),

      RightSideWidth:new Animated.Value(50),
      RightsideHeight:new Animated.Value(45),
      app1icon:require('../assets/app1white.png'),
      app6icon:require('../assets/app6-blue.png'),
      app2icon:require('../assets/app2.png'),
      app3icon:require('../assets/app3.png'),
      app4icon:require('../assets/app4.png'),
      app5icon:require('../assets/app5.png'),
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
      app5color:'#fff'
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
      toValue: 100,
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
      toValue: 100,
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
AppTouch=()=>{
}
VaultTouch=()=>{
  this.setState({
    app2color:'#fff',
    app2icon:require('../assets/app2.png')    
  })
  this.props.navigation.navigate('Vault');
}
App3Touch=()=>{
  this.props.navigation.navigate('Price')
}
ExchangeTouch=()=>{
  this.props.navigation.navigate('ExchangeMenu')
}
DashBoardTounch=()=>{
  this.props.navigation.navigate('DashBoard',{
    DashBoardPopup: false,
  })
}
ProfileTouch=()=>{
  this.props.navigation.navigate('Profile')
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
          <ScrollView>
      <View style={{}}> 

       <LinearGradient
   colors= {['#354E91','#314682','#283563','#222B50','#21284A']} style={{height:'100%',paddingBottom:100}}>   

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <Animated.View style={{backgroundColor:'transparent',height:this.state.AnimatedHieght,width:this.state.AnimatedWidth,justifyContent:'center',borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1, alignItems:'flex-end',position:'absolute',
  borderColor: '#436ab7',
  marginTop:10,
  borderTopEndRadius:25,borderBottomEndRadius:25,
  }}>
  <TouchableOpacity onPress={this._onPress}>
<View>
 <View style={{flexDirection: 'row'}}> 
    <Image style={{marginRight:10,width: 30, height: 30}}   source={require("../assets/icon13.png")} ></Image>     
    </View>
</View>
</TouchableOpacity>
      </Animated.View>
      <Animated.View style={{backgroundColor:'transparent', borderColor: '#436ab7',height:this.state.RightsideHeight,width:this.state.RightSideWidth,justifyContent:'center', borderTopStartRadius:25,borderBottomStartRadius:25, marginTop:10,borderLeftWidth:1,borderTopWidth:1,borderBottomWidth:1,position:'absolute',right:0}}>
            <TouchableOpacity onPress={this.pressRight}>
            <View>
            <View style={{flexDirection: 'row'}}> 
          <Image style={{marginLeft:10,width: 20, height: 20}}   source={require("../assets/icon14.png")} ></Image>     
     
          </View>
            </View>
       
          </TouchableOpacity>
            </Animated.View>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:20}}>
    <View>
    <Image style={{marginLeft:10,width: 30, height: 30,resizeMode:'contain'}}   source={require("../assets/app6.png")} ></Image>     
    </View>
        <Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:15,marginLeft:20,fontFamily:''}}>Credit Card</Text>
    </View>
    <View style={{marginTop:30}}> 
   
             <View>
         
             <View  style={{justifyContent:'center',alignItems:'center'
        }}>
              <Image  style={{width: 300, height: 300,resizeMode:'contain'}}  source={require("../assets/threelogo.png")} ></Image> 
                 
            
        </View>
      

        <View style={{marginTop:50}}>
        
        <View  style={{justifyContent:'center',alignItems:'center',flexDirection:'row'
        }}>
 <Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:20,marginLeft:10,fontFamily:''}}>Request a Card</Text>
 <TouchableOpacity onPress={this.AddCardAction}>
 <View>
<Image  style={{width: 40, height: 40,marginLeft:10,resizeMode:'contain' }}  source={require("../assets/plusflash.png")} ></Image> 
</View>
 </TouchableOpacity>

        </View>
        <View  style={{ justifyContent:'center',alignItems:'center',marginTop:20
        }}>
<Image  style={{  width:400,height:150,
    resizeMode: 'contain',}} source={require("../assets/creditCard.png")} ></Image> 
</View>

</View>


</View>
             </View>    
               
 </LinearGradient> 
 </View>
 </ScrollView>
     </View>
      
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      BeginAction=()=>{
        this.props.navigation.navigate('Verify');
      }
      AddCardAction=()=>{
        this.props.navigation.navigate('CardDetails')
      }
}



const styles = StyleSheet.create({
 
  Maincontainers: {
    flex: 1, 
    height:'100%'
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