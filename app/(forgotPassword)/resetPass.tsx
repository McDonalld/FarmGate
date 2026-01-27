import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  Modal,
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

export default function resetPass() {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginLeft: ms(20) }}
        >
          <Ionicons name="chevron-back-outline" size={ms(34)} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Password</Text>
      </View>

      {/* Illustration */}
      <Image
        source={require("../../assets/images/Reset.png")}
        style={{ height: vs(300), width: s(300), alignSelf: "center" }}
      />

      {/* PROMPT */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 16 }}>
          Use at least 6 Characters strong password
        </Text>
      </View>

      {/* TEXTINPUT */}
      <View style={styles.inputRow}>
        <FontAwesome
          name="phone"
          size={ms(22)}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor="#999"
          keyboardType="number-pad"
        />
      </View>

      <View style={[styles.inputRow, { marginTop: ms(10) }]}>
        <FontAwesome
          name="phone"
          size={ms(22)}
          color="#999"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Re enter password"
          placeholderTextColor="#999"
          keyboardType="number-pad"
        />
      </View>

      {/* BUTTON */}
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
          onPress={() => setVisible(true)}
        >
          <Text style={{ fontSize: ms(16), color: "#fff" }}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL */}
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 18,
              justifyContent: "center",
              alignItems: "center",
              padding: ms(40),
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                position: "absolute",
                right: ms(0),
                top: ms(0),
                padding: ms(25),
              }}
              onPress={()=>{setVisible(false)}}
            >
              <Ionicons name="close" size={22} />
            </TouchableOpacity>

            {/* DONE GIF */}
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#00c853",
                justifyContent: "center",
                alignItems: "center",
                shadowOpacity: 0.1,
                elevation: 0.1,
                marginBottom: ms(20),
                marginTop: ms(20),
              }}
            >
              <Image
                source={require("../../assets/images/done.gif")}
                style={{ height: vs(40), width: s(40) }}
              />
            </View>

            <Text
              style={{ fontSize: 26, fontWeight: "500", marginBottom: ms(10) }}
            >
              Reset Successful
            </Text>
            <Text style={{ color: "#ccc", fontSize: ms(15) }}>
              Your Password is successfully
            </Text>
            <Text style={{ color: "#ccc", fontSize: ms(15) }}>reset.</Text>

            <TouchableOpacity
              style={{
                marginTop: 40,
                backgroundColor: "#00c853",
                height: Platform.OS === "ios"? vs(45) : vs(35),
                borderRadius: 8,
                alignItems: "center",
                width: s(180),
                justifyContent: "center",
              }}
              onPress={() => {
                setVisible(false)
                router.push('/Home')
              }}
            >
              <Text style={{ color: "white", fontSize: ms(16) }}>
                Back to home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? ms(60) : ms(5),
    gap: ms(60),
  },
  headerTitle: {
    fontSize: ms(22),
    fontWeight: "500",
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
});
