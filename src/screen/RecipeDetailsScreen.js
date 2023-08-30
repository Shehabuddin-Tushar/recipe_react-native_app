import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
	responsiveScreenHeight,
	responsiveScreenWidth,
	responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;

	console.log(item.name);
	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16,marginTop:40 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>
                
				<Pressable onPress={()=>navigation.navigate("Login",{ item: item })}>
				    <FontAwesome name={"heart-o"} size={28} color="white" />
				</Pressable>
				
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop:responsiveScreenHeight(18),
					borderTopLeftRadius: responsiveScreenWidth(15),
					borderTopRightRadius: responsiveScreenWidth(15),
					alignItems: "center",
					paddingHorizontal:  responsiveScreenWidth(4),
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: responsiveScreenHeight(35),
						width: responsiveScreenWidth(80),
						position: "absolute",
						top: -responsiveScreenHeight(15),
						// marginBottom: 130,
						
					}}
				>
					<Image
						source={item.image}
						style={{
							width: responsiveScreenWidth(80),
							height: responsiveScreenHeight(30),
							resizeMode: "contain",
							borderRadius:10,
							borderWidth:5,
							borderColor:item.color
							
						}}
					/>
				</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: 150, fontSize:responsiveScreenFontSize(3.5), fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: responsiveScreenFontSize(2.5), marginVertical: responsiveScreenHeight(3) }}>
							{item.description}
						</Text>

						{/* Recipe Extra Details */}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								// width: "100%",
								// backgroundColor: "green",
							}}
						>
							<View
								style={{
									backgroundColor: "rgba(255, 0, 0, 0.38)",
									// paddingHorizontal: 16,
									paddingVertical: responsiveScreenHeight(4),
									borderRadius: 8,
									alignItems: "center",
									width: responsiveScreenWidth(28),
								}}
							>
								<Text style={{ fontSize: responsiveScreenFontSize(6) }}>⏰</Text>
								<Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 400 }}>
									{item.time}
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: responsiveScreenHeight(4),
									borderRadius: 8,
									alignItems: "center",
									width: responsiveScreenWidth(28),
									// marginHorizontal: 24,
								}}
							>
								<Text style={{ fontSize: responsiveScreenFontSize(6) }}>🥣</Text>
								<Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 400 }}>
									{item.difficulty}
								</Text>
								<Text>
                                   
								</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(255, 165, 0, 0.48)",
									// paddingHorizontal: 16,
									paddingVertical: responsiveScreenHeight(4),
									borderRadius: 8,
									alignItems: "center",
									width: responsiveScreenWidth(28),
								}}
							>
								<Text style={{ fontSize: responsiveScreenFontSize(6) }}>🔥</Text>
								<Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 400 }}>
									{item.calories}
								</Text>
							</View>
						</View>

						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: responsiveScreenFontSize(3), fontWeight: "600", marginBottom: responsiveScreenHeight(2) }}
							>
								Ingredients:
							</Text>

							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: responsiveScreenHeight(1),
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: item.color,
												height: responsiveScreenHeight(1),
												width: responsiveScreenWidth(2),
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: responsiveScreenFontSize(2.5), marginLeft: responsiveScreenWidth(3) }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>

						{/* Recipe Steps */}

						<View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
							<Text
								style={{ fontSize: responsiveScreenFontSize(3), fontWeight: "600", marginBottom: responsiveScreenHeight(2) }}
							>
								Steps:
							</Text>

							{item.steps.map((step, index) => {
								return (
									<Text
										key={index}
										style={{ fontSize: responsiveScreenFontSize(2.5), marginLeft: responsiveScreenWidth(2), marginVertical: responsiveScreenHeight(1) }}
									>{`${index + 1} ) ${step}`}</Text>
								);
							})}
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});