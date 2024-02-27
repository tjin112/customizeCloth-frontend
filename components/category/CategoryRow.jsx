import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants";
import styles from "../../styles/Category/category.style";
import CategoryCardView from "./CategoryCardView";
import useFetch from "../../hook/useFetch";
import { getCategory } from "../../api/category";

const CategoryRow = () => {
  //   const { data, isLoading, error } = useFetch();
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const getAllCategory = async () => {
    setIsLoading(true);
    try {
      const { data } = await getCategory();
      setCategory(data);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View>
          <Text style={styles.headerTitle}>Category</Text>
          <FlatList
            data={category}
            key={(item) => item._id}
            renderItem={({ item }) => <CategoryCardView item={item} />}
            horizontal
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
          ></FlatList>
        </View>
      )}
    </View>
  );
};

export default CategoryRow;
