import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s } from "react-native-size-matters";
import CultiCards from "../../Components/CultiCards";

export default function CultivationProcess() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const ProductItems = [
    {
      id: 1,
      image: require("../../assets/images/Rice.jpg"),
      title: "Rice Seeds",
      price: "150/",
      unit: "kg",
    },

    {
      id: 2,
      image: require("../../assets/images/Onion.jpg"),
      title: "Onions",
      price: "30/",
      unit: "pcs",
    },
    {
      id: 3,
      image: require("../../assets/images/Tractor.jpg"),
      title: "Tractors",
      price: "25/",
      unit: "pcs",
    },

    {
      id: 4,
      image: require("../../assets/images/Lime.jpg"),
      title: "Lime",
      price: "150/",
      unit: "kg",
    },
    {
      id: 5,
      image: require("../../assets/images/Fertilize.jpg"),
      title: "Fertilizer",
      price: "250/",
      unit: "kg",
    },

    {
      id: 6,
      image: require("../../assets/images/Farm.jpg"),
      title: "Farming Tools",
      price: "35/",
      unit: "pcs",
    },
  ];

  const Culti = [
    {
      id: 1,
      text: "Flowers",
    },
    {
      id: 2,
      text: "Fruits",
    },
    {
      id: 3,
      text: "Crops",
    },
    {
      id: 4,
      text: " Herbs",
    },
    {
      id: 5,
      text: "Machinery",
    },
    {
      id: 6,
      text: "Tools",
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginLeft: ms(20) }}
        >
          <Ionicons name="chevron-back-outline" size={ms(34)} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cultivation Process</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: s(25), paddingTop: ms(20),  }}
        showsHorizontalScrollIndicator={false}
      >
        {Culti.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedId(item.id)}
          >
            <CultiCards text={item.text} active={selectedId === item.id} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ flex: 1, alignItems: "center", marginTop: ms(20) }}>
        {selectedId === 1 && <Text style={{ fontSize: 20 }}>FLOWERS</Text>}
        {selectedId === 2 && <Text style={{ fontSize: 20 }}>FRUITS</Text>}
        {selectedId === 3 && <Text style={{ fontSize: 20 }}>CROPS</Text>}
        {selectedId === 4 && <Text style={{ fontSize: 20 }}>HERBS</Text>}
        {selectedId === 5 && <Text style={{ fontSize: 20 }}>MACHINERY</Text>}
        {selectedId === 6 && <Text style={{ fontSize: 20 }}>TOOLS INFO</Text>}
      </View>

      {/* FlatList for the Products Items */}
      {/* {/* <FlatList
      data={ProductItems}
      numColumns={2 }
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: 25, paddingTop: 20 }}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }) => (
        <Products
          image={item.image}
          title={item.title}
          price={item.price} unit={item.unit}        />
      )}
    /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: Platform.OS === "android" ? ms(60) : ms(5),
    gap: ms(50),
  },
  headerTitle: {
    fontSize: ms(22),
    fontWeight: "500",
  },

  HamCircle: {
    height: 50,
    width: 50,
    backgroundColor: "#e9e9e9d8",
    padding: 9,
    borderRadius: 25,
    marginRight: 10,
  },
});
