import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles/NewRivals/newRivals.style";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { ProductList } from "../components";
const NewRival = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Product</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default NewRival;
