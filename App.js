import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default App = () => {

    const [todo, setTodo] = useState("");
    const [val, setVal] = useState("");

  const insertItem = async () => {
    try {
      await AsyncStorage.setItem('key1', todo);
      alert('Item saved successfully');
    } catch (e) {
      alert('Error saving data');
    }
  }

  const getItems = async () => {

    try{

        const data = await AsyncStorage.getItem('key1');
        if(data !== null){
            setVal(data);
            setTodo("")
        } else{
          alert('No data found');
        }

    }catch(e){
      alert('Error getting data');
    }



  }

  const clear = async () => {
    try{

        await AsyncStorage.clear();
        setVal("")

    }catch(err){
      alert('Error clearing data');
    }
    }
  
 
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center'}}>

      <Text style={{ fontSize: 25,color:'green' }}>Task daily</Text>
      <Text style={{ fontSize: 27,color:'green',marginTop:10 }}>{val}</Text>

      </View>
      <View>

      <TextInput
        placeholder='write your tasks'
        style={styles.input}
        onChangeText={text => setTodo(text)}
        value={todo}
        />
      <TouchableOpacity style={styles.btn}
        onPress={() => insertItem()}
        >
        <Text style={styles.text}>ADD</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}
        onPress={() =>getItems()}
      >

        <Text style={styles.text}>GET</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
        onPress={() =>clear()}
      >

        <Text style={styles.text}>CLEAR</Text>

      </TouchableOpacity>

        </View>
    </View>
  )
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: 180,
    height: 40,
    backgroundColor: 'green',
    padding: 5,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: '#f1f1f1',
    fontSize: 18
  },
  input: {
    width: 200,
    height: 60,
    color:'green',
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    padding: 5

  }
})