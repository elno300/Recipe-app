// import * as React from "react";
// // import {
// //   StyleSheet,
// // } from "react-native";

// import HomeStack from "./src/navigator/HomeStack";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync();
// // Fetching meal after input
// export default function App() {
//   return <HomeStack></HomeStack>;

//   const [loaded, error] = useFonts({
//     "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
//   });

//   useEffect(() => {
//     if (loaded || error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     return null;
//   }
// }

// // const styles = StyleSheet.create({

// // });

import * as React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import HomeStack from "./src/navigator/HomeStack";
import { useEffect } from "react";

// Håll splash-skärmen synlig tills typsnitten är laddade
SplashScreen.preventAutoHideAsync();
//
export default function App() {
  const [fontsLoaded, error] = useFonts({
    font: require("./assets/fonts/Grenze-SemiBold.ttf"),
    slate: require("./assets/fonts/SlateMedium.ttf"),
  });

  // Dölja splash-skärmen när typsnitten är laddade eller om det uppstår ett fel
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // Visa inget tills typsnitten är laddade
  if (!fontsLoaded) {
    return null;
  }

  return <HomeStack />;
}
