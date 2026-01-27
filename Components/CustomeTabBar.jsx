import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ms } from "react-native-size-matters";

import HomeLogoOutline from "../IconsSVGs/HomeLogoOuline";

import StoreOutline from "../IconsSVGs/StoreLogoOutline";

import CartLogoOutline from "../IconsSVGs/CartLogoOutline";

import ProfileLogoOutline from "../IconsSVGs/ProfileLogoOutline";

export default function CustomTabBar({ state, descriptors, navigation }) {
  const icons = {
  Home: { 
    active: <HomeLogoOutline color="#fff" />, 
    inactive: <HomeLogoOutline color="#fff" /> 
  },

  Services: { 
    active: <StoreOutline color="#fff" />, 
    inactive: <StoreOutline color="#fff" /> 
  },

  Cart: { 
    active: <CartLogoOutline color="#fff" />, 
    inactive: <CartLogoOutline color="#fff" /> 
  },

  Profile: { 
    active: <ProfileLogoOutline color="#fff" />, 
    inactive: <ProfileLogoOutline color="#fff" /> 
  },
};


  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconSet = icons[route.name];

        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.tab, isFocused && styles.activeTab]}
            onPress={() => navigation.navigate(route.name)}
          >
            {isFocused ? iconSet.active : iconSet.inactive}

            {isFocused && (
              <Text style={styles.label}>{route.name}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  position: "absolute",
  bottom: ms(20),
  left: ms(20),
  right: ms(20),
  flexDirection: "row",
  justifyContent: "space-between",
  padding: ms(10),
backgroundColor: "rgba(2, 178, 80, 0.8)",// 55% opacity
  // <-- transparent green
  borderRadius: ms(40),
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 4 },
},

  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ms(16),
    paddingVertical: ms(10),
    borderRadius: ms(30),
  },

  activeTab: {
    backgroundColor: "#008d23ff", // lighter green pill
  },

  label: {
    marginLeft: ms(8),
    color: "#fff",
    fontSize: ms(13),
    fontWeight: "600",
  },
});
