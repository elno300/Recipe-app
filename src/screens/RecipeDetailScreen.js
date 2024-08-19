import React from "react";
import {
  View,
  Text,
  // Button,
  Image,
  StyleSheet,
  // FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { fetchMealById } from "../utils/api";
import { LinearGradient } from "expo-linear-gradient";

export default function RecipeDetailScreen({ route }) {
  const { recipeId } = route.params;
  const [oneRecipe, setOneRecipe] = useState({});
  const [ingredientList, setIngredients] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const meal = await fetchMealById(recipeId);
      setOneRecipe(meal);

      const ingredientsArray = [];

      for (let j = 1; j <= 20; j++) {
        const ingredient = meal["strIngredient" + j];
        const measure = meal["strMeasure" + j];
        if (ingredient && ingredient.trim() !== "") {
          ingredientsArray.push(`${measure} ${ingredient}`);
        }
      }
      setIngredients(ingredientsArray);
    };
    getMeals();
  }, []);

  return (
    <ScrollView style={styles.bodyContainer}>
      {oneRecipe ? (
        <View style={styles.container}>
          <Image
            source={{ uri: oneRecipe.strMealThumb }}
            style={{
              width: "100%",
              height: 300,
              objectFit: "fill",
            }}
          />
          {oneRecipe ? (
            <Text style={styles.title}>{oneRecipe.strMeal}</Text>
          ) : (
            <ActivityIndicator />
          )}

          <Text style={styles.h2Text}>Ingredients</Text>
          <View>
            {ingredientList.map((item, index) => (
              <View key={index.toString()} style={styles.listItemContainer}>
                <Text style={styles.listItem}>{item}</Text>
              </View>
            ))}
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.h2Text}>Instructions</Text>
            <Text style={styles.h2Text}>{oneRecipe.strInstructions}</Text>
          </View>
          <LinearGradient
            // Background Linear Gradient
            colors={["#9ce9b4", "#d3e3d8"]}
            style={styles.background}
          />
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    flexGrow: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    // height: "100",
  },
  bodyContainer: {
    backgroundColor: "#abab",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "avenir",
    fontStyle: "italic",
  },
  listItemContainer: {
    borderBottomWidth: 0.7, // Width of the bottom border
    borderBottomColor: "#000000",
    backgroundColor: "red",
    // flexGrow: 1,
  },
  listItem: {
    color: "green",
    padding: 10,
    borderBottomWidth: 2, // Width of the bottom border
    borderBottomColor: "#000000", // Color of the bottom border
  },
  h2Text: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 10,
    fontFamily: "font",
  },
});
