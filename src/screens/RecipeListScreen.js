import React from "react";

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import { fetchMeal } from "../utils/api";

export default function RecipeListScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);

  let term = "arr";

  useEffect(() => {
    const getMeals = async () => {
      const meals = await fetchMeal(term);
      setRecipes(meals); // Uppdaterar tillståndet i komponenten
    };

    getMeals();
  }, []);

  return (
    <View style={styles.cardContainer}>
      <FlatList
        style={styles.cardWrapper}
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View>
            <Pressable
              style={styles.card}
              onPress={() =>
                navigation.navigate("RecipeDetail", { recipeId: item.idMeal })
              }
            >
              <Image
                source={{ uri: item.strMealThumb }}
                style={{
                  width: 280,
                  height: 220,
                  objectFit: "fill",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text style={styles.title}>{item.strMeal}</Text>
              {/* <Text>{item.strArea}</Text>
              <Text>{item.strCategory}</Text> */}
            </Pressable>
          </View>
        )}
      />
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 280,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#e7ecef",
    marginBottom: 15, // Space between cards
    borderRadius: 10, // Rounded corners

    //Below is shadow, might be fun
    shadowColor: "#5a6f60",
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  cardContainer: {
    backgroundColor: "#d3e3d8",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "680",
    marginTop: 20,
    marginBottom: 20,
    color: "#5a6f60",
    fontFamily: "font",
  },
});
