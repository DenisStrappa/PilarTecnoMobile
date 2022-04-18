import React, { useEffect, useState } from 'react';
import { 
    SafeAreaView,
    View, 
    StyleSheet,
    Dimensions,
    Pressable,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Text, Card, Button, Icon, Image, Divider } from 'react-native-elements';
import Header from '../../components/Header'
import { getPokemon, IMG_URL } from '../../api'
import { getPokemonImgId } from '../../utils'
import Collapsible from 'react-native-collapsible';

// import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default ListItem = (props) => {
    const { url } = props.route.params.item
    const [ pokemon, setPokemon ] = useState()
    const [ imgId, setImgId ] = useState()
    const [ isCollapsed, setIsCollapsed ] = useState(true)

    useEffect(()=>{
        console.log(JSON.stringify(url))
        getPokemon(url).then(data => {
            const path = url.split('/')
            setPokemon(data)
            setImgId(getPokemonImgId(path[6]))
            // console.log('data: '+JSON.stringify(data))
          })
    }, [])

    return(
        <View style={styles.container}>
            <Header leftIcon='arrow-back' title={pokemon?.name} leftAction={()=>props.navigation.goBack()} />
            <ScrollView contentContainerStyle={{marginTop:height/8, flex:1, width}}>
                <View style={{ height:100, width:100, zIndex:2, opacity:.8,  borderRadius:100, right:10, top:10, backgroundColor:'#000000', position:'absolute', justifyContent:'center', alignItems: 'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>{imgId}</Text>
                </View>
                <View style={{flex:1, backgroundColor:'#ffffff'}}>
                    <Image style={{width:'100%', height:'100%'}} resizeMode='contain' source={{uri: `${IMG_URL}${imgId}.png`}}/>
                    
                </View>
                <View style={{height:0.5, width, backgroundColor:'#646464'}}/>
                <View style={{flex:2, backgroundColor:'#ffffff', alignItems:'center'}}>
                    <View style={{height:height/3, width:width/1.1, borderRadius:8, backgroundColor:'red', marginTop:'5%'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16, color:'white'}}><Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Peso:</Text>{pokemon?.weight}</Text>
                        <Text style={{fontSize:16, color:'white'}}><Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Altura:</Text>{pokemon?.height}</Text>
                    </View>
                    <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Tipos</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>Tipos</Text>
                        {/* {pokemon?.types.map(type=>
                            (
                                <Text>{type.type.name}</Text>
                            )
                        )} */}
                    </View>
                    <View>
                    

                    </View>
                        <View style={{flexDirection:'column', backgroundColor:'green'}}>
                            <TouchableOpacity onPress={()=>setIsCollapsed(!isCollapsed)}>
                                <Text>Habilidades</Text>
                            </TouchableOpacity>
                            
                            <Collapsible collapsed={isCollapsed}>
                                {pokemon?.abilities.map(a=>
                                    (
                                        < >
                                            <Text><Text style={{fontSize:30, fontWeight:'bold'}}>.</Text><Text>{a.ability.name}</Text></Text>
                                        </>
                                    )
                                )}
                            </Collapsible>
                            
                        </View>
                    </View>
                </View>

            </ScrollView>
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

    },
    fonts: {
        marginBottom: 8,
      },
      user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
      image: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      name: {
        fontSize: 16,
        marginTop: 5,
      },
    


})