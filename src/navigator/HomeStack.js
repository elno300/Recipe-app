import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import RecipeListScreen from "../screens/RecipeListScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Första skärmen i stacken */}
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{
            title: "Recipes",
            headerStyle: {
              backgroundColor: "#7db18c", // Customize the header background color
            },
          }} 
        />
        {/* Andra skärmen i stacken */}
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{
            title: "Recipe",
            headerStyle: {
              backgroundColor: "#f4511e", // Customize the header background color
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
