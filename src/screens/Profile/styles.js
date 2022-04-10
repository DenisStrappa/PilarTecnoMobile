import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../constans";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: "black",
  },
  mainContent: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    borderRadius: 15,
    flexDirection: "column",
  },
  infoContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  column: {
    flex: 0.6,
  },
  bio: {
    flexGrow: 0.1,
    width: width-5,
    height: height / 5,
    padding: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "red",
  },
});
