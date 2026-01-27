import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { ms, s, vs } from "react-native-size-matters";

export default function OTP() {
  const [code, setCode] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ marginLeft: ms(20) }}
          >
            <Ionicons name="chevron-back-outline" size={ms(34)} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Verify OTP</Text>
        </View>

        {/* ILLUSTRATION */}
        <Image
          source={require("../../assets/images/OTP.png")}
          style={{ height: vs(300), width: s(300), alignSelf: "center" }}
        />

        {/* Caution Text */}
        <View>
          <Text
            style={{
              fontSize: ms(15.5),
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            We have just sent a 6 digit code to your
          </Text>
          <Text
            style={{
              fontSize: ms(15),
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            entered number. Enter the code below.
          </Text>
        </View>

        {/* OTP */}
        <View
          style={{
            paddingHorizontal: vs(30),
            marginTop: ms(20),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <OtpInput
          autoFocus={false}
            focusColor="#00c853"
            onTextChange={(text) => setCode(text)}
            onFilled={(text) => console.log("OTP Entered:", text)}
            // blinking caret color
            theme={{
              pinCodeContainerStyle: {
                borderWidth: ms(1),
                borderColor: "#ccc",
                borderRadius: ms(8),
                backgroundColor: "#fff",
                width: s(40),
                height: vs(45),

                // default background
              },

              focusedPinCodeContainerStyle: {
                borderColor: "#d5d5d5ff",
              },
              pinCodeTextStyle: {
                fontSize: ms(20),
                fontWeight: "500",
              },
            }}
          />
        </View>


        {/* DIDN'T RECEIVE CODE */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: 1, 
            marginTop: ms(-30)
          }}
        >
          <Text
            style={{ fontSize: ms(14), color: "#a09e9eff" }}
          >
            Didn't receive a code?{" "}
          </Text>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "#00c853" }}>
              Resend
            </Text>
          </TouchableOpacity>
        </View>

        {/* Button */}
        <View
          style={{ flex: 1, justifyContent: "flex-end", paddingBottom: ms(30) }}
        >
          <TouchableOpacity
            style={{
              marginHorizontal: vs(30),

              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00c853",
              borderRadius: ms(10),
              height: Platform.OS === "ios" ? vs(50) : vs(40),
              alignSelf: "stretch",
            }}
            onPress={() => {
              router.push("/resetPass");
            }}
          >
            <Text style={{ fontSize: ms(16), color: "#fff" }}>Verify</Text>
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
    marginTop: Platform.OS === "android" ? ms(60) : ms(5),
    gap: ms(80),
  },
  headerTitle: {
    fontSize: ms(22),
    fontWeight: "500",
  },
});
