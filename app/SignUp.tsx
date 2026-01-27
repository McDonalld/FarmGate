import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import DividerWithText from "../IconsSVGs/dividerText";
import Facebook from "../IconsSVGs/FacebookLogo";
import GoogleIcon from "../IconsSVGs/googleIcon";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="default"/>
        {/* Sign-Up illustration */}
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
                   source={require("../assets/images/signup.jpg")}
                   style={{ height: "100%", width: "100%", resizeMode: "cover" }}
                 />
                 
                {/* Overlay on top of image */}
              <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
              <Image 
              source={require('../assets/images/FG.png')}
              style ={{
               position: 'absolute',
               alignSelf: 'center',
               // height: ms(100),
               width: ms(150),
               resizeMode: 'contain',
              }}
              />
          </View>

        {/* Sign Up Text */}
        <Text
          style={{
            fontSize: s(30),
            marginTop: ms(30),
            fontWeight: Platform.OS === "android" ? "400" : "500",
          }}
          numberOfLines={2}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.8}
        >
          Sign Up
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
        <View style={styles.inputRow}>
          <FontAwesome
            name="lock"
            size={ms(22)}
            color="#999"
            style={styles.icon}
          />
          <TextInput
            style={{ fontSize: ms(16), flex: 1 }}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        {/* Text Input Retype-Password */}
        <View style={styles.inputRow}>
          <FontAwesome
            name="lock"
            size={ms(22)}
            color="#999"
            style={styles.icon}
          />
          <TextInput
            style={{ fontSize: s(16), flex: 1 }}
            placeholder="Re enter password"
            placeholderTextColor="#999"
            secureTextEntry
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => router.push("/(tabs)/Home")}
        >
          <Text
            style={{ color: "#fff", fontSize: s(20) }}
            numberOfLines={2}
            adjustsFontSizeToFit={true}
            minimumFontScale={0.8}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <DividerWithText text="Or Sign Up with" />

        {/* OTHER CHANNELS TO Sign Up */}
        <View style={styles.socialMedia}>
          <TouchableOpacity style={styles.MediaBox}>
            <GoogleIcon />
            <Text
              style={{ marginLeft: ms(5), fontSize: s(16), fontWeight: "600" }}
            >
              Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.MediaBox}>
            <Facebook />
            <Text
              style={{ marginLeft: ms(5), fontSize: s(16), fontWeight: "600" }}
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
              fontWeight: Platform.OS === "android" ? "400" : undefined,
            }}

            numberOfLines={2}
            adjustsFontSizeToFit={true}
          >
            Already have an account?{" "}
            <Link href="/SignIn" style={{ color: "green", fontSize: s(16) }}>
              {""} Log in
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(20),
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
    marginTop: ms(15),
    alignItems: "center",
    flexDirection: "row",
  },

  SignUpButton: {
    backgroundColor: "#44AF69",
    marginTop: ms(15),
    borderRadius: ms(15),
    alignItems: "center",
    paddingVertical: Platform.OS === "android" ? vs(13) : vs(15),
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: ms(10),
    height: vs(45),
    marginTop: ms(15),
  },

  icon: {
    marginRight: ms(10),
    marginLeft: ms(20),
  },

  socialMedia: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: ms(15),
  },

  MediaBox: {
    marginTop: ms(15),
    flexDirection: "row",
    borderWidth: ms(1),
    borderColor: "#ccc",
    borderRadius: ms(10),
    justifyContent: "center",
    alignItems: "center",
    width: s(150),
    paddingVertical: vs(10),
  },
});
