import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginLeft: 12,
  },
  headerTitle: {
    fontFamily: "semiBold",
    fontSize: SIZES.xLarge - 2,
  },
});

export default styles;
