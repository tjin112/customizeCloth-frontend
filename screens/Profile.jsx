import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/Profile/profile.style";
import { COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkExistingUser();
  }, []);
  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    console.log("userId", userId);
    try {
      const currentUser = await AsyncStorage.getItem(userId);
      if (currentUser !== null) {
        const parseData = JSON.parse(currentUser);
        console.log("parseData", parseData);
        setUserData(parseData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("Error  retriveing the data", data);
    }
  };

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([userId, "id"]);
      navigation.replace("Bottom Navigation");
    } catch (error) {
      console.log("Error loggin out the user", data);
    }
  };
  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", onPress: () => console.log("cancel pressed") },
      { text: "Continue", onPress: () => userLogout() },
      { defaultIndex: 1 },
    ]);
  };

  const clearCache = () => {
    Alert.alert("Clear Cache", "Are you sure you want to clear caches?", [
      { text: "Cancel", onPress: () => console.log("cancel pressed") },
      { text: "Continue", onPress: () => console.log("Continue pressed") },
      { defaultIndex: 1 },
    ]);
  };

  const deleteAccount = () => {
    Alert.alert("Delete Account", "Are you sure you want to delete account?", [
      { text: "Cancel", onPress: () => console.log("cancel pressed") },
      { text: "Continue", onPress: () => console.log("Continue pressed") },
      { defaultIndex: 1 },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/space.jpg")}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>
            {userLogin === true
              ? userData.username
              : "Please login into your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{userData.email}</Text>
            </View>
          )}

          {userLogin === false ? (
            <></>
          ) : (
            <View style={styles.menuWrapper}>
              {/* Favorites */}
              <TouchableOpacity
                onPress={() => navigation.navigate("Favourites")}
              >
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>

              {/* ORDER */}
              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Order</Text>
                </View>
              </TouchableOpacity>

              {/* CART */}
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>

              {/* Clear Cache */}
              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              {/* Delete Account */}
              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              {/* LOGOUT */}
              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
