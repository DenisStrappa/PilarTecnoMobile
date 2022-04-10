import React, { Component, useCallback, useState, useEffect } from "react";
import { SafeAreaView, View, Dimensions, Text, Switch } from "react-native";
import { Icon, Image } from "react-native-elements";
import Geolocation from "react-native-geolocation-service";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { theme } from "../../constans";
import { styles } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RATIO = width / height;
const LATITUDE = -29.412497;
const LONGITUDE = -66.855948;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default Mapa = () => {
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [mapaTipo, setMapaTipo] = useState(false);
  const onRegionChange = (reg) => {
    setRegion(reg);
  };
  const onSwitchChange = () => {
    setMapaTipo(!mapaTipo);
  };
  const fitCoordinates = async () => {
    console.log("Centrando Mapa");
    _getLocation();
  };
  const _getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async (posicion) => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;
        mapRef.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          1000
        );
        setRegion({ ...region, longitude, latitude });
        console.log(
          "posicion actual... Latitud: " +
            `${JSON.stringify(longitude)}` +
            "      latitud: " +
            `${JSON.stringify(latitude)}`
        );
      },
      (error) => {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: "high",
          ios: "best",
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      }
    );
  };
  useEffect(() => {
    _getLocation();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={(map) => {
          mapRef = map;
        }}
        style={styles.mapaContainer}
        initialRegion={region}
        userInterfaceStyle="dark"
        mapType={mapaTipo ? "satellite" : "standard"}
        onRegionChangeComplete={onRegionChange}
      />
      <View style={styles.markerFixed}>
        <Image
          style={styles.marker}
          source={require("../../assets/images/pin.png")}
        />
      </View>
      <SafeAreaView style={styles.viewer}>
        <Text style={styles.region}>
          Longitud:
          {JSON.stringify(region?.longitude)}
          {"\n"}Latitud:
          {JSON.stringify(region?.latitude)}
        </Text>
        <View style={styles.row}>
          <Switch onValueChange={onSwitchChange} value={mapaTipo} />
          <Icon
            name="my-location"
            type="material"
            color={theme.colors.primary}
            onPress={fitCoordinates}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};
