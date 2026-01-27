import { MaterialIcons } from "@expo/vector-icons";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import Hamburger from "../../IconsSVGs/HamburgerMenu";

export default function Cart() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.Header}>
        <TouchableOpacity style={styles.HamCircle}>
          <Hamburger />
        </TouchableOpacity>

        <Text style={{ fontSize: s(22), marginBottom: ms(4), fontWeight: "500" }}>
          My Cart
        </Text>

        <View
          style={{
            height: vs(40),
            width: s(45),
            borderRadius: ms(25),
            backgroundColor: "#ffffffff",
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // parent for absolute badge
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? ms(40) : undefined,
  },

  Header: {
    
    flexDirection: "row",
    // marginTop: ms(10),
    alignItems: "center",
    paddingHorizontal: ms(25),
    justifyContent: "space-between",
    marginBottom: ms(10),
  
  },

  HamCircle: {
    height: Platform.OS === "android" ? vs(40) : vs(40),
    width: Platform.OS === "android" ? s(45) : s(45),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9e9e9d8",
    // padding: ms(9),
    borderRadius: ms(25),
    marginRight: ms(10),
  },
});
