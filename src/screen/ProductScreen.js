import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'

function ProductScreen() {
    return (
        <View style={{ paddingTop: 50, marginHorizontal: 16,flex:1 }}>
            <Header headerIcon={"bell-o"} headerText={"Hi, tushar"} />

            <SearchFilter icon="search" placeholder={"enter your fav recipe"} />

            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}
                <CategoriesFilter />
            </View>
           
                <Text style={{ fontSize: 22, fontWeight: "bold",marginBottom:5 }}>Recipes</Text>
                {/* Recipes list */}
                
                <RecipeCard />
            
        </View>
    )
}

export default ProductScreen