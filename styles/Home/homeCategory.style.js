import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 180,
    marginEnd: 5,
    borderRadius: SIZES.medium,
    // backgroundColor: COLORS.secondary,
    // paddingBottom: SIZES.xxLarge +150,
    marginBottom: 120,
  },
  imageContainer: {
    flex: 1,
    // width: 100,

    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    // backgroundColor: COLORS.gray,
  },
  image: {
    height: 180,
    // aspectRatio: 1,
    resizeMode: "cover",
  },
  cateNameContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // 半透明黑色蒙层
    justifyContent: "flex-end", // 将子元素放置在底部
    paddingBottom: SIZES.small,
  },
  cateNameText: {
    textAlign: "center",
    // backgroundColor: "green",
    color: "white",
    fontSize: SIZES.medium,
    fontFamily: "bold",
  },
});

export default styles;
