import React, { useState, useEffect, useCallback } from 'react';
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
import { Icon } from 'react-native-elements'
import Header from '../../components/Header'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

// import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ASPECT_RATIO = width / height;
const LATITUDE = -32.9320576;
const LONGITUDE = -68.822851;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default Mapa = (props) => {
    const [ region, setRegion ] = useState({
        latitude:LATITUDE,
        longitude:LONGITUDE,
        latitudeDelta:LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    )

    useEffect(()=>{
        // _getLocation()
    }, [])

    onRegionChange = region => {
        console.log(region)
        setRegion(region)
    }

    const fitCoordinates = async () => {
        console.log('centrando mapa')
        _getLocation()
      }
     

    _getLocation = async ()=>{
        await Geolocation.getCurrentPosition(
          async posicion => {
            const  longitude =  posicion.coords.longitude;
            const  latitude =  posicion.coords.latitude;
            this.mapRef.animateToRegion(
              {
                latitude,
                longitude,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta
              },
              1000
            );
            setRegion({region:{...region, longitude,latitude}})
            console.log('posicion actual... Latitud: '+`${JSON.stringify(longitude)}`+' latitud: '+`${JSON.stringify(latitude)}`)
     
          },
          (error) => {
            console.log('')
            console.log('')
            console.log('')
            console.log('')
            console.log(error.code, error.message);
          },
          {
            accuracy: {
              android: 'high',
              ios: 'best',
            },
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 10000,
            distanceFilter: 0,
            forceRequestLocation: true,
          }
        )
     }
     
 

    return(
        <View style={styles.container}>
            <Header />
            <MapView
                initialRegion={region}
                style={styles.map}
                mapType='standard'
                onRegionChangeComplete={(region)=>onRegionChange(region)}
            >
                <View style={{position:'absolute', zIndex:2, marginTop:height/7, right:'1%', flexDirection:'row', backgroundColor:'white', borderRadius:100, width:width/10, alignSelf:'flex-end', margin:20, marginRight:30, alignItems:'center', justifyContent:'center'}}>
                    <Icon                               
                    name="crosshairs"
                    type="font-awesome"
                    color='#8d2d84'
                    size={width/10}
                    // onPress={() => this.fitCoordinates()}
                    />
                </View>

                <View style={styles.markerFixed}>
                    <Image style={styles.marker} source={require('../../assets/images/pin.png')} />
                </View>

                <SafeAreaView style={styles.footer}>
                    <Text style={styles.region}>longitud: {JSON.stringify(region.longitude)}{"\n"}latitud: {JSON.stringify(region.latitude)}</Text>
                </SafeAreaView>

            </MapView>   
        </View>
    )
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
      },
      footer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        bottom: 80,
        position: 'absolute',
        width: '100%'
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

    },
    map: {
        ...StyleSheet.absoluteFillObject,
        width,
        height,
        alignSelf:'center'
      },
    markerFixed: {
        zIndex:2,
        left: '50%',
        marginLeft: -24,
        marginTop: -48,
        position: 'absolute',
        top: '50%'
    },
    marker: {
        height: 48,
        width: 48
      },
    region: {
        color: '#fff',
        lineHeight: 20,
        margin: 20,
        alignSelf:'center'
    }

     

})