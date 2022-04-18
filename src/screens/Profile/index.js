import React, { Component, useCallback } from 'react';
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
import Header from '../../components/Header'
import { Input, Icon, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { actions } from '../../store/actions'
import { useDispatch } from 'react-redux'

// import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Profile = () => {

    const dispatch = useDispatch()

    const _sigOut = async () => {
        try {
            await AsyncStorage.delItem('user', JSON.stringify(false))
        } catch (e) {
            // saving error
        }
        dispatch(actions.user.setUser(false))
    }

    return(
        <View style={styles.container}>
            <Header />
            <Text>Perfil</Text>
            <View style={{alignItems:'center', width:'90%'}}>
                <Button 
                    title='Salir'
                    onPress={()=>_sigOut()}
                    containerStyle={{width:'90%'}}
                />
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