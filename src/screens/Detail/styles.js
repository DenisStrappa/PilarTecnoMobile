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
    flexDirection: "column",
    justifyContent: "space-around",
  },
  numberContainer: {
    position: "absolute",
    right: 16,
    top: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 48,
    width: 48,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 24,
  },
  header: {
    flex: 0.6,
  },
  title: {
    width,
    textAlign: "center",
    fontSize: 24,
  },
  imageContainer: {
    flex: 1,
    resizeMode: "contain",
  },
  infoContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  abilitiesContainer: {
    width: "100%",
    padding: 5,
    borderRadius: 5,
  },
  abilityText: {
    marginVertical: 5,
    borderRadius: 5,
  },
  movesContainer: {
    flex: 0.4,
    flexGrow: 0.4,
    borderRadius: 15,
    backgroundColor: theme.colors.inactive,
    opacity: 0.7,
  },
  moveName: {
    textAlign: "center",
    width: "100%",
    color: theme.colors.inactive,
  },
});
