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

const ProductDetails = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.red} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg",
        }}
        style={styles.image}
      />

      <ScrollView style={styles.details}>
        {/* title */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$66.66</Text>
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
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
            Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sed
            felis eget velit aliquet sagittis id. Risus at ultrices mi tempus
            imperdiet nulla malesuada pellentesque. Metus aliquam eleifend mi in
            nulla posuere sollicitudin aliquam ultrices. Id interdum velit
            laoreet id. Fames ac turpis egestas sed tempus. Et sollicitudin ac
            orci phasellus. Et malesuada fames ac turpis egestas maecenas
            pharetra. Elementum integer enim neque volutpat ac tincidunt vitae
            semper quis. Gravida cum sociis natoque penatibus et magnis dis
            parturient. In nibh mauris cursus mattis molestie a iaculis at.
            Elementum facilisis leo vel fringilla est ullamcorper. Sit amet
            commodo nulla facilisi nullam. Interdum consectetur libero id
            faucibus nisl tincidunt eget nullam non. Justo eget magna fermentum
            iaculis eu non. Sed cras ornare arcu dui vivamus arcu felis.
          </Text>
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
