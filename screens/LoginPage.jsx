import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { BackButton, Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Account/account.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { loginApi } from "../api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});

const LoginPage = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  const navigation = useNavigation();
  const invalidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      { text: "Cancel", onPress: () => {} },
      { text: "Continue", onPress: () => {} },
      { defaultIndex: 1 },
    ]);
  };
  const login = async (values) => {
    setLoader(true);
    console.log(values);
    try {
      const { data } = await loginApi(values);
      setResponseData(data);
      setLoader(false);
      await AsyncStorage.setItem(`user${data._id}`, JSON.stringify(data));
      await AsyncStorage.setItem("id", JSON.stringify(data._id));
      navigation.replace("Bottom Navigation");
    } catch (error) {
      Alert.alert("Invalid Credential", error.message, [
        { text: "Cancel", onPress: () => {} },
        { text: "Continue", onPress: () => {} },
        { defaultIndex: 1 },
      ]);
      setLoader(false);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      // keyboardVerticalOffset={-10}
    >
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <BackButton onPress={() => navigation.goBack()} />
            <Image
              style={styles.cover}
              source={require("../assets/images/bk.png")}
            />
            <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => login(values)}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                setFieldTouched,
                touched,
              }) => (
                <View>
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Email</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.email ? COLORS.primary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter email"
                        onFocus={() => {
                          setFieldTouched("email");
                        }}
                        onBlur={() => {
                          setFieldTouched("email", "");
                        }}
                        // value="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                        value={values.email}
                        onChangeText={handleChange("email")}
                      />
                    </View>
                    {touched.email && errors.email && (
                      <Text style={styles.errorMsg}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Password</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.password ? COLORS.primary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter password"
                        onFocus={() => {
                          setFieldTouched("password");
                        }}
                        onBlur={() => {
                          setFieldTouched("password", "");
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                        value={values.password}
                        onChangeText={handleChange("password")}
                        secureTextEntry={obsecureText}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          setObsecureText(!obsecureText);
                        }}
                      >
                        <MaterialCommunityIcons
                          name={
                            obsecureText ? "eye-outline" : "eye-off-outline"
                          }
                          size={18}
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorMsg}>{errors.password}</Text>
                    )}
                  </View>
                  <Button
                    title={"L O G I N"}
                    onPress={isValid ? handleSubmit : invalidForm}
                    isValid={isValid}
                    loader={loader}
                  />
                  <Text
                    style={styles.registration}
                    onPress={() => {
                      navigation.navigate("Signup");
                    }}
                  >
                    Sign up
                  </Text>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
