import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import styles from "../../styles/Product/productList.style";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import { FlashList } from "@shopify/flash-list";
import { useRoute } from "@react-navigation/native";

const ProductList = ({ pid, cid }) => {
  // "1", "65bb16e007b57117e803feb2"

  const route = useRoute();
  // const pid = route?.params?.parentId || null;
  // const cid = route?.params?.children || null;
  let p = route?.params?.parentId || pid;
  let c = route?.params?.childrenId || cid;
  if (!pid) {
    route?.params?.parentId;
  }
  console.log("ProductList", pid, cid);
  const { data, isLoading, error } = useFetch(p, c);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    // <View style={{ alignItems: "center", flex: 1 }}>
    <FlashList
      data={data}
      renderItem={({ item }) => (
        <View style={{ alignItems: "center", flex: 1, marginBottom: 20 }}>
          <ProductCardView item={item} />
        </View>
      )}
      numColumns={2}
      estimatedItemSize={200}
      contentContainerStyle={styles.container}
    />
    // </View>
    // <View style={{ backgroundColor: "red", alignItems: "center", flex: 1 }}>
    //   <FlashList
    //     data={data}
    //     numColumns={2}
    //     renderItem={({ item }) => <ProductCardView item={item} />}
    //     contentContainerStyle={styles.container}
    //     // ItemSeparatorComponent={() => <View style={styles.separator} />}
    //     estimatedItemSize={200}
    //   />
    // </View>
  );
};

export default ProductList;
