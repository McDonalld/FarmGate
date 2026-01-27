import { FontAwesome } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import DividerWithText from "../IconsSVGs/dividerText";
import Facebook from "../IconsSVGs/FacebookLogo";
import GoogleIcon from "../IconsSVGs/googleIcon";

const SignIn = () => {
  const router = useRouter();
  const [isChecked, setChecked] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />

        {/* Login Illustration */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "#ffffffff",
            height: ms(190),
            width: ms(320),
            marginTop: ms(20),
            borderRadius: ms(15),
            shadowOpacity: 0.05,
            shadowRadius: 3.84,
            elevation: 5,
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../assets/images/africans on farmland.jpg")}
            style={{ height: "100%", width: "100%", resizeMode: "cover" }}
          />

          {/* Overlay on top of image */}
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          />
          <Image
            source={require("../assets/images/FG.png")}
            style={{
              position: "absolute",
              alignSelf: "center",
              // height: ms(100),
              width: ms(150),
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Login Text */}
        <Text style={{ fontSize: s(30), fontWeight: "500", marginTop: ms(30) }}>
          Login
        </Text>

        {/* Text Input Phone Number*/}
        <View style={styles.inputRow}>
          <FontAwesome
            name="phone"
            size={ms(22)}
            color="#999"
            style={styles.icon}
          />
          <TextInput
            style={{ fontSize: s(16), flex: 1 }}
            placeholder="Phone number"
            placeholderTextColor="#999"
            keyboardType="number-pad"
          />
        </View>

        {/* Text Input Password*/}
        <View style={[styles.inputRow]}>
          <FontAwesome
            name="lock"
            size={ms(22)}
            color="#999"
            style={styles.icon}
          />
          <TextInput
            style={{ fontSize: s(16), flex: 1 }}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        {/* Remember and Forget Password */}
        <View style={styles.View2}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "green" : undefined}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: s(15),
                marginLeft: ms(10),
                flexShrink: 1,
                fontWeight: Platform.OS === "android" ? "400" : undefined,
              }}
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.8}
            >
              Remember me
            </Text>
            <TouchableOpacity onPress={() => router.push("/ForgotPassword")}>
              <Text
                style={{
                  color: "#44AF69",
                  fontSize: s(15),
                  flexShrink: 1,
                  fontWeight: Platform.OS === "android" ? "400" : undefined,
                }}
                numberOfLines={2}
                minimumFontScale={0.8}
                adjustsFontSizeToFit={true}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.LogInButton}
          onPress={() => router.push("/(tabs)/Home")}
        >
          <Text
            style={{ color: "#fff", fontSize: s(20), flexShrink: 1 }}
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.8}
          >
            Log In
          </Text>
        </TouchableOpacity>

        <DividerWithText text="Or Log in with" />

        {/* OTHER CHANNELS TO SIGN IN */}

        <View style={styles.socialMedia}>
          <TouchableOpacity style={styles.MediaBox}>
            <GoogleIcon />
            <Text
              style={{ marginLeft: ms(5), fontSize: ms(16), fontWeight: "600" }}
            >
              Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.MediaBox}>
            <Facebook />
            <Text
              style={{ marginLeft: ms(5), fontSize: ms(16), fontWeight: "600" }}
            >
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        {/* DON'T HAVE AN ACCOUNT SIGN HERE */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              color: "gray",
              marginTop: ms(20),
              fontSize: s(16),
              flexShrink: 1,
              fontWeight: Platform.OS === "android" ? "400" : undefined,
            }}
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.8}
          >
            Don't have an account? {""}
            <Link
              href="/SignUp"
              style={{ color: "green", fontSize: s(16) }}
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.8}
            >
              Sign Up
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: vs(20),
  },

  TextInput: {
    width: "100%",
    height: vs(50),
    borderRadius: ms(10),
    marginTop: ms(25),
    borderColor: "#ccc",
    borderWidth: ms(1),
    paddingHorizontal: s(50),
    paddingVertical: vs(30),
  },

  View2: {
    marginTop: ms(20),
    alignItems: "center",
    flexDirection: "row",
  },

  LogInButton: {
    backgroundColor: "#44AF69",
    marginTop: ms(30),
    borderRadius: ms(15),
    alignItems: "center",
    paddingVertical: ms(15),
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: ms(10),
    marginTop: ms(20),
    width: "100%",
    height: Platform.OS === "android" ? vs(50) : vs(45),
  },

  icon: {
    marginRight: ms(10),
    marginLeft: ms(20),
  },

  socialMedia: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: ms(10),
    marginTop: ms(10),
  },

  MediaBox: {
    flex: 1, // make both take same width
    marginTop: ms(15),
    flexDirection: "row",
    borderWidth: ms(1),
    borderColor: "#ccc",
    borderRadius: ms(10),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Platform.OS === "android" ? vs(8) : vs(12),
  },
});
