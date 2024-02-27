import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeader from "../components/others/PageHeader";
import styles from "../styles/Cart/cart.style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { addToCartApi, getUserCartApi } from "../api/cart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { SimpleLineIcons } from "@expo/vector-icons";
const Cart = () => {
  const navigation = useNavigation();
  const [cartInfo, setCartInfo] = useState(null);
  useFocusEffect(
    useCallback(() => {
      getCart();
    }, [])
  );
  const getCart = async () => {
    try {
      const id = await AsyncStorage.getItem("id");
      const userId = `user${JSON.parse(id)}`;
      const { data } = await getUserCartApi(userId);
      setCartInfo(data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };
  const addQuantity = async (item) => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    console.log("item==>", item);
    try {
      const payload = {
        userId,
        quantity: 1,
        cartItem: item.cartItem._id,
        attr: item.attr,
        details: item.details,
      };
      console.log("payload", payload);
      const res = await addToCartApi(payload);
      const { data } = await getUserCartApi(userId);
      setCartInfo(data[0]);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader title={"Cart"} />
      {cartInfo ? (
        <ScrollView style={styles.cartWraper}>
          {cartInfo.products &&
            cartInfo.products.map((item, index) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetails", {
                    item: item.cartItem,
                  })
                }
                style={styles.cartRow}
                key={index}
              >
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={styles.productImg}
                      source={{
                        uri: item.cartItem.imageUrl,
                      }}
                    />
                    <View style={{ justifyContent: "space-between" }}>
                      <View>
                        <Text style={styles.productName}>
                          {item.cartItem.title}
                        </Text>
                        <Text style={styles.productSubtitle}>
                          {item.cartItem.supplier}
                        </Text>

                        <Text style={styles.productSubtitle}>{item.attr}</Text>
                      </View>

                      <Text style={styles.productPrice}>
                        ${item.cartItem.price}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={() => addQuantity(item)}>
                      <SimpleLineIcons name="plus" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.ratingText}> {item.quantity} </Text>
                    <TouchableOpacity>
                      <SimpleLineIcons name="minus" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      ) : (
        <Text>null</Text>
      )}

      <View style={styles.payWrapper}>
        <Text style={styles.priceText}>
          Total: ${cartInfo ? cartInfo?.totalPrice : 0}
        </Text>
        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.payText}>PAY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
