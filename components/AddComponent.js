import { StyleSheet, Text, View, TouchableOpacity, Modal, Button} from 'react-native';
import {TextInput} from 'react-native-paper'
import React, {useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


function AddComponent(props) {
    const [inputTitle, setInputTitle] = useState('N/A')
    const [inputProt, setInputProt] = useState('0')
    const [inputCal, setInputCal] = useState('0')
    const [inputServ, setInputServ] = useState('N/A')
    const [inputCount, setInputCount] = useState(0)
    const [inputSodium, setInputSodium] = useState(0)
    const [inputFat, setInputFat] = useState(0)
    const [inputChol, setInputChol] = useState(0)
    const [inputCarbs, setInputCarbs] = useState(0)
    const [inputSugar,setInputSugar] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [showMore,setShowMore] = useState(false)
    const show = () => setOpenModal(true)
    const hide = () => setOpenModal(false)
    const AddHandler = () => {
        setInputTitle('N/A')
        setInputProt('0')
        setInputCal('0')
        setInputServ('N/A')
        setInputCount(0)
        setInputSodium(0)
        setInputFat(0)
        setInputChol(0)
        setInputCarbs(0)
        setInputSugar(0)
        setShowMore(false)
        props.setActiveCategory('4')
        show()
    }

    const doneHandler = () => {
        props.addItem(inputTitle,inputCal,inputProt,inputCount,inputServ,inputSodium,inputFat,inputChol,inputCarbs,inputSugar)
        hide()
    }

if(showMore===false){
    return(
        <TouchableOpacity style={styles.plusButton} onPress={()=>(AddHandler())}>
          <Icon name="plus" size={15} color="black"/>
          <Modal
            visible={openModal}
            avoidKeyboard={true}
            animationType='slide'
            transparent={true}
            >
              
            <View style={styles.popUp}>
                
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={hide}>
                    <Text style={{fontSize:15, textAlign:'right'}}> Cancel </Text>
                    </TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
                    <Text style={{fontSize:30, alignSelf:'center'}}>Input Your Own Item:</Text>
                    <Text style={{fontSize:17, alignSelf:'center'}}>(Blanks will default to 0) </Text>
                    <Text></Text>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Title:</Text>
                    <TextInput style={styles.input} 
                               onChangeText={(text)=> setInputTitle(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Calories:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(text)=> setInputCal(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Protein:</Text>
                    <TextInput style={styles.input} 
                               keyboardType='numeric'
                               onChangeText={(text)=> setInputProt(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Serving Size:</Text>
                    <TextInput style={styles.input}
                               onChangeText={(text)=> setInputServ(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Count:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputCount(num)}/>
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Text style={{marginRight:0}}></Text>
                    <Button title='Show More' onPress={()=>setShowMore(true)}></Button>
                    <Text style={{marginLeft:130}}></Text>
                    <Button title='Add Item' onPress={doneHandler}></Button>
                    </View>
                </View>
            </View>
          </Modal>
        </TouchableOpacity>
        )
} if(showMore===true){
    return(
        <TouchableOpacity style={styles.plusButton} onPress={()=>(AddHandler())}>
          <Icon name="plus" size={15} color="black"/>
          <Modal
            visible={openModal}
            animationType='slide'
            transparent={true}
            >

          <KeyboardAwareScrollView>
            <View style={styles.popUp}>
                
                <View style={styles.inputContainer2}>
                    <TouchableOpacity onPress={hide}>
                    <Text style={{fontSize:15, textAlign:'right'}}> Cancel </Text>
                    </TouchableOpacity>
                    <Text></Text>
                    <Text></Text>
                    <Text style={{fontSize:30, alignSelf:'center'}}>Input Your Own Item:</Text>
                    <Text style={{fontSize:17, alignSelf:'center'}}>(Blanks will default to 0) </Text>
                    <Text></Text>
                    <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                    <Text style={styles.textBeforeInput}>Title:</Text>
                    <TextInput style={styles.input} 
                               onChangeText={(text)=> setInputTitle(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Calories:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(text)=> setInputCal(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Protein:</Text>
                    <TextInput style={styles.input} 
                               keyboardType='numeric'
                               onChangeText={(text)=> setInputProt(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Serving Size:</Text>
                    <TextInput style={styles.input}
                               onChangeText={(text)=> setInputServ(text)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Count:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputCount(num)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Sodium:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputSodium(num)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Fat:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputFat(num)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Cholesterol:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputChol(num)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Carbs:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputCarbs(num)}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={styles.textBeforeInput}>Sugar:</Text>
                    <TextInput style={styles.input}
                               keyboardType='numeric'
                               onChangeText={(num)=> setInputSugar(num)}/>
                    </View>
                    <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Text style={{marginRight:0}}></Text>
                    <Button title='Show Less' onPress={()=>setShowMore(false)}></Button>
                    <Text style={{marginLeft:140}}></Text>
                    <Button title='Add Item' onPress={doneHandler}></Button>
                    </View>
                </View>
            </View>

            </KeyboardAwareScrollView>
          </Modal>
        </TouchableOpacity>
        )
}}

const styles = StyleSheet.create({
    textBeforeInput:{
      marginTop:13,fontSize:25, flex:1
    },
    plusButton:{
      backgroundColor: '#C4580C',
      marginBottom:12,
      width: 70,
      height: 70,
      position: 'absolute',
      bottom:75,
      right:25,
      borderRadius:50,
      justifyContent:'center',
      alignItems: 'center',
      borderColor: "black",
      borderWidth: 2,
    },
    popUp:{
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        backgroundColor:'white',
        padding:15,
        width:'90%',
        borderRadius:10,
        marginBottom:115,
    },
    inputContainer2:{
      marginTop:100,
      backgroundColor:'white',
      padding:15,
      width:'90%',
      borderRadius:10,
      marginBottom:115,
  },
  input: {
    height: 30,
    width: '50%',
    margin: 12,
    borderWidth: 1,
    padding: 1,
    borderRadius: 4,
    textAlign: 'left',  // Align text to the right
  },
fill:{flex: 1}
  });

export default AddComponent


    /*
    const AddItem = () => {
        fetch(`http://127.0.0.1:8000/playground/articles/`,
          {
            method:"POST",
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({title: inputTitle, calories: inputCal, count: inputCount, protein: inputProt, meal: '4', servingSize: inputServ, diningHall:2})
          })
          .then(resp => resp.json())
          .then(data => {
            console.log()
          })
      }  */

    /*
        const AddItem = () => {
        fetch(`http://18.217.250.128:8000/playground/articles/`,
          {
            method:"POST",
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({title: inputTitle, calories: inputCal, count: inputCount, protein: inputProt, meal: '4', servingSize: inputServ, diningHall:'2'})
          })
          .then(resp => resp.json())
          .then(data => {
            console.log()
          })
      } */
    /*
    function renderModal() {
        console.log('render modal')
        return(
            <Modal visible={openModal}
                   animationType='slide'
                   transparent={true}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'transparent'
                }}> 
                    <View style={{backgroundColor:'white',padding:15,width:'90%',borderRadius:10}}>
                        <Text> Hello </Text>
                    </View>
                
                </View>

            </Modal>
        )
    }*/
