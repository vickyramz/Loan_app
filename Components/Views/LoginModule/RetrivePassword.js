import * as React from 'react';
import { Path } from 'react-native-svg'
import { View, StyleSheet, Image, Animated, TextInput, Text, Easing, TouchableOpacity, LayoutAnimation, KeyboardAvoidingView, BackHandler, AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import BackgroundIcon from '../../Background'
import { ForgotAPI } from '../Api/LoginApi'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions, StackActions } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
export default class RetrivePassword extends React.Component {

    static navigationOptions = {
        header: null
    }


    constructor(props) {
        super(props);
        this.RotateValueHolder = new Animated.Value(0);
        this.state = {
            dataSource: [],
            cityItems: ["US Doller,Indian,Eutherium"],
            Coin: 'Us Doller',
            animate: false,
            Username: '',
            Password: '',
            clickr: false,
            clickopen: false,
            click: false,
            slide: false,
            visible: false,
            hidden: false,
            app1color: '#fff',
            app5color: '#fff'
        };

    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        this.props.navigation.navigate('Launch'); // works best when the goBack is async
        return true;
    }

    Load() {
        this.StartImageRotateFunction();
        this.setState({ animate: true })
    }
    hide() {
        this.setState({ animate: false })
    }
    space() {
        return (<View style={{ height: 10, width: 1, backgroundColor: 'black' }} />)
    }
    _onPress = () => {
        if (!this.state.click) {
            LayoutAnimation.spring();
            this.setState({ w: this.state.w + 50 })
            this.setState({ click: true })
        } else {
            LayoutAnimation.spring();
            this.setState({ w: 50 })
            this.setState({ click: false })
        }

    }
    pressRight = () => {
        if (!this.state.clickr) {
            LayoutAnimation.spring();
            this.setState({ wr: this.state.wr + 50 })
            this.setState({ clickr: true })
        } else {
            LayoutAnimation.spring();
            this.setState({ wr: 50 })
            this.setState({ clickr: false })
        }
    }
    SlideMenu = () => {
        if (!this.state.slide) {
            LayoutAnimation.spring();
            if (this.state.Awr > 80) {
                this.setState({ Awr: 80 })
                this.setState({ slide: false })
            }
            else {
                this.setState({ Awr: this.state.Awr + 250 })
                this.setState({ slide: true })
            }

        }
        else {
            LayoutAnimation.spring();
            this.setState({ Awr: 80 })
            this.setState({ slide: false })
        }
    }
    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
        Animated.timing(this.RotateValueHolder, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(() => this.StartImageRotateFunction());
    }
    render() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        const { shift } = this.state;
        const { navigate } = this.props.navigation;
        const data = [50, 60, 70, 95, 100, 120, 100, 80, 90, 60, 50, 40, 60, 100]
        const Line = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'#5099f0'}
                fill={'none'}
            />
        )


        if (this.state.animate) {
            return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Animated.Image
                    style={{ width: 100, height: 100, resizeMode: 'contain', transform: [{ rotate: RotateData }], }}
                    source={require('../assets/loader.gif')}
                />
                <Text style={{color:'#4e649f',fontSize:36,marginTop:10,fontFamily:'Exo2-Bold'}}>Loading...</Text>
            </View>
        }
        return (

            <View style={styles.Maincontainers} >


                <LinearGradient

                    colors={['#FFFFFF', '#DFE1ED', '#CCCFE2']} style={styles.Maincontainers}>

                    <View style={{ flex: 0.4 }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', paddingTop: 20
                        }}>
                            <Image style={{ width: 150, height: 150, resizeMode: 'contain' }} source={require("../assets/app-logo.png")} ></Image>

                        </View>
                    </View>
                    <View style={{ flex: 0.7, position: 'relative' }}>

                        <Image
                            style={{ width: 500, height: 500, resizeMode: 'contain', opacity: 0.1, position: 'absolute', bottom: 30, }}
                            source={require('../assets/bgLogo.png')}
                        />

                        <KeyboardAvoidingView

                            behavior='padding'
                        >
                            <View style={{
                                paddingVertical: 10, marginLeft: 30, marginRight: 30
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ resizeMode: 'contain', width: 20, height: 20 }} source={require("../assets/userIcon.png")} ></Image>
                                    </View>

                                    <TextInput placeholder="Enter email address"
                                        placeholderTextColor="#3d5498"
                                        onChangeText={(text) => this.setState({ Username: text })}
                                        style={styles.inputBox} />
                                </View>


                            </View>

                            <View style={{
                                paddingVertical: 50
                            }}>


                                <TouchableOpacity onPress={this.LoginAction}>
                                    <View>
                                        <LinearGradient colors={['#4476d7', '#4f92e9', '#61bff2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>

                                            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', fontFamily: "Poppins-Medium" }}>FORGOT THE PASSWORD</Text>

                                        </LinearGradient>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </LinearGradient>


            </View>


        );
    }
    clickedItemText = (item) => {
        Alert.alert(item.Status)
    }
    LoginAction = () => {
        this.ForgotAction()
    }

    ForgotAction = () => {
        if (this.state.Username == '') {
            Alert.alert('Alert', "please enter email address")
        }
        else {
            this.Load()
            ForgotAPI(this.state.Username, this.ForgotResult)
        }

    }
    ForgotResult = (data) => {
        this.hide()
        if (data.status === 'success') {
            this.props.navigation.navigate('ForgotPassword')
        }
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
    },
    inputBox: {
        paddingVertical: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#3d5498',
        height: 45, width: "90%",
        fontFamily: 'Exo2-Regular'
    }
});