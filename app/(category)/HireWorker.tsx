import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";

export default function HireWorker() {
  const [num, setNum] = useState(0);

  return (
   
    <SafeAreaView style={styles.container}>
       
      {/* HEADER */}
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={ms(28)} color="#000000ff" />
        </TouchableOpacity>

        <Text style={{ fontSize: ms(22), marginBottom: ms(4), fontWeight: "500" }}>
          Hire Worker
        </Text>

        <View>
          <Ionicons name="bookmark-outline" size={ms(26)} color="#444" />
        </View>
      </View>

      <ScrollView 
    contentContainerStyle={{ paddingBottom: ms(100) }} // leave space for button
        showsVerticalScrollIndicator={false}>

      {/* IMAGE */}
      <Image
        source={require("../../assets/images/HireWorker.jpg")}
        style={styles.Image}
      />

      {/* HIRE WORKER */}
      <View
        style={{
          marginTop: ms(20),
          paddingHorizontal: s(30),
          marginBottom: ms(5),
        }}
      >
        <Text style={{ fontSize: ms(25), fontWeight: "600" }}>Hire Worker</Text>
      </View>

      {/* SERVICE AVAILABLE && NO / WORKER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: s(30),
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#00c853", fontSize: ms(17) }}>
          Service available
        </Text>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ fontSize: ms(22), fontWeight: "500" }}>400/</Text>
          <Text
            style={{  fontSize:ms(18), color: "#A9ABAD" }}
          >
            worker
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: s(30), marginTop: ms(5) }}>
        <Text style={{ color: "#A9ABAD", fontSize: 16 }}>⭐ 4.8 (52)</Text>
      </View>

      {/* ADD / MINUS BUTTON */}

      <View style={{ alignItems: "flex-end", paddingHorizontal: s(30) }}>
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
              setNum(Math.max(0, num - 1));
            }}
          >
            <FontAwesome6 name="minus" color="white" size={16} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              marginHorizontal: ms(10),
              fontWeight: "500",
            }}
          >
            {num}
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

      {/* INFORMATION AND IT'S DATA */}

      <View style={{ paddingHorizontal: s(30) }}>
        <Text style={{marginBottom: ms(10), fontSize: ms(20), fontWeight: "500"}}>Information</Text>
        <View style={styles.TextRow}>
          <MaterialIcons name="location-on" size={ms(20)}  color="#A9ABAD" style={{marginRight: ms(5)}}/>
          <TextInput placeholder="Your Location" placeholderTextColor="#A9ABAD" style={{fontSize: ms(15)}} />
        </View>
        <View style={styles.TextRow}>
          <Ionicons name="walk-outline" size={ms(20)}  color="#A9ABAD" style={{marginRight: ms(5)}}/>
          <TextInput placeholder="Type of work" placeholderTextColor="#A9ABAD"style={{fontSize: ms(15)}} />
        </View>
        <View style={styles.TextRow}>
          <MaterialCommunityIcons name="clock" size={ms(20)} color="#A9ABAD" style={{marginRight: ms(5)}}/>
          <TextInput placeholder="Working hours" placeholderTextColor="#A9ABAD" style={{fontSize: ms(15)}}/>
        </View>
      </View>
       </ScrollView>

       <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.hireNowBtn}>
          <Text style={styles.hireNowText}>Hire Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  Image: {
    height: vs(200),
    width: s(300),
    alignSelf: "center",
    marginTop: ms(20),
    borderRadius: ms(20),
  },

  Header: {
    flexDirection: "row",
    // marginTop: ms(30),
    alignItems: "center",
    paddingHorizontal: s(25),
    justifyContent: "space-between",
  },

  TextRow: {
    flexDirection: "row",
    borderWidth: ms(1),
    height: vs(50),
    marginBottom: ms(15),
    borderRadius: ms(10),
    alignItems: "center",
    paddingLeft: ms(12),
    borderColor: "#d5d5d5ff",
    

  },
   bottomButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: ms(30),
    
   
  },
  hireNowBtn: {
    backgroundColor: "#00c853",
    paddingVertical: ms(14),
    borderRadius: ms(10),
    alignItems: "center",
  },
  hireNowText: {
    color: "white",
    fontSize: ms(18),
    fontWeight: "400",
  },
});
