import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ms, s, vs } from "react-native-size-matters";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("../assets/images/track.jpg")}
        style={{ flex: 1 }}
      >
        <Image
          source={require("../assets/images/FG.png")}
          style={{
            width: s(150),
            height: vs(150),
            resizeMode: "contain",
            position: "absolute",
            top: vs(10),
            alignSelf: "center",
            zIndex: 10,
          }}
        />

        {/* Overlay to dim the background */}
        <View style={styles.overlay} />

        {/* Content above overlay */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: ms(50),
            paddingHorizontal: ms(25),
          }}
        >
          <View style={{ marginBottom: ms(30), alignItems: "center" }}>
            <Text style={{ fontSize: s(40), color: "#fff", fontWeight: "500" }}>
              Let's Get Started
            </Text>

            <Text
              style={{
                fontSize: s(16),
                color: "#fff",
                textAlign: "center",
                flexShrink: 1,
                fontWeight: Platform.OS === "android" ? "300" : undefined,
              }}
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.8}
            >
              Set up your account to continue
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "green",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: ms(120),
              height: Platform.OS === "ios" ? vs(52) : vs(44),
            }}
            onPress={() => router.push("/SignUp")}
          >
            <Text style={{ fontSize: s(16), color: "#fff", fontWeight: "800" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "white",
              width: "100%",
              height: Platform.OS === "ios" ? vs(52) : vs(44),
              justifyContent: "center",
              alignItems: "center",
              marginTop: ms(12),
              borderRadius: 120,
            }}
            onPress={() => router.push("/SignIn")}
          >
            <Text
              style={{ fontSize: s(16), color: "green", fontWeight: "800" }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // adjust the darkness here
  },
});
