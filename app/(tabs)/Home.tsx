import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import Products from "../../Components/Products";
import Consultant from "../../IconsSVGs/Consultant";
import Hamburger from "../../IconsSVGs/HamburgerMenu";

export default function Home() {
  const ProductItems = [
    {
      id: "1",
      image: require("../../assets/images/okro.jpg"),
      title: "Okro",
      price: "150/",
      unit: "kg",
    },
    {
      id: "2",
      image: require("../../assets/images/Onion.jpg"),
      title: "Onions",
      price: "30/",
      unit: "pcs",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {/* HAMBURGER ICON AND HEADER*/}
      <View style={styles.Header}>
        <TouchableOpacity style={styles.HamCircle}>
          <Hamburger />
        </TouchableOpacity>


        <View style={styles.HeaderTexts}>
          <View>
            <Text
              style={{
                fontSize: s(18),
                marginBottom: ms(2),
                fontWeight: Platform.OS === "android" ? "400" : undefined,
              }}
            >
              Hi Eugene!👋
            </Text>
            <Text
              style={{
                color: "#BEBEBE",
                fontSize: s(16),
                fontWeight: Platform.OS === "android" ? "400" : undefined,
              }}
              numberOfLines={2}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.8}
            >
              Enjoy our services
            </Text>
          </View>

          <View style={{ marginTop: ms(5) }}>
            <FontAwesome name="bell" size={ms(25)} color="#02B15F" />
            <View
              style={{
                backgroundColor: "red",
                height: ms(14),
                width: ms(14),
                borderRadius: ms(7),
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: ms(-2),
                top: ms(-5),
              }}
            >
              <Text
                style={{ color: "white", fontSize: s(10), fontWeight: "bold" }}
              >
                3
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* SEARCH BUTTON AND Search ICON*/}
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      > */}
        <View style={styles.searchButton}>
          
            <Feather
              name="search"
              size={ms(25)}
              color="#9b9a9aff"
              style={{ paddingLeft: ms(25) }}
            />
            <TextInput
              placeholder="Search here..."
              placeholderTextColor="#afaeaeff"
              style={{ fontSize: s(16), height: vs(50), marginLeft: ms(8), flex: 1 }}
            />
        
        </View>

        {/* <View
          style={{
            backgroundColor: "#02B250",
            paddingVertical: Platform.OS === "android" ? vs(12) : vs(15),
            paddingHorizontal: Platform.OS === "android" ? vs(12) : vs(15),
            borderRadius: ms(10),
            marginTop: ms(24),
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "black",
            shadowOpacity: 0.1,
            shadowOffset: { width: ms(2), height: ms(3) },
          }}
        >
          <Slider />
        </View> */}
      {/* </View> */}

      {/* FlatList for the Products Items */}
      <FlatList
        data={ProductItems}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: ms(25), paddingTop: ms(20) }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        // ListHeaderComponent moved here
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                backgroundColor: "#F0FEF7",
                marginBottom: ms(25),
                marginTop: ms(15),
                borderRadius: ms(15),
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                padding: ms(20),
              }}
            >
              <View>
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{
                      fontSize: s(22),
                      fontWeight: "600",
                      color: "#20A55A",
                      marginBottom: ms(18),
                    }}
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.8}
                  >
                    Free Consultation
                  </Text>
                  <Text
                    style={{
                      fontSize: s(16),
                      fontWeight: Platform.OS === "android" ? "400" : undefined,
                    }}
                  >
                    Get free support from
                  </Text>
                  <Text
                    style={{
                      fontSize: s(16),
                      fontWeight: Platform.OS === "android" ? "400" : undefined,
                    }}
                  >
                    our customer service
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#02B652",
                      width: s(100),
                      paddingVertical: vs(8),
                      marginTop: ms(20),
                      borderRadius: ms(10),
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: s(16),
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      Call Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Consultant />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: ms(25),
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: s(20), fontWeight: "600" }}>
                Featured Products
              </Text>
              <TouchableOpacity onPress={() => router.push("/SeeAll")}>
                <Text
                  style={{ color: "#20A55A", fontSize: s(16), fontWeight: "500" }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
              onPress={() => {
                if (item.id === "1") {
                  router.push('/SeedDetails');
                } else {
                  router.push('/OnionDetails');
                
              }}
            }
            >
          <Products
            image={item.image}
            title={item.title}
            price={item.price}
            unit={item.unit}
          />
          
          </TouchableOpacity>
          
        )}
        
      />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: Platform.OS === "android" ? ms(30) : undefined,
  },

  Header: {
    flexDirection: "row",
    marginTop: ms(20),
    alignItems: "center",
    paddingHorizontal: ms(25),
  },

  HamCircle: {
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? vs(40) : vs(40),
    width: Platform.OS === "android" ? s(45) : s(45),
    backgroundColor: "#f3f3f3d8",
    // padding: ms(9),
    borderRadius: ms(25),
    marginRight: ms(10),
  },

  HeaderTexts: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },

  searchButton: {
    borderWidth: 1,
    
    flexDirection: "row",
    // paddingVertical: Platform.OS === "android" ? vs(4) : vs(15),
    // width: s(500),
    borderRadius: ms(10),
    marginTop: ms(25),
    borderColor: "#d6d6d6ff",
    alignItems: "center",
    marginHorizontal: ms(25),
    height: vs(50),
    // marginLeft: ms(20),
  },
});
