import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import UserList from './screens/UserList'
import CreateUserScreen from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailScreen'


function Mystack (){
  return (
  <Stack.Navigator>
  <Stack.Screen name='UserList' component={UserList} options={{ title:'Users list'}}/>
  <Stack.Screen name='Create User' component={CreateUserScreen} options={{ title:'Create New Users'}}/>
  <Stack.Screen name='UserDetailScreen' component={UserDetailScreen} options={{ title:'User Detail'}}/>
</Stack.Navigator>
)
}


export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
