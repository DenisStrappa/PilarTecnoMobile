import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../../constans";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const { colors } = theme;

export const styles = StyleSheet.create({
  container: {
    height,
    width,
    padding: 5,
    backgroundColor: "black",
    alignContent: "center",
    justifyContent: "center",
  },
  logInContainer: {
    height: "50%",
    width: "100%",
    borderRadius: 15,
    backgroundColor: colors.inactive,
    justifyContent: "space-around",
    opacity: 0.7,
  },
  signInTitle: {
    color: colors.active,
    fontSize: 20,
    fontWeight: '900',
    alignSelf: "center",
  },
  label: {
    color: colors.active,
  },
  input: {
    color: colors.active,
  },
  buttonStyle: {
    width: "90%",
    backgroundColor: colors.primary,
    alignSelf: "center",
  },
});
