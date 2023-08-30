import React, { useState,useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { DrawerLayoutAndroid,ActivityIndicator, Alert, Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ButtonGroup } from '@rneui/themed';
import AppNavigator from './src/navigation/AppNavigator';

// const MyName = () => {
//   return (
//     <View>
//       <Text>My name is tushar</Text>
//     </View>
//   )
// }

// const Data = [
//   { id: 1, name: "tushar" },
//   { id: 2, name: "shehab" },
//   { id: 3, name: "rana" },
//   { id: 4, name: "opu" },
//   { id: 5, name: "tushar" },
//   { id: 6, name: "shehab" },
//   { id: 7, name: "rana" },
//   { id: 8, name: "opu" },
//   { id: 9, name: "tushar" },
//   { id: 10, name: "shehab" },
//   { id: 11, name: "rana" },
//   { id: 12, name: "opu" }
// ]

// const MyAlert = () => {
//   Alert.alert(
//     "I am not interested",
//     "This is alert message",
//     [
//       {
//         text: "Ask me leter",
//         onPress: () => console.log("ask me letter")
//       },
//       {
//         text: "Cancel",
//         onPress: () => console.log("cancel")
//       },
//       {
//         text: "Ok",
//         onPress: () => console.log("ok ")
//       }
//     ]
//   )
// }



export default function App() {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  // const [textValue,setTextValue]=useState("");
  // const handletextchange=(e)=>{
  //  setTextValue(e)
  // }

  // const drawer = useRef(null);
  // const [drawerPosition, setDrawerPosition] = useState('left');
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === 'left') {
  //     setDrawerPosition('right');
  //   } else {
  //     setDrawerPosition('left');
  //   }
  // };

  

  return (

    <AppNavigator/>

  );
}

const styles = StyleSheet.create({
  container: {


    flex: 1,
    paddingTop: 50,
    gap: 20
  },

  first: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",


  },
  second: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"

  },
 

  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
 


});

