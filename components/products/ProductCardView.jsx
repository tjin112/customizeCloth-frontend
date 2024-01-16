import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../../styles/Product/ProductCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              Product name
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              Supplier
            </Text>
            <Text style={styles.price} numberOfLines={1}>
              $100
            </Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCardView;
