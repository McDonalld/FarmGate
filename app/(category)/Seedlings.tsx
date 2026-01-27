import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import Products from "../../Components/Products";

export default function Seedlings() {
    const ProductItems = [
    {
      id: 1,
      image: require("../../assets/images/Garlic.jpg"),
      title: "Garlic",
      price: "10/",
      unit: "pcs",
    },

    {
      id: 2,
      image: require("../../assets/images/OnionSeedlings.jpg"),
      title: "Onion",
      price: "100/",
      unit: "pcs",
    },
    {
      id: 3,
      image: require('../../assets/images/Mango.jpg'),
      title: "Mango",
      price: "80/",
      unit: "pcs"
    },

    {
      id: 4,
      image: require('../../assets/images/LimeSeedlings.jpg'),
      title: "Lime",
      price: "30/",
      unit: "pcs"
    },
    {
      id: 5,
      image: require('../../assets/images/tomato.jpg'),
      title: "Tomato",
      price: "20/",
      unit: "pcs"
    },

    {
      id: 6,
      image: require('../../assets/images/Pepper.jpg'),
      title: "Pepper",
      price: "15/",
      unit: "pcs"
    },
    {
      id: 7,
      image: require('../../assets/images/Cabbage.jpg'),
      title: "Cabbage",
      price: "100/",
      unit: "pcs"
    },

    {
      id: 8,
      image: require('../../assets/images/Lettuce.jpg'),
      title: "Lettuce",
      price: "80/",
      unit: "pcs"
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor:"#fff", flex:1}}>
     <View style={styles.Header}>
        <TouchableOpacity  onPress={()=>router.back()}>
          <Ionicons name="chevron-back" size={ms(28)} color="#636567ff"/>
        </TouchableOpacity>

        <Text style={{ fontSize: s(22), marginBottom: ms(4), fontWeight: "500" }}>
         Seedlings
        </Text>

        <View
          style={{
            height: vs(40),
            width: s(45),
            borderRadius: ms(25),
            backgroundColor: "#ffffffff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <EvilIcons name="search" size={ms(30)} />
          
        </View>
      </View>


     {/* FlatList for the Products Items */}
        <FlatList
      data={ProductItems}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: ms(25), paddingTop: ms(5), paddingBottom: ms(20) }}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: ms(15) }}
      renderItem={({ item }) => (
        <Products
          image={item.image}
          title={item.title}
          price={item.price} unit={item.unit}        />
      )}
    />

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  Header: {
    flexDirection: "row",
    // marginTop: 20,
    alignItems: "center",
    paddingHorizontal: ms(25),
    justifyContent: "space-between",
    
  },

  HamCircle: {
    height: vs(50),
    width: s(50),
    backgroundColor: "#e9e9e9d8",
    padding: ms(9),
    borderRadius: ms(25),
    marginRight: ms(10),
  },

})
