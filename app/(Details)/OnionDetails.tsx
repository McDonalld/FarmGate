import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s } from "react-native-size-matters";

const SeedDetails = () => {
  const [num, setNum] = useState(1);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={ms(28)} color="#636567ff" />
        </TouchableOpacity>

        <Text
          style={{ fontSize: s(22), marginBottom: ms(4), fontWeight: "500" }}
        >
          Details
        </Text>
        <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
          <Ionicons
            name={bookmarked ? "bookmark" : "bookmark-outline"}
            size={ms(22)}
            color={bookmarked ? "green" : "#444"}
          />
        </TouchableOpacity>
      </View>
      {/* IMAGE */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#ffffffff",
          height: ms(190),
          // width: ms(330),
          marginTop: ms(20),
          borderRadius: ms(15),
          shadowOpacity: 0.05,
          shadowRadius: 3.84,
          elevation: 5,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("../../assets/images/Onion.jpg")}
          style={{ height: "100%", width: "100%", resizeMode: "cover" }}
        />
      </View>
      {/* NAME */}
      <View
        style={{
          marginTop: ms(20),
          // paddingHorizontal: s(30),
          marginBottom: ms(5),
        }}
      >
        <Text style={{ fontSize: ms(25), fontWeight: "600" }}>Onion</Text>
      </View>
      {/* SERVICE AVAILABLE && NO / WORKER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          // paddingHorizontal: s(30),
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#00c853", fontSize: ms(17) }}>
          Available in stock
        </Text>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ fontSize: ms(30), fontWeight: "500" }}>150/</Text>
          <Text style={{ fontSize: ms(18), color: "#A9ABAD" }}>kg</Text>
        </View>
      </View>

      {/* RATING */}
      <View style={{ marginTop: ms(5) }}>
        <Text style={{ color: "#A9ABAD", fontSize: 16 }}>⭐ 5.0 (500)</Text>
      </View>

      {/* ADD / MINUS BUTTON */}
      <View style={{ alignItems: "flex-end" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#00c853",
              width: ms(30),
              height: ms(30),
              borderRadius: ms(15),
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setNum(Math.max(1, num - 1));
            }}
          >
            <FontAwesome5 name="minus" color="white" size={16} />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: ms(22),
              marginHorizontal: ms(10),
              fontWeight: "500",
            }}
          >
            {num}kg
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "#00c853",
              width: ms(30),
              height: ms(30),
              borderRadius: ms(15),
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setNum(num + 1);
            }}
          >
            <Ionicons name="add" color="white" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* DESCRIPTION */}
      <ScrollView style={{ marginBottom: ms(50) }} showsVerticalScrollIndicator={false}>
        <Text style={styles.description}>Description</Text>
        <Text
          style={{
            fontSize: ms(16),
            marginTop: ms(10),
            lineHeight: ms(22),
            color: "gray",
          }}
        >
          Onions are a staple ingredient in many cuisines around the world. They
          are known for their pungent flavor and aroma, which can enhance the
          taste of various dishes. Onions are also rich in vitamins, minerals,
          and antioxidants, making them a healthy addition to any diet.
        </Text>
      

      <Text style={{ fontSize: ms(25), marginTop: ms(20), fontWeight: "600" }}>
        Related Products
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: ms(10) }}
      >
        <View style={{ flexDirection: "row", gap: ms(10) }}>
          <Image
            source={require("../../assets/images/tomato.jpg")}
            style={{ width: s(80), height: ms(80), borderRadius: ms(10) }}
          />
          <Image
            source={require("../../assets/images/gar.jpg")}
            style={{ width: s(80), height: ms(80), borderRadius: ms(10) }}
          />
          <Image
            source={require("../../assets/images/bell.jpg")}
            style={{ width: s(80), height: ms(80), borderRadius: ms(10) }}
          />
          <Image
            source={require("../../assets/images/spring (2).jpg")}
            style={{ width: s(80), height: ms(80), borderRadius: ms(10) }}
          />
        </View>
      </ScrollView>
</ScrollView>
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.AddCartBtn}>
          <Text style={styles.AddCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SeedDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(25),
  },

  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 30,
  },
  description: {
    fontSize: ms(25),
    fontWeight: "600",
    marginTop: ms(20),
  },

  bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: ms(25),
  },

  AddCartBtn: {
    backgroundColor: "#00c853",
    paddingVertical: Platform.OS === "ios" ? ms(14) : ms(10),
    borderRadius: ms(10),
    alignItems: "center",
  },
  AddCartText: {
    color: "white",
    fontSize: ms(18),
    fontWeight: "400",
  },
});
