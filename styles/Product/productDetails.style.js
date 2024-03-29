import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    // height: 2000
  },
  upperRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,

    // backgroundColor: "black",
    // position: "relative"
    // top: 0,
    // width: " 100%",
    // height: " 100%",
  },
  titleRow: {
    paddingBottom: SIZES.small,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // width: SIZES.width - 44,
    // top: 20,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: "regular",
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width,
    // backgroundColor:'red'
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.xSmall,
  },
  cartTitle: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    textAlign: "center",
    marginLeft: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    // backgroundColor: COLORS.secondary,
    // borderRadius: SIZES.large,
  },
  price: {
    // paddingHorizontal: 10,
    marginTop: SIZES.small,
    fontFamily: "semiBold",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  descriptionWraper: {
    marginTop: SIZES.small,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large,
  },
  descriptionText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    // textAlign: "center",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginHorizontal: 12,
    padding: 5,
    borderRadius: SIZES.large,
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
  arrtibutes: {
    marginHorizontal: 20,
    paddingTop: SIZES.small,
  },
  colorWrapper: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: SIZES.small - 5,
    paddingBottom: SIZES.small,
  },
  colorCircle: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    height: SIZES.large,
    width: SIZES.large,
    borderRadius: 50,
    marginRight: SIZES.medium,
  }),
  colorCircleSelected: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    height: SIZES.xLarge,
    width: SIZES.xLarge,
    borderRadius: 50,
    marginRight: SIZES.medium,
  }),
  customizeWrapper: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: SIZES.small - 5,
    paddingBottom: SIZES.small,
  },
  customizeElement: {
    borderWidth: 1,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.xSmall,
    marginRight: 5,
  },
  selectedCustomizeElement: {
    borderWidth: 1,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.xSmall,
    marginRight: 5,
    backgroundColor: COLORS.gray2,
    borderColor: COLORS.gray2,
  },
  contentContainer: {
    paddingHorizontal: SIZES.small,
  },
  customizeDetailsTitle: {
    fontSize: SIZES.large,
    fontFamily: "bold",
  },
  partsSubtitle: {
    fontSize: SIZES.medium + 2,
    fontFamily: "regular",
    color: COLORS.black,
  },
  partsImage: {
    // width: 100,
    // height: 100,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  partsTitle: {
    // fontSize: SIZES.medium,
    fontFamily: "regular",
    textAlign: "center",
  },
  partsCardWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: SIZES.xSmall,
    marginBottom: SIZES.xSmall,
    // paddingVertical: SIZES.xSmall,
  },
  partsCard: {
    borderColor: COLORS.gray2,
    borderWidth: 1,
    borderRadius: SIZES.large,
    width: 120,
    overflow: "hidden",
  },
  selectedPartsCard: {
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: SIZES.large,
    width: 120,
    overflow: "hidden",
  },
  myOwnSizeBtn: {
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray,
    padding: SIZES.xSmall,
    borderRadius: 20,
    borderColor: COLORS.gray2,
    borderWidth: 1,
    marginTop: SIZES.small,
  },
  btntext: {
    fontSize: SIZES.medium,
  },
});

export default styles;
