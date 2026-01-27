import { FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from 'react-native-size-matters';
import Hamburger from "../../IconsSVGs/HamburgerMenu";

export default function Profile() {
  const Profile = [
    {
      id: 1,
      title: "Shipping Address",
      icon: "location-dot",
      family: "FontAwesome6",
    },
    {
      id: 2,
      title: "Payment Settings",
      icon: "payment",
      family: "MaterialIcons",
    },
    {
      id: 3,
      title: "Order History",
      icon: "clipboard-list",
      family: "FontAwesome6",
    },
    {
      id: 4,
      title: "Settings",
      icon: "settings-outline",
      family: "Ionicons",
    },
    {
      id: 5,
      title:  "Privacy Policy",
      icon: "privacy-tip",
      family: "MaterialIcons",
    },
    {
      id: 6,
      title: "Logout",
      icon: "logout",
      family: "MaterialCommunityIcons",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      
            
      <View style={styles.Header}>
        <TouchableOpacity style={styles.HamCircle}>
          <Hamburger />
        </TouchableOpacity>

        <Text style={{ fontSize: s(25), marginBottom: ms(4), fontWeight: "500" }}>
          Profile
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
          <MaterialIcons name="edit" size={ms(20)} />
        </View>
      </View>
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: ms(50)}}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#01B252",
          marginHorizontal: ms(25),
          justifyContent: "space-between",
          paddingHorizontal: ms(20),
          paddingVertical: ms(20),
          borderRadius: ms(10),
          marginTop: vs(80),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: s(20), fontWeight:"600"}}>238</Text>
          <Text style={{ color: "white", fontSize: s(16) }}>Favorites</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: s(20), fontWeight:"600" }}>56</Text>
          <Text style={{ color: "white", fontSize: s(16) }}>Orders</Text>
        </View>
      </View>
      <View
        style={{
          height: ms(140),
          width: ms(140),
          borderRadius: ms(70),
          backgroundColor: "#ccc",
          alignSelf: "center",
          position: "absolute",
          top: vs(5),
          borderWidth: ms(10),
          borderColor: "white",
          overflow: "hidden",
          
        }}
      >
        <Image
          source={require("../../assets/images/Profile.jpg")}
          style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        />
      </View>

      <Text
        style={{
          alignSelf: "center",
          marginTop: ms(20),
          fontSize: s(25),
           fontWeight: "500",
        }}
      >
        Eugene Ayiku
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: ms(8),
        }}
      >
        <MaterialIcons name="location-on" color="#A9ABAD" size={ms(20)} />
        <Text style={{ fontSize: s(16), color: "#999b9cff", fontWeight: "500", marginLeft: ms(6) }}>
          Millennium
        </Text>
      </View>

<View style={{marginTop: ms(20)}}>
          {Profile.map((item) => {
    let IconComponent;

    switch (item.family) {
      case "Ionicons":
        IconComponent = Ionicons;
        break;
      case "FontAwesome6":
        IconComponent = FontAwesome6;
        break;
      case "MaterialIcons":
        IconComponent = MaterialIcons;
        break;
      case "MaterialCommunityIcons":
        IconComponent = MaterialCommunityIcons;
        break;
      default:
        IconComponent = FontAwesome6;
    }

    return (
      <TouchableOpacity key={item.id} style={styles.listItem}>
        <View style={styles.itemLeft}>
          <IconComponent
            name={item.icon}
            size={ms(20)}
            color="#A9ABAD"
            style={{ marginRight: ms(16) }}
          />
          <Text style={styles.listText}>{item.title}</Text>
        </View>

        <Ionicons name="chevron-forward" size={ms(20)} color="#A9ABAD" style={{position: "absolute", right: ms(20)}}/>
      </TouchableOpacity>
    );
    
  })}
  </View>
 </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   paddingTop: Platform.OS === "android"? ms(40): undefined
  },

  Header: {
    flexDirection: "row",
    marginTop: ms(15),
    alignItems: "center",
    paddingHorizontal: ms(25),
    justifyContent: "space-between",
  },

  HamCircle: {
    height: Platform.OS === "android" ? vs(40) : vs(40),
    width: Platform.OS === "android" ? s(45) : s(45),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9e9e9d8",
    padding: ms(9),
    borderRadius: ms(25),
    marginRight: ms(10),
  },

  Bell: {
    backgroundColor: "red",
    height: ms(14),
    width: ms(14),
    borderRadius: ms(7),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: ms(16),
    top: ms(5),
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: ms(12),
    // marginBottom: 2,
    marginHorizontal: ms(30),
    height: vs(50),
    marginTop: ms(5)
  },

  itemLeft: {
  flexDirection: "row",
  alignItems: "center",
},

listText: {
  fontSize: s(16),
   fontWeight: "500",
},
});
