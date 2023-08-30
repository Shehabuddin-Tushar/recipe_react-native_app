import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import ProductScreen from '../screen/ProductScreen';
import RecipeDetailsScreen from '../screen/RecipeDetailsScreen';
import LoginScreen from '../screen/LoginScreen';



const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
     
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="productList" component={ProductScreen} />
                <Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator