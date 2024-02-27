import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../styles/Category/subcategoryCardView.style";
import { useNavigation } from "@react-navigation/native";

const SubcategoryCardView = ({ children, pid }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() =>
        navigation.navigate("ProductList", { parentId: pid, childrenId: children._id })
      }
    >
      <ImageBackground
        source={{ uri: children?.pic }}
        style={styles.imageContainer}
      >
        <View style={styles.cateNameContainer}>
          <Text style={styles.cateNameText}>{children?.cate_name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SubcategoryCardView;
