import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  CameraPage,
  Cart,
  CategoryPage,
  Favourites,
  LoginPage,
  NewRival,
  Orders,
  ProductDetails,
  Signup,
  TakePhotoPage,
} from "./screens";

const Stack = createNativeStackNavigator();

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <Text style={{ marginTop: 20, fontFamily: "semiBold" }}>123</Text>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={BottomTabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductList"
            component={NewRival}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Favourites"
            component={Favourites}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CategoryPage"
            component={CategoryPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CameraPage"
            component={CameraPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TakePhotoPage"
            component={TakePhotoPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    // fontFamily: "semiBold",
    fontSize: 20,
  },
});
