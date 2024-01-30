import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "../styles/Product/productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.red} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />

      <ScrollView style={styles.details}>
        {/* title */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        </View>
        {/* rating */}
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={increment}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}> {count} </Text>
            <TouchableOpacity onPress={decrement}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View style={styles.descriptionWraper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Dallas</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck" size={20} />
              <Text> Free Delivery</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.cartRow}>
        <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
          <Text style={styles.cartTitle}>BUY NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.addCart}>
          <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
