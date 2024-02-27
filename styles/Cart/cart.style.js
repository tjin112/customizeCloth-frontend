import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  cartWraper: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    borderRadius: SIZES.small,
    paddingHorizontal: SIZES.small,
    paddingTop: SIZES.small,
    // paddingHorizontal: SIZES.small,
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: SIZES.small,
    paddingHorizontal: SIZES.small * 2,
    paddingVertical: SIZES.small,
    marginBottom: SIZES.small,
  },
  productImg: {
    width: 90,
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
  },
  productSubtitle: {
    fontFamily: "regular",
    fontSize: SIZES.small + 3,
    color: COLORS.gray,
  },
  productPrice: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.xSmall,
  },
  payWrapper: {
    backgroundColor: COLORS.lightWhite,
    position: "absolute",
    bottom: 0,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width,
    paddingHorizontal: SIZES.small,
    paddingTop: SIZES.small,
  },
  payBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: 150,
    height: 60,
    borderRadius: SIZES.medium,
  },
  payText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "bold",
  },
  priceText: {
    fontSize: SIZES.large,
    fontFamily: "bold",
  },
});

export default styles;
