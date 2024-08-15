import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";

import HomeStack from "./src/navigator/HomeStack";

import axios from "axios";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

// Fetching meal after input
export default function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchMeal();
  }, []);

  async function fetchMeal() {
    const url = `${apiUrl}arr`;
    const response = await axios.get(url);
    setRecipes(response.data.meals);
  }

  return (

      <HomeStack></HomeStack>

    // <ScrollView style={styles.cardContainer}>
    //   <View>

    //   </View>

    //   <Text>Hej</Text>

    //* <ScrollView>
    //   <View style={styles.header}>
    //     <Text style={styles.heading}>Recipes</Text>
    //   </View>
    // </ScrollView>

    // <FlatList
    //   data={recipes}
    //   keyExtractor={(item) => item.idMeal}
    //   renderItem={({ item }) => (
    //     <View style={styles.card}>
    //       <Image
    //         source={{ uri: item.strMealThumb }}
    //         style={{ width: 150, height: 150 }}
    //       />
    //       <Text style={styles.title}>{item.strMeal}</Text>
    //       <Text>{item.strArea}</Text>
    //       <Text>{item.strCategory}</Text>
    //     </View>
    //   )}
    // />
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#80b286",
    height: "50",
    justifyContent: "space-evenly",
  },
  heading: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    alignSelf: "center",
  },
  card: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "hotpink",
  },
  // cardContainer: {
  //   backgroundColor: "palegreen",
  // },
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Quicksand_300Light",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
