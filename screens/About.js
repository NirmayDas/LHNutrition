import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
        Text, 
        View, 
        Button,
        TouchableOpacity,
        ScrollView,
        FlatList,
        Alert,
        Modal,
        Linking
        } from 'react-native';
import {Card, TextInput} from 'react-native-paper'
import React, {useState,useEffect, Component} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function About({navigation}) {
  const handlePress = () => {
    Linking.openURL('mailto:LHMealTracker@gmail.com');
  };
  

return (
<View style={styles.container}>
  <SafeAreaView>
<View style={styles.titleContainer}>
  <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <Icon name="chevron-left" size={31} color="black"/>
  </TouchableOpacity>
  <View style = {{fontSize:25, alignItems:'center', flex:1, justifyContent:'center'}}>
    <Text style = {{fontSize:25, textAlign:'center'}}>About</Text>
 </View>
  </View>
  </SafeAreaView>

  <ScrollView>
  <View style={styles.cardStyle2}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}>Getting Started:  </Text>
    <Text></Text>
    <Text style={{fontSize: 15, fontWeight:'bold', textAlign:'center'}}>Do not run this app in lower power mode it will slow some features down</Text>
    <Text></Text>
    <Text style={{fontSize: 18}}>1.) Start by going to the tracking page. Use the top right icon (☰) in order to 
    select which dining hall you want. 
    </Text>
    <Text></Text>
    <Text style={{fontSize: 18}}>2.) You can use the tabs at the top to sort by breakfast, lunch, dinner and search the specific item you ate/plan to eat. 
    Select how many approximate servings you ate and press the 'Summary' which will give you a full breakdown of the macros. 
    </Text>
    <Text></Text>
    <Text style={{fontSize: 18}}>3.) If you ate outside the dining hall you can add your own item by pressing the "+" icon in the bottom right. 
    This will add your personal item to your nutrition summary along with other dining hall items. You don't have to include all fields, whatever is left blanks defaults to 0.
    </Text>
    <Text></Text>
    <Text style={{fontSize: 18}}>4.) To reset all counts and custom items pull the first card on any page down twice (you will see a refresh icon). This will fully reset any inputted counts and items.
    </Text>
    <Text></Text>
  </View>

  <View style={styles.cardStyle2}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}>Contact Me:  </Text>
    <Text></Text>
    <Text style={{fontSize: 18}}>For any bug reports please send them to: </Text>

    <TouchableOpacity onPress={handlePress}> 
      <Text style={{fontSize: 18, fontWeight:'bold'} }> LHMealTracker@gmail.com </Text>
    </TouchableOpacity>

    <Text></Text>
    <Text style={{fontSize: 18}}>Or message me on instagram @nirmayd</Text>
    <Text></Text>
  </View>

  <View style={styles.cardStyle2}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}>About the App:  </Text>
    <Text></Text>
    <Text style={{fontSize: 18}}>This app was created by Nirmay Das in order to help UT students 
    who primarily use the dining hall to be able to track macros for the food that they eat. The app re-loads its data everyday at 12:30 AM meaning no items will be on screen for a short period of time while the app resets.
    Everyday the app is updated accordingly with the UT dining hall menus.  </Text>
    <Text></Text>
  </View>


  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  </ScrollView>

</View>

  );
}

// STYLES SHEET
// STYLES SHEET
// STYLES SHEET
// STYLES SHEET
// STYLES SHEET
// STYLES SHEET


const styles = StyleSheet.create({
  container: {
    flex: '1',
    backgroundColor: '#df903b',
},  
wrapButton:{
  alignSelf:'center',
  width: '80%',
  justifyContent: 'center',
  alignItems: 'center',
  padding:30,
  backgroundColor: '#C4580C',
  borderRadius: 20,
  borderColor: "black",
  borderWidth: 2,
},
  cardStyle2: {
    margin:15,
    marginBottom:10,
    borderRadius:10,
    borderWidth:3,
    borderColor:'black',
    padding:5,
    backgroundColor:'#E9E7E7',
    marginTop:0,
  },
    titleContainer:{
        flexDirection: 'row', 
        padding: 10, 
        backgroundColor: '#df903b',
    },
   container2: {
    flex: '1',
    padding:10,             // Makes the container take up the full height of the screen
    flexDirection:'row',
    justifyContent: 'flex-start',  // Aligns children at the top
    alignItems: 'center',          // Optionally, centers the text horizontally
    alignItems: 'row',
    paddingTop: 20,    // Optionally, adds padding from the top
    backgroundColor: 'white',
},
});

