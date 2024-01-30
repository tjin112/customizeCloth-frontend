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
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { signupApi } from "../api/user";
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Must be 8 characters or more")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
  location: Yup.string()
    .min(3, "Provide a valid location")
    .required("Required"),
  username: Yup.string()
    .min(3, "Provide a valid nick name")
    .required("Required"),
});

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponse] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  const navigation = useNavigation();
  const invalidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      { text: "Cancel", onPress: () => {} },
      { text: "Continue", onPress: () => {} },
      { defaultIndex: 1 },
    ]);
  };

  const userSignup = async (values) => {
    try {
      console.log("values", values);
      const data = await signupApi(values);
      console.log("data", data);
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert("Signup failed", error.message, [
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
              style={{
                width: SIZES.width - 60,
                height: SIZES.height / 3,
                resizeMode: "contain",
                marginBottom: SIZES.xxLarge,
              }}
              source={require("../assets/images/bk.png")}
            />
            <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

            <Formik
              initialValues={{
                email: "",
                password: "",
                location: "",
                username: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => userSignup(values)}
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
                  {/* nick name */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Nick name</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.username ? COLORS.primary : COLORS.offwhite
                      )}
                    >
                      <MaterialCommunityIcons
                        name="face-man-profile"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter nick name"
                        onFocus={() => {
                          setFieldTouched("username");
                        }}
                        onBlur={() => {
                          setFieldTouched("username", "");
                        }}
                        // value="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                        value={values.username}
                        onChangeText={handleChange("username")}
                      />
                    </View>
                    {touched.username && errors.username && (
                      <Text style={styles.errorMsg}>{errors.username}</Text>
                    )}
                  </View>
                  {/* location */}
                  <View style={styles.wrapper}>
                    <Text style={styles.label}>Location</Text>
                    <View
                      style={styles.inputWrapper(
                        touched.location ? COLORS.primary : COLORS.offwhite
                      )}
                    >
                      <Ionicons
                        name="location-outline"
                        size={20}
                        color={COLORS.gray}
                        style={styles.iconStyle}
                      />
                      <TextInput
                        placeholder="Enter location"
                        onFocus={() => {
                          setFieldTouched("location");
                        }}
                        onBlur={() => {
                          setFieldTouched("location", "");
                        }}
                        // value="email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={{ flex: 1 }}
                        value={values.location}
                        onChangeText={handleChange("location")}
                      />
                    </View>
                    {touched.location && errors.location && (
                      <Text style={styles.errorMsg}>{errors.location}</Text>
                    )}
                  </View>
                  {/* email */}
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
                  {/* password */}
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
                    title={"S I G N U P"}
                    onPress={isValid ? handleSubmit : invalidForm}
                    isValid={isValid}
                    loader={loader}
                  />
                  <Text
                    style={styles.registration}
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  >
                    Sign in
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

export default Signup;
