import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image, ScrollView,Alert, ImageBackground, Text, ActivityIndicator, TouchableOpacity, Animated, Easing, AsyncStorage,SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import { ProfileRetrive, TwoFactorApi, ProfileUpdate } from './Api/ProfileRegisterApi'
import ImageResizer from 'react-native-image-resizer';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';
import Spinner from 'react-native-loading-spinner-overlay';
import { ResponseSuccessStatus, InvalidResponse } from './Utils.js/Constant'
const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class Profile extends React.Component {

  static navigationOptions = {
    header: null
  }


  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      cityItems: ["US Doller,Indian,Eutherium"],
      Coin: 'Us Doller',
      animate: false,
      responsestatus:'',
      error: false,
      AnimatedWidth: new Animated.Value(50),
      AnimatedHieght: new Animated.Value(45),
      userName: "",
      photo: null,
      email: "",
      mobileNo: "",
      Country: '',
      spinner: false,
      firstName: "",
      twofactor: '',
      lastName: "",
      dateOfBirth: "",
      address: "",
      address1: "",
      postalCode: "",
      proImgPath: '',
      cityId: 0,
      RightSideWidth: new Animated.Value(50),
      RightsideHeight: new Animated.Value(45),
      app1icon: require('./assets/app1white.png'),
      app6icon: require('./assets/app6.png'),
      app2icon: require('./assets/app2.png'),
      app3icon: require('./assets/app3.png'),
      app4icon: require('./assets/app4.png'),
      app5icon: require('./assets/app2-blue.png'),
      w: 50,
      h: 45,
      wr: 50,
      hr: 45,
      Ahr: 80,
      Awr: 80,
      clickr: false,
      clickopen: false,
      click: false,
      slide: false,
      visible: false,
      hidden: false,
      app1color: '#fff',
      app5color: '#fff',
      mailVerifiedStatus: '',
      mailStatusText: ''

    };

  }

  componentDidMount() {

    this.focusListener = this.props.navigation.addListener('didFocus', () => {
      this.onFocusFunction()
    })

  }
  onFocusFunction = () => {
    this.GetListData()
  }
  componentWillUnmount() {
    this.focusListener.remove()
  }
  getTwoFactors = async () => {
    let userid = await AsyncStorage.getItem('UserId')
    let params =
    {
      "userId": userid,
    }
    TwoFactorApi(params, this.TwoFactorRespose)
  }
  TwoFactorRespose = (data) => {
    if (data.status === 'success') {
      console.log('data', data)
      this.setState({ twofactor: data.twoFactorStatus })

    }
  }
  setEnable = async () => {
    let params =
    {
      "userId": await AsyncStorage.getItem('UserId'),
      "twoFactorAuthenticationStatus": this.state.twofactor,
      "otpSecureKey": ""
    }
    this.props.navigation.push('PicodeEnable', { TwoFactorParams: params ,status:false})
    //TwoFactorApi(params,this.TwoFactorRespose)
  }
  GetListData = async () => {
    this.getTwoFactors()
    let userid = await AsyncStorage.getItem('UserId')
    console.log('userid', userid)
    this.Load()
    ProfileRetrive(this.GetProfileDetails)
  }
  GetProfileDetails = (data) => {
    this.hide()
    this.checkEmailStatus()
    console.log('data.retrieveData', data)
    if (data != 'undefined') {
      if (data.status === ResponseSuccessStatus) {
        console.log('data.retrieveData', data.retrieveData)

        this.setState(
          {
            userName: data.retrieveData.userName,
            userId: data.retrieveData.userId,
            email: data.retrieveData.email,
            mobileNo: data.retrieveData.mobileNo,
            dateOfBirth: data.retrieveData.dateOfBirth,
            firstName: data.retrieveData.firstName,
            lastName: data.retrieveData.lastName,
            proImgPath: data.retrieveData.proImgPath,
            mailVerifiedStatus: data.retrieveData.gmailstatus,
            Country: data.retrieveData.countryName
          })
      
      }
      else if (data.error === 'invalid_token') {
        Alert.alert(
          'Error',
          'Token Expired',
          [
            { text: 'OK', onPress: () => this.props.navigation.navigate("Login") },
          ],

        );
      }
    }
    else {
      Alert.alert(data);
    }
  }

  Load() {
    this.setState({ spinner: true })
  }
  hide() {
    this.setState({ spinner: false })
  }
  space() {
    return (<View style={{ height: 10, width: 1, backgroundColor: 'black' }} />)
  }
  _onPress = () => {
    if (!this.state.click) {
      Animated.timing(this.state.AnimatedWidth, {
        toValue: 100,
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        delay: 50,
      }).start();
      this.setState({ click: true })

    }
    else {
      Animated.timing(this.state.AnimatedWidth, {
        toValue: 50,
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        delay: 50,
      }).start(() => console.log('animation complete'));
      this.setState({ click: false })
    }

  }
  pressRight = () => {
    if (!this.state.clickopen) {
      Animated.timing(this.state.RightSideWidth, {
        toValue: 100,
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        delay: 10,
      }).start();
      this.setState({ clickopen: true })
    }
    else {
      Animated.timing(this.state.RightSideWidth, {
        toValue: 50,
        duration: 250,
        easing: Easing.inOut(Easing.ease),
        delay: 10,
      }).start(() => console.log('animation complete'));
      this.setState({ clickopen: false })
      Alert.alert(
        'Alert!!',
        'Are you sure want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => this.Logout() },
        ],

      );
    }
  }
  Logout = async () => {
    await AsyncStorage.removeItem("UserId");
    this.props.navigation.navigate('Login')
  }
  render() {
    let image={uri:this.state.proImgPath+'?'+new Date().getDate()}
    console.log('this.state.proImgPath', this.state.proImgPath)
    if (this.state.animate) {
      return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator
          color='#1a5fe1'
          size="large"
          style={styles.activityIndicator} />
      </View>
    }
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#354E91'}}>
      <View style={styles.Maincontainers}>
        <LinearGradient colors={['#354E91', '#314682', '#283563', '#222B50', '#21284A']} style={{ flex: 1 }}>
          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            overlayColor='rgba(0,0,0,0.5)'
            animation='fade'
            size='large'
            color='#f4347f'
            textStyle={styles.spinnerTextStyle}
          />
  <Dialog 
    visible={this.state.visibles}>
    <DialogContent>
     <View style={{width:300,height:110,alignItems:'center'}}>
         <View style={{alignItems:'center',paddingTop:10}}>
         <Image style={{width: 50, height: 50,resizeMode:'contain'}}   source={require("./assets/successtik.png")} ></Image>     
         </View>
         <View style={{paddingTop:10,paddingBottom:10}}>
         <Text style={{fontSize:15,color:'#454976',fontFamily:'Exo2-Regular',textAlign:'center'}}>{this.state.responsestatus}</Text>           
         </View>
     </View>
    </DialogContent>
  </Dialog>
          <ImageBackground source={require('./assets/topCurve.png')} imageStyle={{ resizeMode: 'stretch', width: '100%', height: '100%' }} style={{ flex: 0.35, position: "relative" ,zIndex:1}}>
            <View style={{ alignItems: 'center', position: 'absolute', top: 10, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' }}>
              <Image style={{ width: 25, height: 25, resizeMode: 'contain' }}  source={require("./assets/app5.png")} ></Image>
              <Text style={{
                color: '#fff', fontSize: 15, fontWeight:
                  'bold', marginLeft: 10, fontFamily: 'Exo2-Regular'
              }}>User</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,zIndex:1}}>
              <Animated.View style={{
                backgroundColor: '#fff', height: this.state.AnimatedHieght, width: this.state.AnimatedWidth, justifyContent: 'center', borderWidth: 1, alignItems: 'flex-end',
                borderColor: '#fff',
                marginTop: 10,
                borderTopEndRadius: 25, borderBottomEndRadius: 25,
              }}>
                <TouchableOpacity onPress={()=>this._onPress()}>
                  <View>

                    <View style={{ flexDirection: 'row' ,justifyContent:'space-between'}}>
                    <View style={{ justifyContent: 'center' }}>
                            <Text style={{ color: '#000', fontFamily: 'Exo2-Regular', alignSelf:'flex-start' ,fontSize: 12, }}>Ratings</Text>
                          </View>
                          <View style={{marginLeft:10}}>
                          <Image style={{ marginRight: 10, width: 30, height: 30 }} source={require("./assets/star.png")} ></Image>
                          </View>
                    
                      
                    </View>


                  </View>
                </TouchableOpacity>
              </Animated.View>
              <Animated.View style={{ backgroundColor: '#fff', height: this.state.RightsideHeight, width: this.state.RightSideWidth, justifyContent: 'center', borderTopStartRadius: 25, borderBottomStartRadius: 25, marginTop: 10 }}>
                <TouchableOpacity onPress={()=>this.pressRight()}>
                  <View >

                    <View style={{ flexDirection: 'row' }}>
                      <Image style={{ marginLeft: 10, width: 30, height: 30 }} source={require("./assets/logout.png")} ></Image>
                      <View style={{ justifyContent: 'center', }}>
                            <Text style={{ color: '#000', fontFamily: 'Exo2-Regular', fontSize: 12, marginLeft: 10 }}>Logout</Text>
                          </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </Animated.View>

            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Image style={{ marginLeft: 10, width: 30, height: 30, marginTop: 20, marginRight: 10, resizeMode: 'contain' }} source={require("./assets/setting1.png")} ></Image>
            </View>
            <View style={{ alignItems: 'center', position: 'absolute', bottom: 0, right: 0, justifyContent: 'center', left: 0, top: -10 }}>
            <TouchableOpacity onPress={()=>this.BeginAction()}>
            <View style={{ width: 100, height: 105, borderRadius: 25, backgroundColor: '#fff' }}>
               <Image  style={{ width: 100, height: 105, borderRadius: 25 }} source={image} />
                <Image style={{ width: 25, height: 25, marginTop: -25, alignSelf: 'flex-end' }} source={require("./assets/profileround.png")} ></Image>
              </View>
            </TouchableOpacity>
              
            </View>

          </ImageBackground>

          <View style={{ flex: 0.75 }}>

            <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff',  opacity: 0.9, fontFamily: 'Exo2-Regular' }}>{this.state.userName}</Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>First Name</Text>
                </View>

                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, textAlign: 'center', opacity: 0.7, fontFamily: 'Exo2-Regular' }}>{this.state.firstName}</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>Last Name</Text>
                </View>

                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, opacity: 0.7, fontFamily: 'Exo2-Regular' }}>{this.state.lastName}</Text>
                </View>

              </View>

              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>Date Of Birth</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, opacity: 0.7, fontFamily: 'Exo2-Regular' }}>{this.state.dateOfBirth}</Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>Country</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, opacity: 0.7, fontFamily: 'Exo2-Regular' }}>{this.state.Country}</Text>
                </View>

              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>E-mail</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, opacity: 0.7, fontFamily: 'Exo2-Regular' }}>{this.state.email}</Text>
                </View>

              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />

              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>Coin purse</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, opacity: 0.7, fontFamily: 'Exo2-Regular' }}>Bit coin</Text>
                </View>

              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ flexDirection: 'row', marginLeft: 30 }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#4286f4', marginTop: 10, fontFamily: 'Exo2-Regular' }}>Version</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12,  color: '#fff', marginTop: 10, opacity: 0.7, fontFamily: 'Exo2-Regular' }}>2.0.4</Text>
                </View>


              </View>
              <View
                style={{
                  marginTop: 10,
                  borderBottomColor: '#43549c', marginBottom: 10,
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity onPress={this.setEnable}>
                  <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                      <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('./assets/keys.png')} ></Image>
                        <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require("./assets/monitor1.png")} ></Image>
                      </View>
                      <View style={{ alignItems: 'center', marginLeft: 30 }}>
                        <Text style={{ color: '#4286f4', fontSize: 15, textAlign: 'center', marginTop: 5, fontFamily: 'Exo2-Regular' }}>{(this.state.twofactor == 1) ? 'Enabled' : 'Disabled'}</Text>
                        <Text style={{ color: '#4286f4', fontSize: 15, textAlign: 'center', marginTop: 10, fontFamily: 'Exo2-Regular' }}>E-wallet web</Text>
                      </View>

                    </View>
                  </View>
                </TouchableOpacity>


              </View>
              <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20, justifyContent: 'space-between' }}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require("./assets/notify.png")} ></Image>
                  <Text style={{ color: '#4286f4', fontSize: 10, textAlign: 'center', fontFamily: 'Exo2-Regular' }}>Notification</Text>

                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require("./assets/secure-user.png")} ></Image>
                  <Text style={{ color: '#4286f4', fontSize: 10, textAlign: 'center', fontFamily: 'Exo2-Regular' }}>Security</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require("./assets/terms.png")} ></Image>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#4286f4', fontSize: 10, textAlign: 'center', fontFamily: 'Exo2-Regular' }}>Terms of use</Text>
                  </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                  <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require("./assets/Share.png")} ></Image>

                  <Text style={{ color: '#4286f4', fontSize: 10, textAlign: 'center', fontFamily: 'Exo2-Regular' }}>Invite Friends</Text>


                </View>
              </View>
              <View style={{ marginTop: 30, justifyContent: 'center', alignItems: "center" }}>
                <View style={{ width: '70%', }}>
                  <LinearGradient colors={['#f4347f', '#f85276', '#fe7a6e']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <TouchableOpacity>
                      <Text style={{ color: '#fff' }}>{this.state.mailStatusText}</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                {(this.state.visible) ? <View style={{ width: '50%', marginTop: 20 }}>
                  <LinearGradient colors={['#3ddba1', '#30e0ba', '#17e8e3']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 10, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <TouchableOpacity>
                      <Text visible style={{ color: '#fff' }}>Resend e-mail</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View> : null}</View>
            </ScrollView>
          </View>

        </LinearGradient>
      </View>
</SafeAreaView>
    );
  }
  clickedItemText = (item) => {
    Alert.alert(item.Status)
  }

  checkEmailStatus = () => {
    console.log('checkEmailStatus', this.state.mailVerifiedStatus)
    if (this.state.mailVerifiedStatus === '0') {

      console.log("mailStatusText", "Your Email is'nt verified")
      this.setState({ mailStatusText: "Your Email is'nt verified" })
      this.setState({ visible: true })
    } else {
      console.log("mailStatusText", "Your Email is verified")
      this.setState({ mailStatusText: "Your Email is verified" })
      this.setState({ visible: false })
    }

  }
  BeginAction = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
       else {
        this.setState({
          proImgPath: response.uri
        });
        this.GetImageFile(response)
        //this.UpdateProfile(response.uri, response.fileName)
      }
    });
   
  }
  GetImageFile=(data)=>
  {
    ImageResizer.createResizedImage(data.uri, 100, 100, 'JPEG', 100).then((response) => 
    {
      this.UpdateProfile(response.uri, response.name)
      
    }).catch((err) => {
      console.log(err)
    });
  
    
  }
  UpdateProfile = (uri, name) => {
    this.Load()
    ProfileUpdate(uri, name, this.GetResponse,this.error)
  }
  GetResponse=(data)=>
  {
    if(data.status==='success')
    {
      this.hide()
      console.log('data',data)
     this.setState({visibles:true,responsestatus:'Profile picture Updated Successfully'})
     setTimeout(this.timeoutIn, 1500);
    }
  }
  timeoutIn=()=>
  {
    this.setState({visibles:false})
    this.GetListData()
  }
  error=(data)=>
  {
    this.hide()
    Alert.alert('Alert',data)
  }



}



const styles = StyleSheet.create({

  Maincontainers: {
    flex: 1,
  },
  containers: {
    backgroundColor: 'transparent',
    marginTop: 5,

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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: '#fbfbfb',


  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 0.5,

    borderColor: '#d6d7da',
    width: '50%',
    color: '#000'
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 16
  },
  buttonContainer: {
    backgroundColor: '#27a8e0',
    width: '40%',
    marginTop: 15,

    paddingVertical: 15
  },
  SignInbuttonContainer: {
    backgroundColor: '#7f7f7f',
    width: '40%',
    marginTop: 15,
    marginLeft: 10,
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
});