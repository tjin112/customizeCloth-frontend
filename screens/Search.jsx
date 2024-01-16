import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/Search/index.style";
import { COLORS, SIZES } from "../constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
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
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={SIZES.large} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
