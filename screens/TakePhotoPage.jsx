import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import { Accelerometer, Gyroscope } from "expo-sensors";

import { useEffect, useRef, useState } from "react";
import { Camera } from "expo-camera";
// import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { COLORS } from "../constants";
export default function TakePhotoPage() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  //  判断是否垂直start
  const [isVertical, setIsVertical] = useState(false);
  const [accelerometerData, setAccelerometerData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    let accelerometerSubscription;
    let gyroscopeSubscription;

    const subscribeToSensors = async () => {
      Accelerometer.setUpdateInterval(500);
      accelerometerSubscription = Accelerometer.addListener(
        (accelerometerData) => {
          setAccelerometerData(accelerometerData);
        }
      );

      Gyroscope.setUpdateInterval(500);
      gyroscopeSubscription = Gyroscope.addListener((gyroscopeData) => {
        setGyroscopeData(gyroscopeData);
      });
    };

    const unsubscribeFromSensors = () => {
      accelerometerSubscription && accelerometerSubscription.remove();
      gyroscopeSubscription && gyroscopeSubscription.remove();
    };

    subscribeToSensors();

    return unsubscribeFromSensors;
  }, []);

  useEffect(() => {
    const { x, y, z } = accelerometerData;
    const { x: gyroX, y: gyroY, z: gyroZ } = gyroscopeData;

    // 更严格的判断条件：x 绝对值小于 0.05，y 绝对值大于 0.95
    const isVerticalCondition = Math.abs(x) < 0.05 && Math.abs(y) > 0.95;
    const isStandingUpCondition =
      Math.abs(gyroX) < 0.5 && Math.abs(gyroY) < 0.5 && Math.abs(gyroZ) < 1;

    setIsVertical(isVerticalCondition && isStandingUpCondition);
  }, [accelerometerData, gyroscopeData]);
  //  判断是否垂直end
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      //   shareAsync(photo.uri).then(() => {
      //     setPhoto(undefined);
      //   });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        {isVertical && (
          <View style={styles.photoBtn}>
            <Button title="" onPress={takePic} />
          </View>
        )}
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    // 半透明背景
    // flex: 1,
  },
  photoBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.secondary,
    width: 80,
    height: 80,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
