import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native'

const SignupScreen = ({navigation}) => {
    return <>
    <Text style={{fontSize:48}}>Signup Screen</Text>
    <Button title="Go to sigin" onPress={() => navigation.navigate("Signin")}></Button>
    <Button title="Go to MainFlow" onPress={() => navigation.navigate("mainFlow")}></Button>
    </>
};
 const style = StyleSheet.create({});

 export default SignupScreen;