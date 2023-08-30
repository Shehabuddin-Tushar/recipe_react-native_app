import React from 'react'
import { Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
function Header({headerText,headerIcon}) {
  return (
   <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{fontSize:25,fontWeight:"bold"}}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={30} color="#f96163" />
   </View>
  )
}

export default Header