import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const heigth = Dimensions.get("window").height;
export const theme = {
  colors: {
    primary: "#efc230",
    active: "#efc230",
    inactive: "#25917c",
    bar: "#1abc9c",
  },
  Button: {
    buttonStyle: "red",
    titleStyle: {
      color: "#efc230",
      fontWeight: "bold",
    },
    header: { headerHeigth: heigth / 8 },
  },
};
