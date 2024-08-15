import axios from "axios";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
import { useEffect, useState } from "react";

// import { NavigationContainer } from "@react-navigation/native";

// Fetching meal after input
export async function fetchMeal(searchTerm) {
  // const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   fetchMeal();
  // }, []);

  const url = `${apiUrl}${searchTerm}`;

  const response = await axios.get(url);
  return response.data.meals;
}
