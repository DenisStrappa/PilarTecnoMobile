import { 
  View, 
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const theme = {
  colors:{
    primary:'cyan',
    active: '#36b8ff', //'rgb(41,34,97)',
    inactive: '#8b96a7',
    bar:'#293847',
  },
  Button: {
    buttonStyle:'red',
    titleStyle: {
      color: '#293847',
      fontWeight:'bold'
    },
  },
  headerHeight: height/8
};