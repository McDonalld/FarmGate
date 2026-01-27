import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import Products from "../Components/Products";

export default function SeeAll() {
  const ProductItems = [
    {
      id: 1,
      image: require("../assets/images/Rice.jpg"),
      title: "Rice Seeds",
      price: "150/",
      unit: "kg",
    },

    {
      id: 2,
      image: require("../assets/images/Onion.jpg"),
      title: "Onions",
      price: "30/",
      unit: "pcs",
    },
    {
      id: 3,
      image: require("../assets/images/Tractor.jpg"),
      title: "Tractors",
      price: "25/",
      unit: "pcs",
    },

    {
      id: 4,
      image: require("../assets/images/Lime.jpg"),
      title: "Lime",
      price: "150/",
      unit: "kg",
    },
    {
      id: 5,
      image: require("../assets/images/Fertilize.jpg"),
      title: "Fertilizer",
      price: "250/",
      unit: "kg",
    },

    {
      id: 6,
      image: require("../assets/images/Farm.jpg"),
      title: "Farming Tools",
      price: "35/",
      unit: "pcs",
    },
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.HamCircle}
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={ms(28)} color="#636567ff" />
        </TouchableOpacity>

        <Text style={{ fontSize: s(18), marginBottom: ms(4), fontWeight: "500" }}>
          All Featured Products
        </Text>

        <View
          style={{
            height: vs(40),
            width: s(45),
            borderRadius: ms(25),
            backgroundColor: "#FBFFF2",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <MaterialIcons name="shopping-cart" size={ms(28)} />
          <View
            style={{
              backgroundColor: "red",
              height: ms(14),
              width: ms(14),
              borderRadius: ms(7),
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: ms(6),
              right: ms(6),
            }}
          >
            <Text style={{ color: "white", fontSize: s(10), fontWeight: "bold" }}>
              3
            </Text>
          </View>
        </View>
      </View>

      {/* FlatList for the Products Items */}
      <FlatList
        data={ProductItems}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: ms(25), paddingTop: ms(20), paddingBottom: ms(20) }}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: ms(15) }}
        renderItem={({ item }) => (
          <Products
            image={item.image}
            title={item.title}
            price={item.price}
            unit={item.unit}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  Header: {
    flexDirection: "row",
    // marginTop: Platform.OS === "ios" ? ms(30) : ms(50),
    alignItems: "center",
    paddingHorizontal: ms(25),
    justifyContent: "space-between",
  },

  HamCircle: {
    height: vs(40),
    width: s(45),
    backgroundColor: "#e9e9e9d8",
    padding: ms(9),
    borderRadius: ms(25),
    marginRight: ms(10),
  },
});
