import {View,Text,Button,StyleSheet,TouchableOpacity,Alert, registerCallableModule} from 'react-native'
import React, {useState,useEffect, forwardRef, Component, PureComponent} from 'react'
import {Card, TextInput} from 'react-native-paper'

class ClassCC extends Component{
  data = this.props.item

  constructor(props){
    super(props)
    this.updateCount = this.updateCount.bind(this)
    this.state = {counter:0}
  }

  shouldComponentUpdate(){
    return true
  }

  updateCount = () => {
    fetch(`http://127.0.0.1:8000/playground/articles/${this.props.identification}/`,
      {
        method:"PUT",
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({title: this.props.title, calories: this.props.calories, count: this.state.counter, protein: this.props.protein, meal: this.data.meal})
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data.count)
      })
  }


  increment = () => {
    console.log("increment")
    this.updateCount()
    this.props.updateCountMain(this.props.item.id, this.state.counter)
    //this.setState({counter: this.props.item.count + 1})
    this.setState((prevstate=>({counter:prevstate.counter+1}) ))
    //this.setState({counter: this.state.counter+1}, ()=>this.state.counter )

    this.updateCount()
    this.props.updateCountMain(this.props.item.id, this.state.counter)
  }

  decrement = () => {
    console.log("decrement")
    if(this.state.counter == 0){
      return
    }
    this.updateCount()
    this.props.updateCountMain(this.props.item.id, this.state.counter)
    //this.setState({counter: this.props.item.count - 1})
    this.setState((prevstate=>({counter:prevstate.counter-1}) ))
    //this.setState({counter: this.state.counter1}, ()=>this.state.counter )

    this.updateCount()
    this.props.updateCountMain(this.props.item.id, this.state.counter)
    //if((this.counter) < 0){
    //  this.setState(0)
    //}
  }

render(){
const {counter}=this.state
return (
  <View>
    <View style = {styles.horizontalAlignment}>

    <View style = {styles.button}>
    <Button 
      title = "-    " 
      onPress={() => this.decrement()} />
    </View>

    <Text style = {styles.number}>Item: {this.props.item.count}  |</Text>

    <Text style = {styles.number}>Local: {counter}</Text>

    <View style = {styles.button}>
    <Button 
      title = "+    " 
      onPress={() => this.increment()} />
    </View>
  </View>
</View>
)}
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

export default ClassCC;