import {View,Text,Button,StyleSheet,TouchableOpacity,Alert, registerCallableModule} from 'react-native'
import React, {useState,useEffect, PureComponent} from 'react'
import {Card, TextInput} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
//import DeviceInfo from 'react-native-device-info';



function CountingComponent(props) {
  data = props.item
  const [counter,setCounter] = useState(data.count)

  useEffect(()=>{
    props.updateCountMain(props.identification, counter)
  },[props.id])

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const deviceIdentifier = await AsyncStorage.getItem('deviceIdentifier');
        //let deviceIdentifier = DeviceInfo.getUniqueId();
        let deviceIdentifier = 1;
        console.log('from useEffect: ' + deviceIdentifier)
        const response = await fetch(`http://127.0.0.1:8000/playground/articles/${props.identification}/`);
        const info = await response.json();
        const deviceCounts = info.count|| {};
        setCounter(deviceCounts[deviceIdentifier] || 0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [props.item.id]);  */

  const updateCount = () => {
      fetch(`http://127.0.0.1:8000/playground/articles/${props.id}/`,
        {
          method:"PUT",
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({title: props.title, calories: props.calories, count: counter, protein: props.protein, meal: data.meal})
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data.count)
        })
    } 

    /*
    const updateCount = () => {
        //const deviceIdentifier = await AsyncStorage.getItem('deviceIdentifier');
        console.log('from updateCount: ')
        fetch(`http://127.0.0.1:8000/playground/articles/${props.id}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: props.title, calories: props.calories, count: counter, protein: props.protein, meal: data.meal,
          })
        })
        .then(resp => resp.json())
        .then(data => {console.log(data.count)})
    }*/

  /*
   //Public server updated count:
  const updateCount = () => {
      fetch(`http://18.217.250.128:8000/playground/articles/${props.identification}/`,
        {
          method:"PUT",
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({title: props.title, calories: props.calories, count: counter, protein: props.protein, meal: data.meal})
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data.count)
        })
    } */
  

  const increment = () => {
      setCounter(counter + 1)
      updateCount()
      props.updateCountMain(props.id,counter)
      console.log("increment")
  }

  const decrement = () => {
      if(counter == 0){
        updateCount()
        return
      }
      console.log(counter)
      setCounter(counter - 1)
      props.updateCountMain(props.id,counter)
      updateCount()
      console.log("decrement")
  }

  return (
      <View>
          <View style = {styles.horizontalAlignment}>
          <View style = {styles.button}>
          <Button 
              title = "-    " 
              onPress={() => decrement()} />
          </View>
          <Text style = {styles.number}>{props.count}</Text>
          <View style = {styles.button}>
          <Button 
              title = "+    " 
              onPress={() => increment()} />
          </View>
          <TouchableOpacity  /> 

          </View>
      </View>
      
  )
}

const styles = StyleSheet.create({
    horizontalAlignment:{
        flexDirection:"row",
        justifyContent:"center",
        textAlign:"center"
    },
    button: {
      backgroundColor:"lightblue",
      borderRadius:50,
      padding:5,
      margin:5,
      fontSize:20,
    },
    number:{
        fontSize:20,
        paddingTop:11,
        margin:5
    }
  });

export default CountingComponent