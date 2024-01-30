import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/Search/index.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { searchProducts } from "../api/product";
import SearchTitl from "../components/products/SearchTitl";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchPress = async () => {
    try {
      const result = await searchProducts(searchInput);      setSearchResult(result.data);
    } catch (error) {
      console.log("handleSearchPress error", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            onChangeText={setSearchInput}
            onPressIn={() => {}}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={handleSearchPress}
          >
            <Feather name="search" size={SIZES.large} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.searchImage}
            source={require("../assets/images/Pose23.png")}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTitl item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
