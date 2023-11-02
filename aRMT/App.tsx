import React from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Today from "./Pages/Today";
import Task from "./Pages/Task";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const App = () => { 
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={Login} name="Login" options={{headerShown: false}} />
                <Stack.Screen component={Home} name="Home" options={{headerShown: false}} />
                <Stack.Screen component={Today} name="Today" options={{ headerShown: false }} />
                <Stack.Screen component={Task} name="Task" options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App; 