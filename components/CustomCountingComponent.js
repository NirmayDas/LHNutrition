import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import React, {useState,useEffect} from 'react'


function CustomCountingComponent(props) {
  data = props.item
  const [counter,setCounter] = useState(0)

  useEffect(()=>{
    setCounter(props.count)
  },[props.count])


  const increment = () => {
      const newCounter = counter + 1;
      setCounter(newCounter);
      props.updateCustomCount(props.id,newCounter);
  }

  const decrement = () => {
      if(counter == 0){
        return
      }
      const newCounter = counter - 1;
      setCounter(newCounter);
      props.updateCustomCount(props.id,newCounter);
  }

  return (
      <View>
          <View style = {styles.horizontalAlignment}>
          <View style = {styles.button}>
          <Button 
              color="black"
              title = "-    " 
              onPress={() => decrement()} />
          </View>
          <Text style = {styles.number}>{props.count}</Text>
          <View style = {styles.button}>
          <Button 
              color='black'
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
      backgroundColor:"#D8722A",
      borderRadius:50,    
      borderColor: "black",
      borderWidth: 1,
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

export default CustomCountingComponent