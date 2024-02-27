import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
  },
  upperRow: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    // position: "absolute",
    // top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  title: {
    fontFamily: "bold",
    fontSize: 22,
  },
});

export default styles;
