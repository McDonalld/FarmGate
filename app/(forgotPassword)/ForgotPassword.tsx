import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ms, s, vs } from "react-native-size-matters";

export default function ForgotPassword() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginLeft: 20 }}
        >
          <Ionicons name="chevron-back-outline" size={34} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>

      {/* Illustration */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/ForgotPass.png")}
          style={styles.image}
        />
      </View>

      {/* Caution Text */}
      <View style={styles.cautionWrapper}>
        <Text style={styles.cautionText}>
          Please enter your phone number. We will send {"\n"}a code to your
          number to reset your password
        </Text>
      </View>

      {/* Text Input Phone Number */}
      <View style={styles.inputRow}>
        <FontAwesome
          name="phone"
          size={ms(22)}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone number"
          placeholderTextColor="#999"
          keyboardType="number-pad"
        />
      </View>

      {/* Get OTP */}
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/OTP");
          }}
        >
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? ms(60) : ms(10),
    gap: ms(80),
  },
  headerTitle: {
    fontSize: ms(22),
    fontWeight: "500",
  },

  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: vs(250),
    width: s(350),
    resizeMode: "contain",
  },

  cautionWrapper: {
    marginTop: ms(10),
  },
  cautionText: {
    fontSize: ms(16),
    textAlign: "center",
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: ms(10),
    marginTop: ms(25),
    alignSelf: "stretch", // works with paddingHorizontal
    height: ms(55),
    marginHorizontal: ms(20),
  },
  icon: {
    marginRight: ms(10),
    marginLeft: ms(20),
  },
  input: {
    fontSize: ms(16),
    flex: 1,
  },

  buttonWrapper: {
    justifyContent: "flex-end",
    flex: 1,
    paddingBottom: ms(40),
    marginHorizontal: ms(20),
  },
  button: {
    backgroundColor: "#00c853",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ms(10),
    height: Platform.OS === "ios" ? vs(50) : vs(40),
    alignSelf: "stretch",
  },
  buttonText: {
    fontSize: ms(16),
    color: "#fff",
  },
});
