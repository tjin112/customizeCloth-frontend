import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import PageHeader from "../components/others/PageHeader";
import styles from "../styles/Category/categoryPage.style";
import { StatusBar } from "expo-status-bar";
import GeneralCarousel from "../components/others/GeneralCarousel";
import SubcategoryCardView from "../components/category/SubcategoryCardView";
import { ProductList } from "../components";
import ProductRow from "../components/products/ProductRow";

const CategoryPage = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title={item.cate_name} />
      <ScrollView>
        <View style={{ height: 240 }}>
          <GeneralCarousel />
        </View>
        {/* sub Category */}
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>Sub Category</Text>
          <View style={styles.subWrapper}>
            {item.children.map((cl, index) => (
              <SubcategoryCardView children={cl} key={index} pid={item.pid} />
            ))}
          </View>
          <View style={styles.productListWrapper}>
            <Text style={styles.titleText}>Recomended</Text>
            {/* productList */}
            <ProductList pid={item.pid} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryPage;
