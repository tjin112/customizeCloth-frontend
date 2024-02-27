import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../../styles/Others/pageHeader.style";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  // SimpleLineIcons,
  // MaterialCommunityIcons,
  // Fontisto,
} from "@expo/vector-icons";
import { COLORS } from "../../constants";
const PageHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.lightWhite} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageHeader;
