import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    ImageBackground,
    Image
} from 'react-native';
import Header from '../../../components/Header'
import { Input, Icon, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from '../../../store/actions'
import { useDispatch } from 'react-redux'
import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

// import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default SignIn = () => {
    const [email, setEmail] = useState('')
    const [pw, setPw]= useState('')

    const dispatch = useDispatch()

    useEffect(()=>{
        GoogleSignin.configure({
            webClientId: '754931594100-7p0f6ttpmksccrllrcbmt6tmlmiot04a.apps.googleusercontent.com',
          });
    }, [])

    const onChangeEmail = (value) => {
        setEmail(value)
    }

    const onChangePW = (value) => {
        setPw(value)
    }

    const _sigIn = async () => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(true))
        } catch (e) {
            // saving error
        }
        dispatch(actions.user.setUser(true))
    }

    const onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
     

    return(
        <View style={styles.container}>
            
            <View style={{flexDirection:'column', width}}>
                <View style={{marginVertical:'10%'}}>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:22, color:'#606060'}}>Ingresar a Pilar Tecno</Text>
                </View>
                
                <Input
                    placeholder='Correo Electronico'
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChangeText={value=>onChangeEmail(value)}
                />
                <Input
                    placeholder='Contraseña'
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={value=>onChangePW(value)}
                    keyboardType='number-pad'
                />
                <View style={{alignItems:'center'}}>
                    <Button 
                        title='Ingresar'
                        onPress={()=>_sigIn()}
                        containerStyle={{width:'90%'}}
                    />
                </View>
                <View style={{alignItems:'center', marginTop:20}}>
                    <Button 
                        title='Continuar con Google'
                        onPress={()=> onGoogleButtonPress().then(async(data)=>{
 
                            console.log('Signed in with Google!')
                            if(data){
                              console.log('res login: '+JSON.stringify(data.user))
                              try {
                                await AsyncStorage.setItem('user', JSON.stringify(data.user))
                              } catch (e) {
                                console.log('ubo un error :'+e)
                              }
                              dispatch(actions.user.setUser(data.user))
                          }
                          })
               }
                        containerStyle={{width:'90%'}}
                    />
                </View>
                
            </View>

        </View>
    )
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
    buttonContent: {
        width: width/3,
        height: width/3,
        margin:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems: 'center'
    },
    mainContent: {
        flex: 1,
        width,
        height,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    rowConten: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize:18,
        fontWeight: 'bold',

    }
    


})