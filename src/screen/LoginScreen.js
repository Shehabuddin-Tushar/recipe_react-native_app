import { Image, Pressable, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";
export default function LoginScreen({ navigation, route }) {
    const { item } = route.params;
    //console.log(item)
    return (
        //    <KeyboardAvoidingView
        //     behavior={Platform.OS === 'ios' ? 'padding' : 'height' } style={{flex:1}}>

        <View style={{ backgroundColor: item.color, flex: 1 }}>
            <View style={{ marginTop: 40, marginLeft: 18 }}>
                <Pressable style={{}} onPress={() => navigation.goBack()}>
                    <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
                </Pressable>
            </View>
            <ScrollView
                style={{ backgroundColor: "#fff", borderTopLeftRadius: responsiveScreenWidth(50), marginTop: responsiveScreenHeight(10), }}
            >
                <View
                    style={{
                        backgroundColor: "#fff",
                        flex: 1,
                        marginTop: responsiveScreenHeight(10),
                        borderTopLeftRadius: responsiveScreenWidth(50),

                        alignItems: "center",
                        paddingHorizontal: responsiveScreenWidth(4),
                    }}
                >
                    <View>
                        <Image style={{ height: responsiveScreenHeight(20), width: responsiveScreenWidth(50),borderRadius:50 }} source={{ uri: "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" }} />
                    </View>

                    <View style={styles.input}>
                        <Ionicons name="person" size={20} color={item.color} />

                        <TextInput style={{ paddingLeft: 8, fontSize: responsiveFontSize(2), color: "#000" }} placeholder="Enter your name">

                        </TextInput>
                    </View>


                    <View style={styles.input} >
                        <MaterialIcons name="email" size={24} color={item.color} />


                        <TextInput style={{ paddingLeft: 8, fontSize: responsiveFontSize(2), color: "#000" }} placeholder="Enter your Email">

                        </TextInput>
                    </View>

                    <View style={styles.input}>
                        <MaterialIcons name="email" size={24} color={item.color} />


                        <TextInput style={{ paddingLeft: 8, fontSize:responsiveFontSize(2), color: "#000" }} placeholder="Enter your Password">

                        </TextInput>
                    </View>

                   

                        <TouchableOpacity style={{ backgroundColor: item.color,width:responsiveScreenWidth(40),height:responsiveScreenHeight(6),alignItems:"center",justifyContent:"center",borderRadius:10,marginTop:responsiveScreenHeight(1.3)}} onPress={() => console.log("ok")}>
                            <Text style={{color:"#fff",fontSize:responsiveFontSize(2.5),fontWeight:"bold"}}>Log in</Text>
                        </TouchableOpacity>
             




                </View>
            </ScrollView>
        </View>


        //    </KeyboardAvoidingView>



    )
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: "#eeeee4",
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 10,
        width: responsiveScreenWidth(75),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
    }
})