import { StyleSheet, 
        Text, 
        View, 
        TouchableOpacity,
        ScrollView,
        Share
        } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Card, TextInput} from 'react-native-paper';

export default function Summary({route, navigation}) {
  var date = new Date().getDate(); //To get the Current Date
  var month = new Date().getMonth() + 1; //To get the Current Month
  var year = new Date().getFullYear(); //To get the Current Year
  var dateString = month + '/'+ date+'/' + year+':'
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          dateString + '\n' + contentAlert + '\n' + 'Breakfast: \n' + totalBreakfast + 'Lunch: \n' + totalLunch + 'Dinner: \n' + totalDinner + 'Custom Foods: \n' + totalCustom
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  const {contentAlert} = route.params;
  const {totalCal} = route.params;
  const {totalProt} = route.params;
  const {totalSodium} = route.params;
  const {totalFat} = route.params;
  const {totalChol} = route.params;
  const {totalCarbs} = route.params;
  const {totalSugar} = route.params;
  const {totalFood} = route.params;
  const {totalBreakfast} = route.params;
  const {totalLunch} = route.params;
  const {totalDinner} = route.params;
  const {totalCustom} = route.params;


return (
<View style={styles.container}>
  <SafeAreaView>
<View style={styles.titleContainer}>
  <TouchableOpacity onPress={()=>navigation.navigate("Tracking")}>
    <Icon name="chevron-left" size={31} color="black"/>
  </TouchableOpacity>
  <View style = {{fontSize:25, alignItems:'center', flex:1, justifyContent:'center'}}>
    <Text style = {{fontSize:25, textAlign:'center'}}>Summary</Text>
 </View>
  </View>
  </SafeAreaView>

  <ScrollView>

  <View style={styles.cardStyle2}>
    <Text style={{fontSize: 44, fontWeight:'bold', marginBottom:-65,textAlign:'center'}}>Nutrition Facts  </Text>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparatorBold} />


    <Text></Text>

    <View style={{flexDirection:'row',marginBottom:-65,marginTop:-15}}>
    <Text style={{fontSize: 35,fontWeight:'bold'}}> Calories: </Text>
    <Text style={{fontSize: 36,fontWeight:'bold'}}>  {totalCal}</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparator} />
    
    <View style={{flexDirection:'row',marginBottom:-65,marginTop:0}}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}> Total Fat: </Text>
    <Text style={{fontSize: 25}}>  {totalFat} g</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparator} />

    <View style={{flexDirection:'row',marginBottom:-65,marginTop:0}}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}> Cholesterol: </Text>
    <Text style={{fontSize: 25}}>  {totalChol} mg</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparator} />


    <View style={{flexDirection:'row',marginBottom:-65,marginTop:0}}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}> Sodium: </Text>
    <Text style={{fontSize: 25}}>  {totalSodium} mg</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparator} />


    <View style={{flexDirection:'row',marginBottom:-65,marginTop:0}}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}> Total Carbs: </Text>
    <Text style={{fontSize: 25}}>  {totalCarbs} g</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparator} />


    <View style={{flexDirection:'row',marginBottom:-65,marginTop:0}}>
    <Text style={{fontSize: 25,fontWeight:''}}>       Total Sugars: </Text>
    <Text style={{fontSize: 25}}>  {totalSugar} g</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>
    <View style={styles.lineSeparator} />


    <View style={{flexDirection:'row',marginBottom:-52,marginTop:0}}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}> Protein: </Text>
    <Text style={{fontSize: 25}}>  {totalProt} g</Text>
    </View>
    <Text style={{fontSize: 50, fontWeight:'bold', textAlign:'center'}}> </Text>

  </View>

  <View style={styles.cardStyle2}>
    <Text style={{fontSize: 25,fontWeight:'bold'}}> Your Foods:  </Text>
    <Text></Text>
    <Text style={{fontSize: 18, fontWeight:'bold'}}> Breakfast Foods:</Text>
    <Text style={{fontSize: 18}}>{totalBreakfast}</Text>
    <Text style={{fontSize: 18, fontWeight:'bold'}}> Lunch Foods:</Text>
    <Text style={{fontSize: 18}}>{totalLunch}</Text>
    <Text style={{fontSize: 18, fontWeight:'bold'}}> Dinner Foods:</Text>
    <Text style={{fontSize: 18}}>{totalDinner}</Text>
    <Text style={{fontSize: 18, fontWeight:'bold'}}> Custom Foods:</Text>
    <Text style={{fontSize: 18}}>{totalCustom}</Text>
  </View>

  <View>
  <TouchableOpacity onPress={onShare}>
     <Card style={styles.wrapButton}>
        <Text style={{fontSize: 20}}> Export Data</Text>
     </Card>
  </TouchableOpacity>
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
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding:16,
  backgroundColor: '#C4580C',
  borderRadius: 20,
  borderColor: "black",
  borderWidth: 2,},
lineSeparatorBold: {
  height: 5,              //thickness
  backgroundColor: 'black',
  marginVertical: 10,     //space around line
  marginHorizontal: 0,   //horizontal margin to control the line's width
},
lineSeparator: {
height: 3,              //thickness 
backgroundColor: 'black',
marginVertical: 10,     // pace around line
marginHorizontal: 0,   //horizontal margin to control the line's width
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
  cardStyle: {
    width: '56%',          // fixed width
    alignSelf:'flex-end',
    marginLeft:9,
    borderRadius:0,
    borderWidth:3,
    borderColor:'black',
    padding:5,
    justifyContent: 'center',
    backgroundColor:'#E9E7E7',
  },cardStyle1: {
    width: '39%',          // fixed width
    borderRadius:0,
    borderWidth:3,
    marginRight:50,
    borderColor:'black',
    justifyContent: 'center',
    padding:5,
    backgroundColor:'#E9E7E7',
  },cardStyle2: {
    margin:20,
    borderRadius:0,
    borderWidth:3,
    borderColor:'black',
    padding:0,
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
    padding:10,             // makes the container take up the full height of the screen
    flexDirection:'row',
    justifyContent: 'flex-start',  // aligns children at the top
    alignItems: 'center',        
    alignItems: 'row',
    paddingTop: 20,    
    backgroundColor: 'white',
},
});

