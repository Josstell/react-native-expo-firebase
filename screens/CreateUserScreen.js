import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'

function CreateUserScreen(props) {
    const [state, SetState] = useState({
        name:'',
        email:'',
        phone:''
    })

const handleChangeText = (name, value) => {
    SetState({ ...state, [name]: value})
}

const saveNewUser = async() => {
    if (state.name === '') {
        alert('Por favor provee un nombre.')
    }else{
        try
      { 
          await firebase.db.collection('users').add({
            name: state.name,
            email: state.email,
            phone: state.phone
        })
        props.navigation.navigate('UserList')
    } catch (e) {
        console.log(e.error)
    }
    }

}
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Name user' onChangeText={(value)=>handleChangeText('name',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Email user' onChangeText={(value)=>handleChangeText('email',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Phone user' onChangeText={(value)=>handleChangeText('phone',value)}/>
            </View>
            <View>
                <Button title='Save users' onPress = {()=>saveNewUser()}/>
            </View>
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container : {
        flex:1,
        padding:35
    },
    inputGroup: {
       flex: 1,
       padding:0,
       marginBottom:15,
       borderBottomWidth:1,
       borderBottomColor: '#cccccc' 
    }
})

export default CreateUserScreen

