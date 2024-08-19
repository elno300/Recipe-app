import axios from "axios";
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// Lookup full meal details by id
const idUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

// Fetching meal after input
export async function fetchMeal(searchTerm) {
  const url = `${apiUrl}${searchTerm}`;
  const response = await axios.get(url);
  return response.data.meals;
}

export async function fetchMealById(params) {
  const url = `${idUrl}${params}`;
  const response2 = await axios.get(url);
  return response2.data.meals[0];
}
