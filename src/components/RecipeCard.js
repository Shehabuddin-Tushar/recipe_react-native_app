import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
	responsiveHeight,
	responsiveWidth,
	responsiveFontSize
  } from "react-native-responsive-dimensions";

const RecipeCard = () => {
	const navigation = useNavigation();
	return (
		<View style={{flex:1}}>
           
			<FlatList
				data={recipeList}
				renderItem={({ item }) => (
					<Pressable
					  onPress={() => navigation.navigate("RecipeDetail", { item: item })}
						style={{
							backgroundColor: colors.COLOR_LIGHT,
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 4 },
							shadowOpacity: 0.2,
							shadowRadius:6 ,
							borderRadius: 16,
							marginVertical: 8,
							alignItems: "center",
							paddingHorizontal: 8,
							paddingVertical: 20,
						}}
					>
						<Image
							source={item.image}
							style={{ width: responsiveWidth(40), height: responsiveWidth(40), resizeMode: "center",borderRadius:10,borderWidth:5,borderColor:"#f96163" }}
						/>
						<Text style={{fontSize:20,fontWeight:"bold"}}>{item.name}</Text>
						<View style={{ flexDirection: "row", marginTop: 8 }}>
							<Text >{item.time}</Text>
							<Text> | </Text>
							<View style={{ flexDirection: "row" }}>
								<Text style={{ marginRight: 4 }}>{item.rating}</Text>
								<FontAwesome
									name="star"
									size={16}
									color={colors.COLOR_PRIMARY}
								/>
							</View>
						</View>
					</Pressable>
				)}
				numColumns={2}
				columnWrapperStyle={{
					justifyContent: "space-between",
				}}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default RecipeCard;