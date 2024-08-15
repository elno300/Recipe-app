import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { fetchMeal } from "../utils/api";

export default function RecipeDetailScreen({ route }) {
  const { recipeId } = route.params;
  const [oneRecipe, setOneRecipe] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const meal = await fetchMeal(recipeId);
      setOneRecipe(meal); // Uppdaterar tillståndet i komponenten
      console.log(oneRecipe);
    };

    getMeals();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Detail Screen {recipeId}</Text>
      {/* <Icon name="arrow-back" size={24} color="#007AFF" /> */}
      {/* <Button
        title="Go to List"
        onPress={() => navigation.navigate("RecipeListScreen")} // Navigera till rätt skärmnamn
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
