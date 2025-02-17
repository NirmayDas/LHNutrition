import { StyleSheet, 
        Text, 
        View, 
        Button,
        TouchableOpacity,
        FlatList,
        Alert,
        Modal,
        TouchableWithoutFeedback,
        } from 'react-native';
import {Card, TextInput} from 'react-native-paper'
import React, {useState,useEffect, Component} from 'react'
import AddComponent from '../components/AddComponent.js';
import CustomCountingComponent from '../components/CustomCountingComponent.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tracking({navigation}) {
  

  const [data, setData] = useState([])
  const [loading,setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('1')
  const [activeCategory2, setActiveCategory2] = useState('1')
  const [activeLine, setActiveLine] = useState('Everything')
  const [activeHall, setActiveHall] = useState(2)
  const [userInput, setUserInput] = useState("")
  const [customItem, setCustomItem] = useState([])
  const [title,setTitle] = useState('J2')
  const [openModal, setOpenModal] = useState(false)
  const menuData = [
    {id: '1', nameOfMenu: 'Breakfast', screenID: 'BreakfastTT'},
    {id: '2', nameOfMenu: 'Lunch', screenID: 'LunchTT'},
    {id: '3', nameOfMenu: 'Dinner', screenID: 'DinnerTT'},
    {id: '4', nameOfMenu: 'Custom', screenID: 'Custom'},]
  const lineData = [
      {id: '18', nameOfLine: 'Everything', DH:1, b:true,l:true,d:true},
      {id: '36', nameOfLine: 'JCL Deli', DH:1, b:true,l:true,d:true}, 
      {id: '37', nameOfLine: 'JCL Comfort', DH:1, b:true,l:true,d:true},
      {id: '38', nameOfLine: 'JCL Vegan Line', DH:1, b:true,l:true,d:true},
      {id: '39', nameOfLine: 'JCL Grill', DH:1, b:true,l:true,d:true},
      {id: '40', nameOfLine: 'JCL WOK', DH:1, b:true,l:true,d:true},
      {id: '41', nameOfLine: 'JCL Salad Bar', DH:1, b:true,l:true,d:true},
      {id: '42', nameOfLine: 'JCL Soup & Bread', DH:1, b:true,l:true,d:true},
      //id: '43', nameOfLine: 'JCL Fresh Fruit', DH:1, b:true,l:true,d:true},
      {id: '44', nameOfLine: 'JCL Dessert', DH:1, b:true,l:true,d:true},

      {id: '1', nameOfLine: 'Everything', DH:2, b:true,l:true,d:true},
      {id: '2', nameOfLine: 'Breakfast Bakery', DH:2, b:true,l:false,d:false},
      {id: '3', nameOfLine: 'Breakfast Offerings', DH:2, b:true,l:false,d:false},
      {id: '4', nameOfLine: 'Fresh Fruit', DH:2, b:true,l:false,d:false},
      {id: '5', nameOfLine: 'Salad Bar Standard Toppings', DH:2, b:true,l:true,d:true},
      {id: '6', nameOfLine: 'FAST Line', DH:2, b:true,l:true,d:true},
      {id: '7', nameOfLine: 'Baked Potato Bar', DH:2, b:false,l:true,d:true},
      {id: '8', nameOfLine: 'Soups', DH:2, b:false,l:true,d:true},
      {id: '9', nameOfLine: 'Salad Bar Standard Vegetables', DH:2,b:false,l:true,d:true},
      {id: '10', nameOfLine: 'Sweet Sensations', DH:2,b:false,l:true,d:true},
      {id: '11', nameOfLine: 'GRILL SPECIAL', DH:2,b:false,l:true,d:true},
      {id: '12', nameOfLine: 'Comfort Line',DH:2, b:false,l:true,d:true},
      {id: '13', nameOfLine: 'Mezze Bar', DH:2,b:false,l:true,d:false},
      {id: '14', nameOfLine: 'Vegan Line', DH:2,b:false,l:true,d:true},
      {id: '15', nameOfLine: 'The Texas Grill', DH:2, b:false,l:true,d:true},
      {id: '16', nameOfLine: 'Pizza Station', DH:2,b:false,l:true,d:true},
      {id: '17', nameOfLine: 'Breakfast to Order', DH:2, b:true,l:false,d:false},


      {id: '35', nameOfLine: 'Everything', DH:3, b:true,l:true,d:true},
      {id: '19', nameOfLine: 'Plant Powered', DH:3, b:true,l:true,d:true},
      {id: '20', nameOfLine: 'Bowl Station', DH:3, b:true,l:true,d:true},
      {id: '21', nameOfLine: 'Soup of the Day', DH:3, b:true,l:true,d:true},
      {id: '22', nameOfLine: 'Yogurt Bar', DH:3, b:true,l:true,d:true},
      {id: '23', nameOfLine: 'Sweet Sensations', DH:3, b:true,l:true,d:true},
      {id: '24', nameOfLine: 'Line Six', DH:3, b:true,l:false,d:false},
      {id: '25', nameOfLine: 'Fruit Stop', DH:3, b:true,l:true,d:true},
      {id: '26', nameOfLine: 'FAST Line', DH:3, b:true,l:true,d:true},

      {id: '27', nameOfLine: 'Chefs Features', DH:3,b:false,l:true,d:true},
      {id: '28', nameOfLine: 'Grill Line', DH:3,b:false,l:true,d:true},
      {id: '29', nameOfLine: 'Farmers Garden', DH:3,b:false,l:true,d:true},
      {id: '30', nameOfLine: 'Vegetables',DH:3, b:false,l:true,d:true},
      {id: '31', nameOfLine: 'Hummus Bar', DH:3,b:false,l:true,d:false},
      {id: '32', nameOfLine: 'U Top It', DH:3,b:false,l:true,d:true},
      {id: '33', nameOfLine: 'Pizza', DH:3, b:false,l:true,d:true},
      {id: '34', nameOfLine: 'Pasta', DH:3,b:false,l:true,d:true},
    ]
  const show = () => setOpenModal(true)
  const hide = () => setOpenModal(false)
  
  const [filteredData, setFilteredData] = useState([]);
  const [temp,setTemp] = useState(0)

  useEffect(() => {
    filterDataFunc()
    //console.log('useeffect 1')
    //console.log('temp', temp)
  }, [activeCategory, activeHall, userInput]); 

  useEffect(() => {
    if(filteredData.length === 0 && temp===0){
      loadData()
      filterDataFunc()
      //console.log('Useeffect 2')
      //console.log('temp', temp)
      if(filteredData.length > 0){
        setTemp(1)
      }
    }
    //console.log('done 1')
    return
  }, [customItem]); 

  const refreshFunc = () => {
    loadData()
    filterDataFunc()
  }

  // Create a new Date object
  const currentDate = new Date();

  // Format the date (this example formats it as "Month Day, Year")
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const filterDataFunc = () => {
    const filtered = customItem.filter(item => {
      if(activeCategory!=4){
      return (
        item.diningHall === parseInt(activeHall) &&
        item.meal === parseInt(activeCategory) &&
        (userInput === '' || item.title.toLowerCase().includes(userInput.toLowerCase())))
      } else {
        return (
          (item.diningHall === 1 || item.diningHall === 2 || item.diningHall === 3)
          && (item.meal == 4) &&
          (userInput === '' || item.title.toLowerCase().includes(userInput.toLowerCase()))
        )
      }
    })
    setFilteredData(filtered);
    //console.log('filteredData')
  }

  const loadData = () => {
    fetch('https://lhmealtracker.com/playground/articles/', { //change this link depending where data being stored
      method: "GET"
    })
    .then (resp => resp.json())
    .then (data=> {
      //console.log(data)
      setLoading(false)
      setCustomItem(data)
    })
    .catch(error => console.log(error))
  } 

  const updateCustomCount = (id, newCount) => {
      setCustomItem(prevItems => 
        prevItems.map(item => 
          item.id === id ? { ...item, count: newCount } : item
        )
      );
      setFilteredData(prevItems => 
        prevItems.map(item => 
          item.id === id ? { ...item, count: newCount } : item
        )
      );
  };

  const closeHandler = (number) => {
    if(number === 1){
      setTitle('JCL')
      setActiveHall(1)
      setActiveCategory('2')
      if(activeCategory2==='35' || activeCategory2==='1'){
        setActiveCategory2('18')
      }
    }
    if(number === 2){
      setTitle('J2')
      setActiveHall(2)
      setActiveCategory('1')
      if(activeCategory2==='35' || activeCategory2==='18'){
        setActiveCategory2('1')
      }
      //setActiveCategory2('1')
    }
    if(number === 3){
      setTitle('Kins')
      setActiveHall(3)
      setActiveCategory('1')
      if(activeCategory2==='18' || activeCategory2==='1'){
        setActiveCategory2('35')
      }
      //setActiveCategory2('35')
    }
    hide()
  }

  function addItem(title, calories, protein, count, servingSize, sodium, fat, chol, carbs, sugar) {
    const newItem = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      calories: calories,
      protein: protein,
      count: count,
      meal: 4,
      servingSize: servingSize,
      diningHall: 2,
      sodium: sodium,
      fat: fat,
      chol: chol,
      carbs: carbs,
      sugar: sugar
    }
    setCustomItem([...customItem, newItem])
    setFilteredData([...filteredData, newItem])
  }

  summaryHandler = () => {
    //console.log("Summary Handler")
    const listSelected = customItem.filter(item=> (item.count >= 1)==true)
    let contentAlert = '';
    let totalCal = 0;
    let totalProt = 0;
    let totalSodium = 0;
    let totalFat = 0;
    let totalChol = 0;
    let totalCarbs = 0;
    let totalSugar = 0;
    let totalFood = ''
    let totalBreakfast = ''
    let totalLunch = ''
    let totalDinner = ''
    let totalCustom = ''
    listSelected.forEach(item=>{
      totalCal = totalCal + item.calories*item.count
      totalProt = totalProt + item.protein*item.count
      totalSodium = totalSodium + item.sodium*item.count
      totalFat = totalFat + item.fat*item.count
      totalChol = totalChol + item.chol*item.count
      totalCarbs = totalCarbs + item.carbs*item.count
      totalSugar = totalSugar + item.sugar*item.count
      totalFood = totalFood + '  ' + item.title + ' (x' + item.count + ')'+ '\n'
      if(item.meal === 1){
        totalBreakfast = totalBreakfast + '  ' + item.title + ' (x' + item.count + ')'+ '\n'
      }
      if (item.meal === 2){
        totalLunch = totalLunch + '  ' + item.title + ' (x' + item.count + ')'+ '\n'
      }
      if(item.meal === 3){
        totalDinner = totalDinner + '  ' + item.title + ' (x' + item.count + ')'+ '\n'
      }
      if(item.meal === 4){
        totalCustom = totalCustom + '  ' + item.title + ' (x' + item.count + ')'+ '\n'
      }

      contentAlert = 
            'Calories: ' + totalCal 
            + '\n' 
            + 'Protein: ' + totalProt.toFixed(1) + 'g' 
            + '\n'
            + 'Sodium: ' + totalSodium.toFixed(1) + 'mg' 
            + '\n'
            + 'Total Fat: ' + totalFat.toFixed(1) + 'g' 
            + '\n'
            + 'Cholesterol: ' + totalChol.toFixed(1) + 'mg' 
            + '\n'
            + 'Carbs: ' + totalCarbs.toFixed(1) + 'g' 
            + '\n' 
            + 'Sugar: ' + totalSugar.toFixed(1) + 'g' 
            + '\n' 
    })
    navigation.navigate('Summary', {totalCal: totalCal,
                                    totalProt:totalProt.toFixed(1),
                                    totalSodium:totalSodium.toFixed(1),
                                    totalFat:totalFat.toFixed(1),
                                    totalChol:totalChol.toFixed(1),
                                    totalCarbs:totalCarbs.toFixed(1),
                                    totalSugar:totalSugar.toFixed(1),
                                    totalFood:totalFood,
                                    totalBreakfast:totalBreakfast,
                                    totalLunch:totalLunch,
                                    totalDinner:totalDinner,
                                    totalCustom:totalCustom,
                                    contentAlert:contentAlert})
  }

  renderDataMenu = (item, activeTextClass) => {
    return(
      <TouchableOpacity 
        style={{backgroundColor: 'rgba(0,0,0,0.07)'}} 
        className="p-2.5 px-5 rounded-full ml-3.5 shadow"
        //onPress={()=>navigation.navigate("LunchTT")}
        onPress={()=>setActiveCategory(id)}
      >
      <Text className={"pb-1 font-semibold" + activeTextClass}>{item.nameOfMenu} </Text>
      </TouchableOpacity> 
    )
  }

  handleLineMenu = (item) => {
    setActiveCategory2(item.id)
    setActiveLine(item.nameOfLine)
    //console.log(activeLine)
  }

  renderData = (item) => {
    if(item.line === activeLine || (activeLine==='Everything')){
    return(
    
    <Card style={styles.cardStyle}>
      <Text style={{ fontSize: 25 }}>{item.title}</Text>
      <Text style={{ fontSize: 20 }}>Calories: {item.calories}</Text>
      <Text style={{ fontSize: 20 }}>Protein: {item.protein}g</Text>
      <Text style={{ fontSize: 20 }}>Serving Size: {item.servingSize}</Text>
      <CustomCountingComponent
        item={item}
        id={item.id}
        title={item.title}
        calories={item.calories}
        protein={item.protein}
        meal={item.meal}
        servingSize={item.servingSize}
        diningHall={item.diningHall}
        count={item.count}
        updateCustomCount={updateCustomCount}
        loadData={loadData}
        setCustomItem={setCustomItem}
      />
    </Card>)}
    
    }
  
  return (
  <View style={styles.Background}>
  <SafeAreaView>
    <View style={{flexDirection:'row'}}>

    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
    <Icon name="chevron-left" size={31} color="black"/>
    </TouchableOpacity>

    <View style = {{fontSize:25, alignItems:'center', flex:1, justifyContent:'center'}}>
    <Text style = {{fontSize:25, textAlign:'center'}}>{title}</Text>
    </View>
    <View>
    <TouchableOpacity onPress={()=>show()}>
    <Icon
      name={'navicon'}
      size={30}
      color='#000'/> 
      <View>
      <Modal
        visible={openModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => closeHandler(activeHall)} >
        <TouchableWithoutFeedback onPress={() => closeHandler(activeHall)}>
          <View style={styles.ModalBackground}>
            <View style={styles.popUp}>
              <TouchableOpacity onPress={() => closeHandler(1)} style={styles.touchableArea}>
                <Text style={styles.touchableText}>JCL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => closeHandler(2)} style={styles.touchableArea}>
                <Text style={styles.touchableText}>J2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => closeHandler(3)} style={styles.touchableArea}>
                <Text style={styles.touchableText}>Kins</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      </View>
    </TouchableOpacity>
    </View>

    </View>

  </SafeAreaView>
  <View>
  <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
      data={menuData}
      className="overflow-visible"
      renderItem= {({item})=>{
        let isActive = item.id==activeCategory;
        let activeTextClass = isActive? 'text-white': 'text-gray-700';
        return(
          <TouchableOpacity 
            style={{backgroundColor: isActive? 'rgba(0,0,0,0.3)':'rgba(0,0,0,0.07)'}} 
            className="p-1.5 pt-2 px-5 rounded-full ml-4 shadow"
            onPress={()=>setActiveCategory(item.id)}>
          <Text className={"pb-1 font-semibold" + activeTextClass}>{item.nameOfMenu} </Text>
          </TouchableOpacity> 
        )
      }}
      keyExtractor = {item => `${item.id}`}
    />
  </View>
  <Text></Text>
  <View>  
  <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}
      data={lineData}
      className="overflow-visible"
      renderItem= {({item})=>{
        let isActive2 = item.id==activeCategory2;
        let activeTextClass2 = isActive2? 'text-white': 'text-gray-700';
        if(item.DH===activeHall){
          if( (activeCategory==='1') && (item.b===true) ){
          return(
            <TouchableOpacity 
              style={{backgroundColor: isActive2? 'rgba(0,0,0,0.3)':'rgba(0,0,0,0.07)'}} 
              className="p-1.5 pt-2 px-5 rounded-full ml-4 shadow"
              onPress={()=>handleLineMenu(item)}
            >
            <Text className={"pb-1 font-semibold" + activeTextClass2}>{item.nameOfLine} </Text>
            
            </TouchableOpacity> 
          )}
          if( (activeCategory==='2') && (item.l===true) ){
          return(
            <TouchableOpacity 
              style={{backgroundColor: isActive2? 'rgba(0,0,0,0.3)':'rgba(0,0,0,0.07)'}} 
              className="p-1.5 pt-2 px-5 rounded-full ml-4 shadow"
              onPress={()=>handleLineMenu(item)}
            >
            <Text className={"pb-1 font-semibold" + activeTextClass2}>{item.nameOfLine} </Text>
            
            </TouchableOpacity> 
          )}
          if( (activeCategory==='3') && (item.d===true) ){
          return(
            <TouchableOpacity 
              style={{backgroundColor: isActive2? 'rgba(0,0,0,0.3)':'rgba(0,0,0,0.07)'}} 
              className="p-1.5 pt-2 px-5 rounded-full ml-4 shadow"
              onPress={()=>handleLineMenu(item)}
            >
            <Text className={"pb-1 font-semibold" + activeTextClass2}>{item.nameOfLine} </Text>
            
            </TouchableOpacity> 
          )}}
      }}
      keyExtractor = {item => `${item.id}`}
    />
    </View>

    <Text></Text>
    <TextInput 
      style={styles.textInputContainer}
      placeholder='Search Food Here'
      onChangeText={(text)=> setUserInput(text)}
      />

    <View>
      {(activeHall === 1 && filteredData.length === 0) && <Text style={{fontSize:25, margin:30, marginTop:100, textAlign: 'center'}}> Currently Unavailable.  </Text>}
    </View>

    <FlatList
        //data = {customItem}
        data={filteredData}
        initialNumToRender={10}
        renderItem = {({item}) => {
        return renderData(item)
      }}
      onRefresh = {() => refreshFunc()}
      refreshing = {loading}
      keyExtractor = {item => `${item.id}`}
    />

      



  <AddComponent 
    setActiveCategory={setActiveCategory} 
    setCustomItem={setCustomItem}
    addItem={addItem}
    />

  <TouchableOpacity onPress={()=> summaryHandler()}>
     <Card style={styles.wrapButton}>
          <Text style={{fontSize: 20}}> Summary </Text>
     </Card>
  </TouchableOpacity>



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
  touchableArea: {
    paddingVertical: 15,  // Increase the touchable area vertically
    paddingHorizontal: 20, // Increase the touchable area horizontally
  },  
    touchableText: {
    fontSize: 25,
  },
  cardStyle: {
    padding:10,
    backgroundColor:'#E9E7E7',
    margin:10
  },
  ModalBackground: {
    flex:"1",
    justifyContent: 'center',
    padding:25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  Background: {
    flex:"1",
    backgroundColor: '#df903b',
    justifyContent: 'center',
    padding:25
  },
  Title: {
    fontSize:50,
    fontWeight: "bold",
    textAlign:'center',
    flexDirection:'row',
    justifyContent:'center',

  },
  HorizMenu: {
    fontSize: 23,
    flexDirection:'row',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  ttScreenButton:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:10,
  },
  ttScreenButtonText:{
    fontSize: 40,
    fontWeight: '500',
    textAlign:'center'
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
  textInputContainer:{
    borderColor: "black",
    borderWidth: 2,
    paddingHorizontal: 0,
    paddingVertical: 5,
    borderRadius: 9,
    marginHoriontal: 16,
    margin: 5,
    height: 30
  }, horizontalAlignment:{
    flexDirection:"row",
    textAlign:"center"
  },
  plusButton:{
    backgroundColor: 'deepskyblue',
    width: 70,
    height: 70,
    position: 'absolute',
    bottom:75,
    right:25,
    borderRadius:50,
    justifyContent:'center',
    alignItems: 'center'
  }, 
  popUp:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    position: 'absolute',
    top: 76,
    right: 20,
},
inputContainer:{
    backgroundColor:'white',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:7,
    borderBottomColor:'#ccc'
},
});
