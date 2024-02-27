import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "../../styles/Home/homeCategory.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const CategoryCardView = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CategoryPage", { item })}
      >
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: item.pic }}
            style={styles.imageContainer}
          >
            {/* 蒙层内容 */}
            <View style={styles.cateNameContainer}>
              <Text style={styles.cateNameText}>{item.cate_name}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCardView;
