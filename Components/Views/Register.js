import * as React from 'react';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { View, StyleSheet, ActivityIndicator, AsyncStorage,Text,Image,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import { Alert } from 'react-native';
import firebase from 'firebase';
import fire from './Fire'
import TouchID from 'react-native-touch-id';
import { NavigationActions } from 'react-navigation'

export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.readUserData = this.readUserData.bind(this)
    this.handleBackButtonClick=this.handleBackButtonClick.bind(this)
    this.createUser=this.createUser.bind(this)
    
    
    this.state=({
      password:null,
      email:null,
      itemsvalue:[],
      status:Boolean,
      locked:true,
      animate:false
    })
  }
  static navigationOptions =({ navigation, screenProps })=> ({
    title:'REGISTRATION',
    headerTitleStyle: {
      color:'#7f7f7f',
        textAlign: 'center',
        flexGrow:1,
        alignSelf:'center',
    },
    headerRight: (<View/>),
    headerLeft: (
      <TouchableOpacity style={{alignContent:'flex-start'}} onPress={() =>navigation.goBack(null)}>
      <View style={{flexDirection:'row'}}>
      <Image  source={require('./assets/left_arrow.png')} style={{marginLeft:10}} ></Image>
      <Text style={StyleSheet.flatten({color:'#1C90C4',marginLeft:10})}>Back</Text>     
      </View>   
      </TouchableOpacity>
    ),
});
  render() {
  
    const {navigate}=this.props.navigation;
    return (  
    <View style={{flex:1,justifyContent:'flex-start',backgroundColor: '#fbfbfb'}}> 
      
       <View style={styles.containers}>
       <View style={styles.loading}>
      <ActivityIndicator size='large' animating = {this.state.animate}
               color = '#bc2b78' />
    </View>
<TextInput style = {styles.input}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              value={this.state.email}
               onChangeText={(email)=>this.setState({email})}   
              placeholder='Email' 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              />
  <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               value={this.state.password}
               onChangeText={(password)=>this.setState({password})}    
               returnKeyType="next" 
               placeholder='Password' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

<TouchableOpacity style={styles.buttonContainer} onPress={this.handleBackButtonClick}>
             <Text  style={styles.buttonText}>Login</Text>
</TouchableOpacity> 
<TouchableOpacity style={styles.buttonContainer} onPress={this.createUser}>
             <Text  style={styles.buttonText}>Create User</Text>
</TouchableOpacity> 
<TouchableOpacity style={styles.buttonContainer} onPress={this.TouchId}>
             <Text  style={styles.buttonText}>Login with Touch ID</Text>
</TouchableOpacity> 
           </View>
    </View>
        
  
    
    );
}

readUserData() {
  var usersRef = firebase.database().ref('Users');
  usersRef.on('value', (snapshot) => {
    let items=snapshot.val()
    this.setState({
      itemsvalue: Object.values(items)
    })
  //  this.state.itemsvalue.length>0?Alert.alert(this.state.itemsvalue[0]):Alert.alert('No value');
   status=(this.state.itemsvalue[0]=='Vicky')?true:true;
   status? this.props.navigation.navigate('Login'):Alert.alert('error in login')
  });

}
createUser=()=>{
  this.props.navigation.navigate('CreateUser')
}
handleBackButtonClick=()=> {
  this.Load()
 if(this.state.email==null)
{Alert.alert('please enter email')}
else if(this.state.password==null)
{Alert.alert('please enter password')}
  else
  {
   
     const user={
'email':this.state.email,
'password':this.state.password
     }
     this._storeData(this.state.email,this.state.password)
     fire.shared.login(user,this.loginsuccess,this.loginfailure)
  }
}
loginsuccess=()=>{
  console.log('login successful, navigate to DshBoard.');
  this.hide()
  this.props.navigation.navigate('Contact',{name:this.state.email})
}
loginfailure=()=>{
  Alert.alert('Login failed')
  this.hide()
}
Load(){
  this.setState({animate:true})
}
hide(){
  this.setState({animate:false})
}
_storeData = async (email,password) => {
  try {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
  } catch (error) {
    // Error saving data
  }
};
TouchId=()=>{
  TouchID.authenticate(`to login with username`)
  .then(success => {
    this._retrieveData()
  })
  .catch(error => {
    Alert.alert('Authentication Failed');
  });
 
}
_retrieveData = async () => {
  try {
    const email = await AsyncStorage.getItem('email');
    const Password = await AsyncStorage.getItem('password');
    if (email !== null && Password!==null) {

      this.setState({
        email:email,
        password:Password
      })
      this.handleBackButtonClick()
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};
}
const styles = StyleSheet.create({
 
  containers: {
    flex: 1,
    justifyContent: 'center',
    
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
  },
  input:{
      height: 50,
     marginTop:10,
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      width: '80%',
      color: '#000'
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle :{
    textAlign: 'center',   
    fontFamily: 'Arial',
    fontSize: 16
},
  buttonContainer:{
      backgroundColor: '#27a8e0',
      width: '80%',
      marginTop:15,
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});