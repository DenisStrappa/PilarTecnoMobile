import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constans";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  mapaContainer: {
    width,
    height,
    ...StyleSheet.absoluteFill,
    backgroundColor: "black",
  },
  pin: {
    position: "absolute",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 100,
    width: width / 10,
    alignSelf: "flex-end",
    margin: 20,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: "center",
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    resizeMode: "cover",
    height: 48,
    width: 48,
  },
  viewer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    top: (2 * height) / 3,
    position: "absolute",
    width: "70%",
    borderRadius: 15,
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
    alignSelf: "center",
  },
  switchBG: {
    position: "absolute",
    bottom: height / 10,
    right: 8,
    height: 48,
    width: 48,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});
