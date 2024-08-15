import { ScrollView, FlatList, View, Image, Text } from "react-native";

export default function Card() {
  return (
    <ScrollView>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: 150, height: 150 }}
            />
            <Text style={styles.title}>{item.strMeal}</Text>
            <Text>{item.strArea}</Text>
            <Text>{item.strCategory}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}
