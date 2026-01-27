import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import Products from "../../Components/Products";

export default function SeeAll() {
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
      image: require("../../assets/images/Almond.jpg"),
      title: "Almond Seeds",
      price: "120/",
      unit: "kg",
    },
    {
      id: 3,
      image: require('../../assets/images/Pumpkins.jpg'),
      title: "Pumpkin Seeds",
      price: "120/",
      unit: "kg"
    },

    {
      id: 4,
      image: require('../../assets/images/Wheat.jpg'),
      title: "Wheat Seeds",
      price: "100/",
      unit: "kg"
    },
    {
      id: 5,
      image: require('../../assets/images/beans.jpg'),
      title: "Beans Seed",
      price: "70/",
      unit: "kg"
    },

    {
      id: 6,
      image: require('../../assets/images/corn.jpg'),
      title: "Corn Seeds",
      price: "70/",
      unit: "kg"
    },
    {
      id: 7,
      image: require('../../assets/images/Cocoa.jpg'),
      title: "Cocoa Seeds",
      price: "70/",
      unit: "kg"
    },

    {
      id: 8,
      image: require('../../assets/images/corn.jpg'),
      title: "Corn Seeds",
      price: "70/",
      unit: "kg"
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor:"#fff", flex:1}}>
     <View style={styles.Header}>
        <TouchableOpacity  onPress={()=>router.back()

        }>
          <Ionicons name="chevron-back" size={ms(28)} color="#636567ff"/>
        </TouchableOpacity>

        <Text style={{ fontSize: s(22), marginBottom: ms(4), fontWeight: "500" }}>
         Seeds
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
          <EvilIcons name="search" size={ms(32)} />
         
        </View>
      </View>


     {/* FlatList for the Products Items */}
        <FlatList
      data={ProductItems}
      numColumns={2 }
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: ms(25), paddingTop: ms(5) }}
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
    // marginTop: 30,
    alignItems: "center",
    paddingHorizontal: ms(25),
    justifyContent: "space-between",
    
  },

 

})
