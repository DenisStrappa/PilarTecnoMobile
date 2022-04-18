import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Pressable,
    ImageBackground,
    Alert
} from 'react-native';
import Header from '../../components/Header'
import { theme } from '../../constants'
// import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default Home = (props) => {
    const { headerHeight } = theme

    const _onHomePress = () => {
        Alert.alert(
            "Hola",
            "Ya te encuentras en home",
            [
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    const _rocket = () => {
        Alert.alert(
            "Cohete",
            "Presionaste el cohete",
            [
            { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    return(
        <View style={styles.container}>
            <Header />
            <ImageBackground style={styles.mainContent} source={require('../../assets/images/fondoL2.png')}>
                
                <View style={{paddingTop:headerHeight}}>
                <View style={styles.rowConten}>
                    <Pressable 
                        style={[styles.buttonContent, { backgroundColor: 'rgba(60, 179, 113, 0.5)'}]}
                        onPress={()=>_onHomePress()}
                    >
                        <Text style={styles.title}>Home</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.buttonContent, { backgroundColor: 'rgba(238, 0, 238, 0.5)'}]}
                        onPress={()=>props.navigation.navigate('Perfil')}
                    >
                        <Text style={styles.title}>Perfil</Text>
                    </Pressable>
                </View>
                <View style={styles.rowConten}>
                    <Pressable 
                        style={[styles.buttonContent, { backgroundColor: 'rgba(255, 165, 0, 0.5)'}]}
                        onPress={()=>props.navigation.navigate('Lista')}
                    >
                        <Text style={styles.title}>Lista</Text>
                    </Pressable>
                    <Pressable 
                        style={[styles.buttonContent, { backgroundColor: 'rgba(0, 165, 188, 0.8)'}]}
                        onPress={()=>props.navigation.navigate('Mapa')}
                    >
                        <Text style={styles.title}>Mapa</Text>
                    </Pressable>
                </View>
                </View>
            </ImageBackground>
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
        alignItems: 'center',
        // opacity: .5
    },
    mainContent: {
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
        color:'white',
        width: '100%',
        textAlign: 'center',
        fontSize:18,
        fontWeight: 'bold',

    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
      },
      heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
      },
      headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
      },
      subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
})