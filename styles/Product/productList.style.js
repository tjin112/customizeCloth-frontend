import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    // justifyContent: "flex-end",
    // paddingTop: SIZES.small / 2,
    // paddingHorizontal: SIZES.small / 2,
  },
  separator: {
    height: 16,
  },
});

export default styles;
