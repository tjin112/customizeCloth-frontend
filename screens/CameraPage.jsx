import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../styles/Camera/camera.style";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";

const CameraPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title={"正面照"}
          loader={false}
          onPress={() => navigation.navigate("TakePhotoPage")}
        />
        <Button
          title={"侧面照"}
          loader={false}
          onPress={() => navigation.navigate("TakePhotoPage")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CameraPage;
