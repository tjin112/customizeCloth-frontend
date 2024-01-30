import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import styles from "../../styles/Product/productList.style";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>ProductList</Text>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
