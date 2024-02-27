import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: 70,
    // marginEnd: 5,
    // borderRadius: SIZES.xSmall,
    // marginTop: SIZES.small,
  },
  imageContainer: {
    flex: 1,
    // marginLeft: SIZES.small / 2,
    // marginTop: SIZES.small / 2,
    borderRadius: SIZES.xSmall,
    overflow: "hidden",
    backgroundColor: COLORS.gray,
  },
  image: {
    height: 180,
    // aspectRatio: 1,
    resizeMode: "cover",
  },
  cateNameContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // 半透明黑色蒙层
    justifyContent: "center", // 将子元素放置在底部
    alignItems: "center",
    // paddingBottom: SIZES.small,
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
