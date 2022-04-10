import React, { useState, useEffect, useCallback } from "react";
import {
  RefreshControl,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Avatar, Button, Icon, ListItem } from "react-native-elements";
import Header from "../../components/Header";
import { getPokemonList, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";
import { styles } from "./styles";
import { theme } from "../../constans";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default List = (props) => {
  const [pokemons, setPokemons] = useState();
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {
    getPokemonList().then((data) => {
      setPokemons(data.results);
      setNext(data.next);
    });
  }, []);
  const loadMore = () => {
    setLoadingMore(true);
    getPokemonList(next).then((data) => {
      setPokemons([...pokemons, ...data.results]);
      setNext(data.next);
      setLoadingMore(false);
    });
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("refreshing");
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const renderItem = (item) => {
    const path = item.url.split("/");
    const imgID = getPokemonImgId(path[6]);
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Detail", (item = { item }))}
        style={{
          marginVertical: "1%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <ListItem
          containerStyle={{
            width: width - 5,
            backgroundColor: theme.colors.active,
            borderRadius: 5,
          }}
        >
          <Avatar
            size="large"
            source={{
              uri: `${IMG_URL}${imgID}.png
          `,
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={styles.pokeName}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bgGreenYellow.png")}
        style={styles.mainContent}
      >
        <FlatList
          data={pokemons}
          bounces={false}
          renderItem={(item, index) => renderItem(item.item, index)}
          keyExtractor={(item, index) => index}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator />
            ) : (
              <Button title="Cargar mas" onPress={() => loadMore()} />
            )
          }
        />
      </ImageBackground>
    </View>
  );
};
