import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {login} = useContext(AuthContext);

    return (
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
                    Don't have an account? Create Here!
                </Text>
            </TouchableOpacity>
        </View>
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
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 60,
        paddingTop: 50,
        marginBottom: 40,
        color: '#051d5f',
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
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});
