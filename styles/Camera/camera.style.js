import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
const styles = StyleSheet.create({
  container: { marginHorizontal: SIZES.small },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
  },
});

export default styles;
