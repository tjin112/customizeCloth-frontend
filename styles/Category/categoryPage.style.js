import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    paddingTop: SIZES.xxLarge + 10,
    // paddingLeft: SIZES.small / 2,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    flex: 1,
    // paddingHorizontal: SIZES.small,
  },
  titleText: {
    fontFamily: "semiBold",
    fontSize: 20,
    paddingHorizontal: SIZES.small,
    marginBottom: SIZES.small ,
  },
  subWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  productListWrapper: {
    flex: 1,
    marginTop: SIZES.medium,
  },
});

export default styles;
