import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/Home/index.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductRow from "../components/products/ProductRow";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeCategory from "../components/home/HomeCategory";
const Home = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    checkExistingUser();
  }, []);
  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      const currentUser = await AsyncStorage.getItem(userId);
      if (currentUser !== null) {
        const parseData = JSON.parse(currentUser);
        setUserData(parseData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error  retriveing the data", data);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>
            {userData ? userData.location : ""}
          </Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>1</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow />
        <HomeCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
