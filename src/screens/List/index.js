import React, { useState, useEffect, useCallback } from 'react';
import { 
  SafeAreaView,
  RefreshControl,
  View, 
  StyleSheet,
  Dimensions,
  Pressable,
  ImageBackground,
  Image,
  ActivityIndicator,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Text, Avatar, Button, Icon, ListItem } from 'react-native-elements';
import Header from '../../components/Header'
import { getPokemonList, IMG_URL} from '../../api'
import { getPokemonImgId } from '../../utils'
// import { styles } from './styles'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default List = (props) => {
  const [ pokemons, setPokemons ] = useState()
  const [ next, setNext ] = useState()
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    getPokemonList().then(data => {
      setPokemons(data.results)
      setNext(data.next)
    })
  }, [])

  const loadMore = () => {
    setLoadingMore(true)
    getPokemonList(next).then(data => {
      setPokemons([...pokemons, ...data.results])
      setNext(data.next)
      setLoadingMore(false)
    })
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('refreshing')
    wait(2000).then(() => setRefreshing(false));
  }, []);
  
  // useCallback( () => {
  //   setRefreshing(true);
  //     console.log('refreshing')
  //     setRefreshing(false)

  
  // }, []);

  const renderItem = (item) => {
    const path = item.url.split('/')
    const imgID = getPokemonImgId(path[6])
    return(
      <TouchableOpacity onPress={()=>props.navigation.navigate('ListItem', item={item})} style={{ marginVertical:'1%',  alignItems:'center', justifyContent:'center', borderWidth:0.5, borderColor:'#707070', borderRadius:5}}>
        <ListItem style={{width}}>
          
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <Avatar size='large' source={{uri: `${IMG_URL}${imgID}.png`}} />
          
        </ListItem>
      </TouchableOpacity>

    )
  }

    return(
        <View style={styles.container}>
          <View style={styles.mainContent}> 
            <Header />
            <FlatList
              data={pokemons}
              bounces={false}
              renderItem={(item, index)=>renderItem(item.item, index)}
              keyExtractor={(item, index) => index}
              style={{marginTop: height/8}}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={()=>onRefresh()}
                />
              }
              ListFooterComponent={
                loadingMore?
                (<ActivityIndicator />)
                :
                (<Button title='Cargar mas' onPress={()=>loadMore()}/>)
              }
            />
          </View>
        </View>
    )
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        width,
        height,
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
        backgroundColor: 'white',
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