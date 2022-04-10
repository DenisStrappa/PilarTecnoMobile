import { types } from "@babel/core";
import React, { Component, useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import { IMG_URL, getPokemon } from "../../api";
import { getPokemonImgId } from "../../utils";
import { styles } from "./styles";
import { theme } from "../../constans";
import { ScrollView } from "react-native-gesture-handler";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default Detail = (props) => {
  const [pokemon, setPokemon] = useState({});
  const { url, name } = props.route.params.item;
  const path = url.split("/");
  const imgID = getPokemonImgId(path[6]);
  useEffect(() => {
    getPokemon(url).then((item) => {
      setPokemon(item);
    });
  }, []);
  const renderItem = (item) => {
    const { move } = item;
    return (
      <View
        style={{
          marginVertical: "1%",
          alignItems: "center",
          justifyContent: "center",
          trnasparent: "true",
        }}
      >
        <ListItem
          containerStyle={{
            borderRadius: 15,
            width: "100%",
            backgroundColor: theme.colors.active,
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.moveName}>
              {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/images/bgGreenYellow.png")}
      >
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{imgID}</Text>
        </View>
        <View style={styles.header}>
          <Image
            source={{ uri: `${IMG_URL}${imgID}.png` }}
            style={styles.imageContainer}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Text>
            <Text>
              Tipo:{" "}
              {pokemon.types?.map((value, index) => {
                if (index == 0) {
                  return (
                    value.type.name.charAt(0).toUpperCase() +
                    value.type.name.slice(1)
                  );
                } else {
                  return `/ ${
                    value.type.name.charAt(0).toUpperCase() +
                    value.type.name.slice(1)
                  }`;
                }
              })}
            </Text>
            <Text>Altura: {pokemon?.height * 10}cm</Text>
            <Text>Peso: {pokemon?.weight / 10}kg</Text>
            <View style={styles.abilitiesContainer}>
              <Text>Habilidades:</Text>
              <ScrollView>
                {pokemon.abilities?.map((value, index) => (
                  <Text style={styles.abilityText} key={index}>
                    {value.ability.name.charAt(0).toUpperCase() +
                      value.ability.name.slice(1)}
                  </Text>
                ))}
              </ScrollView>
            </View>
          </View>
        </View>

        <Text style={[styles.moveName,{fontSize: 20}]}>Movimientos:</Text>
        <FlatList
          data={pokemon?.moves}
          bounces={false}
          renderItem={(item, index) => renderItem(item.item, index)}
          keyExtractor={(item, index) => index}
          style={styles.movesContainer}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
