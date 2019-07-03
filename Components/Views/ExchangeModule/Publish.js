import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet,TextInput, Image,Picker,FlatList,Text,ActivityIndicator,TouchableOpacity,LayoutAnimation,} from 'react-native';
import { Alert } from 'react-native';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';

export default class  Publish  extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);
    
    this.state = {
      dataSource:[],
      cityItems:["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      Amount:'COP',
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
      app2color:'#5099f0',
      app3color:'#5099f0',
      app4color:'#fff',
      app5color:'#5099f0',
      PurchaseColor:'#fff',
      SalesColor:'transparent',
      PurchaseOpacity:1,
      SalesOpacity:0.6,
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
  colors={['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} style={{height:'30%',opacity:0.9}}>    
      <LinearGradient
  colors={['#2D3CAD','#4781DF','#529DF3','#7ED5F6','#97F5F9']} style={{height:'100%',marginRight:30,marginTop:30}}>
 <View style={{justifyContent:'center',alignItems:'center'}}>

          <View style={{flexDirection:'row',marginTop:10}}>
          <Image style={{marginRight:10,width: 18, height: 22,resizeMode:'contain'}}   source={require("../assets/app4.png")} ></Image>     
          <Text style={{fontSize:20,color:'#fff',fontFamily:'Exo2-Regular '}}>Exchange</Text>
          </View>
         
          <View style={{flexDirection:'row',marginTop:10}}>
          <TouchableOpacity onPress={this.PurchaseTab}>
          <View>
          <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',opacity:this.state.PurchaseOpacity,fontFamily:''}}>Buy</Text>  
          <View
  style={{
    marginTop:5,
    width:'100%',
    borderBottomColor: this.state.PurchaseColor,marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
          </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={this.SalesTab}>
        <View>
         <Text style={{fontSize:12,fontWeight:'bold',color:'#fff',marginLeft:30,opacity:this.state.SalesOpacity,fontFamily:''}}>Sell</Text>
         <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:5,
    width:'50%',
    borderBottomColor: this.state.SalesColor,marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
         </View>
        </TouchableOpacity>
       
          
          </View>
          <View style={{width:'80%',borderRadius:25,borderWidth:1,borderColor:'#fff',marginTop:10,marginBottom:20, justifyContent:'space-between',flexDirection:'row'}}>
<View style={{flexDirection:'row',marginLeft:20}}>
<Image  style={{width: 20, height: 20,marginTop:10}}  source={require("../assets/Searchicon.png")} ></Image> 
<TextInput
          style={{height: 40,width:100,color:'#ffffff',fontFamily:'Exo2-Regular'}}
       placeholderTextColor='#ffffff'
          placeholder="Quantity"
          keyboardType = 'numeric'
          maxLength={10}
        />
</View>
<View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
        <Text style={{color:'#fff',fontWeight:'bold',opacity:1,fontSize:12,fontFamily:'Exo2-Regular'}}>{this.state.Amount}</Text>
        <Image  style={{width: 10, height: 10,resizeMode:'contain',marginLeft:10,marginRight:10}}  source={require("../assets/darrow.png")} ></Image> 
        <Picker style={{ position:'absolute', top: 0, width: 1000, height: 1000}}
   selectedValue={this.state.Amount}
  onValueChange={(itemValue, itemIndex) => this.selectedCop(itemValue,itemIndex)}>
  
  <Picker.Item label="COP" value="COP" />
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
          <LinearGradient colors= {['#97F5F9','#7ED5F6','#529DF3','#4781DF','#2D3CAD']} style={{  width: 100,marginLeft:20,position:'absolute',top:'70%',left:120,right:100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor:this.state.app1color,justifyContent:'center',alignItems:"center"}} >
   
    <Image  style={{width: 60, height: 60,resizeMode:'contain'}}  source={require('../assets/publication.png')} ></Image>
    
            
          </LinearGradient> 
          </LinearGradient>    
         


          </LinearGradient>    
    <LinearGradient  colors= {['transparent','transparent','transparent']} style={{marginTop:'20%',position:'absolute',height:'100%',
        top:'30%',left: 0,
        right: 0}}>
         <View style={{flex:1,marginBottom:90}}>
         <FlatList 
      ItemSeparatorComponent={this.space}
      data={this.state.dataSource}
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
    colors={['#4262B5', '#3A549B','#314279','#2C3765','#2A335E']} style={{ borderRadius:25}}>
        <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
          <View style={{flexDirection:'column'}}>
                  
     
     <View style={{flex:1, flexDirection:'row',justifyContent:'space-between'}}>
     <View style={{flexDirection:'row'}}>
     <Text  style={{marginRight:10,marginTop:10,color:"#ABB3D0",fontFamily:'Exo2-Bold',fontSize:11,marginLeft:10}}>{(item.Status=='Completed')?'Dan23':'Dan23'}</Text>  
     <Text  style={{marginRight:10,marginTop:10,fontSize:10,color:'#5496FF',fontFamily:'Exo2-Regular'}}>100</Text>         
     </View>   
     <View>
     <Text  style={{marginRight:10,marginTop:10,marginLeft:10, color:"#ABB3D0",fontFamily:'Exo2-Regular'}}>{(item.Status=='Completed')?'90.000':'90.000'}</Text> 
     <Text  style={{marginTop:10,marginLeft:10, color:'#5496FF',fontFamily:'Exo2-Regular'}}>{(item.Status=='Completed')?'ETH':'BTC'}</Text>  
     </View>  
     <View style={{width:'35%',justifyContent:'center',alignItems:'center'}}>
          <LinearGradient colors={['#7498F9','#9B89F8','#D476F7']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={{padding:7,borderRadius:10,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Payment')}>
<Text style={{color:'#fff',fontFamily:'Exo2-Regular'}}>Exchange</Text></TouchableOpacity>
</LinearGradient>
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

   
   <View
  style={{
    marginLeft:30,marginRight:30,
    marginTop:10,
    borderBottomColor: '#000000',marginBottom:10,
    borderBottomWidth: 1,
  }}
/>  
  
  

</LinearGradient>
</LinearGradient>
     </View>
  
    
    );
      }
      clickedItemText=(item)=>
      {
          Alert.alert(item.Status)
      }
      selectedCop=(item,itemIndex)=>{
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