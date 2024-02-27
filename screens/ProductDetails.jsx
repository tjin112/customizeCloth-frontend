import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "../styles/Product/productDetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getProductById } from "../api/product";
import Divider from "../components/others/Divider";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { addToCartApi } from "../api/cart";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(1);

  // selectedAttribute 是用户选择的style类型。
  const [selectedAttribute, setSelectedAttribute] = useState(null);

  const [customizeDetails, setCustomizeDetails] = useState(null);

  // selectedcustomizeDetails 是用户选择的自定义样式详情。
  const [selectedcustomizeDetails, setselectedCustomizeDetails] =
    useState(null);

  const getProductDetail = async () => {
    try {
      const data = await getProductById(item._id);
      setProduct(data);
    } catch (error) {
      console.log("error====>", error);
    }
  };
  useEffect(() => {
    if (product) {
      setSelectedAttribute({
        attr: Object.keys(product.attributes)[0],
        details: product?.attributes[Object.keys(product.attributes)[0]],
      });
    }
  }, [product]);
  const changeCustomizeElementHandler = (item) => {
    if (product.attributes[item].isCustomized === true) {
      const temp = { ...product.attributes[item] };

      delete temp["isCustomized"];
      setCustomizeDetails(temp);
      bottomSheetRef.current?.expand();
      if (selectedcustomizeDetails === null) {
        const data = {};
        // console.log("object", JSON.stringify(temp));
        Object.keys(temp).map((item) => {
          const firstItem = temp[item];
          if (data[item] === undefined) {
            data[item] = {};
          }
          Object.keys(firstItem).map((i) => {
            if (data[item][i] === undefined) {
              data[item][i] = null;
            }
            data[item][i] = firstItem[i][0];
          });
          setselectedCustomizeDetails(data);
        });
      }
    }
    console.log("item", item);
    setSelectedAttribute({
      attr: item,
      details: product.attributes[item],
    });
  };
  useEffect(() => {
    getProductDetail();
  }, [item.id]);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  // useEffect(() => {
  //   if (selectedAttribute?.details.isCustomized === true) {
  //     setselectedCustomizeDetails(null);
  //   }
  // }, [selectedAttribute]);
  const addToCartHandler = async () => {
    const id = await AsyncStorage.getItem("id");
    const userId = `user${JSON.parse(id)}`;
    try {
      let data = null;
      data = {
        userId,
        quantity: 1,
        cartItem: product._id,
        attr: selectedAttribute.attr,
        details:
          selectedAttribute.details.isCustomized === true
            ? selectedcustomizeDetails
            : null,
      };
      const res = await addToCartApi(data);
      console.log("res==>", res);
    } catch (error) {
      console.log("error==>", error);
    }
  };
  // bottom sheet
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["75%"], []);
  const handleDismiss = useCallback(() => {
    // 关闭底部表单
    bottomSheetRef.current.close();
  }, []);
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    // console.log("handleSheetChanges", index);
  }, []);
  const renderBackDrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const changeCustomizedPartsHandler = (primaryKey, secondaryKey, value) => {
    const data = selectedcustomizeDetails;
    data[primaryKey][secondaryKey] = value;
    console.log("setselectedCustomizeDetails", data);
    setselectedCustomizeDetails({ ...data });
  };
  return (
    <>
      {product === null ? (
        <></>
      ) : (
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
              uri: product.imageUrl,
            }}
            style={styles.image}
          />

          <ScrollView style={styles.details}>
            {/* title */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: 20,
              }}
            >
              {/* <Text>123</Text> */}
              <View style={styles.titleRow}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.subtitle}>{product.subtitle}</Text>
                <View style={styles.priceWrapper}>
                  <Text style={styles.price}>${product.price}</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={increment}>
                  <SimpleLineIcons name="plus" size={20} />
                </TouchableOpacity>

                <Text style={styles.ratingText}> {count} </Text>
                <TouchableOpacity onPress={decrement}>
                  <SimpleLineIcons name="minus" size={20} />
                </TouchableOpacity>
              </View>
            </View>

            {/* rating */}
            {/* <View style={styles.ratingRow}>
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
            </View> */}
            {/*  */}
            <Divider />
            <View style={styles.arrtibutes}>
              <View>
                <Text style={styles.description}>Color</Text>
                <View style={styles.colorWrapper}>
                  {product.color.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => setSelectedColor(index)}
                      key={index}
                      style={[
                        index !== selectedColor
                          ? styles.colorCircle(item)
                          : styles.colorCircleSelected(item),
                      ]}
                    ></TouchableOpacity>
                  ))}
                </View>
              </View>

              <View>
                <Text style={styles.description}>Style</Text>
                <View style={styles.customizeWrapper}>
                  {/* <Text>{JSON.stringify(product.attributes)}</Text> */}
                  {Object.keys(product.attributes).map((item, index) => (
                    // todo
                    <TouchableOpacity
                      style={
                        selectedAttribute?.attr === item
                          ? styles.selectedCustomizeElement
                          : styles.customizeElement
                      }
                      key={index}
                      onPress={() => changeCustomizeElementHandler(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
            <View style={styles.descriptionWraper}>
              <Text style={styles.description}>Use my own size</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("CameraPage")}
                style={styles.myOwnSizeBtn}
              >
                <Text style={styles.btntext}>GET MY SIZE</Text>
              </TouchableOpacity>
              {/* <Button
                title="Camera"
                onPress={() => navigation.navigate("CameraPage")}
                color={"red"}
              /> */}
            </View>
            <View style={styles.descriptionWraper}>
              <Text style={styles.description}>Description</Text>
              <Text style={styles.descriptionText}>{product.description}</Text>
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
            {/* 添加至购物车 */}
            <TouchableOpacity
              onPress={() => addToCartHandler()}
              style={styles.addCart}
            >
              <Fontisto
                name="shopping-bag"
                size={24}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
          {/* bottom sheet */}
          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            onDismiss={handleDismiss} // 监听关闭事件
            backdropComponent={renderBackDrop}
          >
            <BottomSheetScrollView style={styles.contentContainer}>
              {customizeDetails &&
                Object.keys(customizeDetails).map((item, index) => (
                  <View key={index} style={{ paddingBottom: SIZES.large }}>
                    <Text style={styles.customizeDetailsTitle}>{item}</Text>
                    <View>
                      {Object.keys(customizeDetails[item]).map((detail, i) => (
                        <View key={i} style={{ paddingBottom: SIZES.large }}>
                          <Text style={styles.partsSubtitle}>{detail}</Text>
                          <View style={styles.partsCardWrapper}>
                            {customizeDetails[item][detail].map((d, j) => (
                              <TouchableOpacity
                                onPress={() =>
                                  changeCustomizedPartsHandler(item, detail, d)
                                }
                                style={
                                  selectedcustomizeDetails[item][detail]
                                    .name === d.name
                                    ? styles.selectedPartsCard
                                    : styles.partsCard
                                }
                                key={j}
                              >
                                <Image
                                  source={{
                                    uri: d.imgUrl,
                                  }}
                                  style={styles.partsImage}
                                />
                                <View>
                                  <Text style={styles.partsTitle}>
                                    {d.name}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            ))}
                          </View>
                          {/* <Text>
                          {JSON.stringify(customizeDetails[item][detail][0])}
                        </Text> */}
                          <Divider />
                        </View>
                      ))}
                    </View>
                  </View>
                ))}
            </BottomSheetScrollView>
          </BottomSheet>
        </View>
        // bottomsheet
      )}
    </>
  );
};

export default ProductDetails;
