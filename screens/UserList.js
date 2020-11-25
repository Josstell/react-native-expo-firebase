import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'

function UserList(props) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapShot => {
            const users = []
            querySnapShot.docs.forEach(doc => {
                const { name, email, phone } = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUsers(users)
        })
    }, [])

    return (
       <ScrollView>
           <Button title = 'Create User'
            onPress={()=> props.navigation.navigate('Create User')}   
           />
           {
               users.map( user => {
                   return (
                       <ListItem key={user.id} bottomDivider onPress={()=>{
                           props.navigation.navigate('UserDetailScreen', { 
                               userId: user.id
                           })
                       }}>
                       <ListItem.Chevron />
                       <Avatar
                            rounded
                            source={{
                                uri:
                                'https://reactnativeelements.com/img/avatar/avatar--edit.jpg',
                            }}
                            />
                           <ListItem.Content >
                               <ListItem.Title>{user.name}</ListItem.Title>
                               <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                               <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>
                           </ListItem.Content>
                       </ListItem>
                   )
               })
           }
       </ScrollView>
    )
}

export default UserList

