import { View, Text, FlatList } from "react-native";
import React from "react";
import { SIZES } from "../../constants";
import styles from "../../styles/Product/productRow.style";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{
          columnGap: SIZES.medium,
        }}
      ></FlatList>
    </View>
  );
};

export default ProductRow;
