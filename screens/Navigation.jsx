import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./FullPost";
import { HomeScreen } from "./Home";
import { StyleSheet } from 'react-native';
import { Header } from "@react-navigation/elements";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} 
                    options={{
                        title:'Home'
                }}/>
                <Stack.Screen name="FullPost" component={FullPostScreen} options={{title: 'orders'}} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};



