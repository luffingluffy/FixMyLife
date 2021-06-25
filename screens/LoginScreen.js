import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login} = useContext(AuthContext);

    return (
        <ImageBackground source={require('../assets/17255402.jpg')} style={{height: '100%', width: '100%'}}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    FixMyLife
                </Text>
                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    placeholderText="Email"
                    iconType='user'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <FormInput
                    labelValue={password}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    placeholderText="Password"
                    iconType='lock'
                    secureTextEntry={true}
                />
                <FormButton
                    buttonTitle="Sign In"
                    onPress = {() => login(email, password)}
                />
                <TouchableOpacity style={styles.forgotButton} onPress={() => alert("Todo")}>
                    <Text style={styles.navButtonText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <SocialButton
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color='#de4d41'
                    backgroundColor='#f5e7ea'
                    onPress={() =>{}}
                />
                <SocialButton
                    buttonTitle="Sign In with Facebook"
                    btnType="facebook"
                    color='#4867aa'
                    backgroundColor='#e6eaf4'
                    onPress={() =>{}}
                />
                <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.navButtonText}>
                        Don't have an account? Create here
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'HeadlinerNo.45',
        fontSize: 120,
        paddingTop: 50,
        marginBottom: 40,
        color: '#f0f8ff',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#f0f8ff',
        fontFamily: 'Lato-Regular',
    },
});
