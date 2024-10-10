import { StyleSheet, 
        Text, 
        Image, 
        View, 
        Button,
        TouchableOpacity,
      Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';


const halfLH = require("../assets/halflonghorn.png")
const halfLH2 = require("../assets/halflonghorn2.png")
const { width, height } = Dimensions.get('window')


export default function HomeScreen({navigation}) {
  
  return (
  <View style={styles.Background}>
    <SafeAreaView style={styles.iconContainer}>

    <TouchableOpacity onPress={()=>alert('Account creation coming soon, unavailable for now')}>
    <Icon name="user" size={40} color="black"/>
    </TouchableOpacity>

    </SafeAreaView>
    

    <View style={styles.Top}>
      <Image source={halfLH} style={styles.image1}></Image>

      <Image source={halfLH2} style={styles.image2}></Image>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.baseText}>
        <Text style={styles.Title1}> Longhorn </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.Title2}> Nutrition</Text>
      </Text>
    </View>

    <Text></Text>

    <View style={styles.mainScreenButton}> 
         <Text style={styles.mainScreenButtonText} onPress={()=>navigation.navigate("Tracking")}>Start Tracking</Text>
    </View>
        <Text></Text>
        <Text></Text>
    <View style={styles.mainScreenButton}> 
         <Text style={styles.mainScreenButtonText} onPress={()=>navigation.navigate("About")}>About</Text>
    </View>
        <Text></Text>
        <Text></Text>
  </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Georgia',
  },
  iconContainer: {
    position: 'absolute',
    top: 20, 
    left: 20, 
  },
  Background: {
    flex:"1",
    backgroundColor: '#df903b',
    justifyContent: 'center',
    padding:25
  },
  image1:{
    width:150,
    height:150,
    marginLeft:-25,
  },
  image2:{
    width:150,
    height:150,
    marginRight:-25,
  },
    textContainer: {
      position: 'absolute',
      top: height * 0.35, // 35% of the screen height
      left: 0,
      right: 0,
      alignItems: 'center',
      paddingHorizontal: width * 0.05, // 5% of the screen width as padding
    },
  Top: {
    flexDirection:'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    paddingHorizontal: -10,
    paddingBottom:80,
  },
  Title1: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign:'center',
    flexDirection:'row',
  },
  Title2: {
    fontSize: 43,
    fontWeight: 'bold',
    textAlign:'center',
    flexDirection:'row',
  },
  mainScreenButton:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:30,
  },
  mainScreenButtonText:{
    fontSize: 40,
    fontWeight: '500',
    textAlign:'center'
  }
  
});
