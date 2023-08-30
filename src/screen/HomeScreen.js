import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
	responsiveScreenHeight,
	responsiveScreenWidth,
	responsiveScreenFontSize
  } from "react-native-responsive-dimensions";
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center",paddingTop:20 }}>
			<Image
				source={{uri:"https://i.postimg.cc/G3YVN5tv/recipe-removebg-preview.png"}}
				style={{ marginTop: 50,height:responsiveScreenHeight(40),width:responsiveScreenWidth(100)}}
			/>

			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold",paddingTop:50 }}>
				40K+ Premium Recipes
			</Text>

			<Text
				style={{
					fontSize: 42,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Cook Like A Chef
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("productList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>

        )
}

export default HomeScreen