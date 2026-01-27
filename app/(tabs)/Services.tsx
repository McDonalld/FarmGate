import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ms, s, vs } from "react-native-size-matters";
import ImageCard from "../../Components/OurServices";
import Hamburger from "../../IconsSVGs/HamburgerMenu";

export default function Services() {
  const data = [
    {
      id: "1",
      label: "Seeds",
      image: require("../../assets/images/Seeds.jpg"),
    },
    {
      id: "2",
      label: "Seedlings",
      image: require("../../assets/images/Harvesting.jpg"),
    },
    {
      id: "3",
      label: "Machinery",
      image: require("../../assets/images/Machinery.jpg"),
    },
    {
      id: "4",
      label: "Hire Worker",
      image: require("../../assets/images/Worker.jpg"),
    },
    {
      id: "5",
      label: "Cultivation Process",
      image: require("../../assets/images/Cultivatee.jpg"),
    },
    {
      id: "6",
      label: "Crop disease solution",
      image: require("../../assets/images/Disease.jpg"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity style={styles.HamCircle}>
          <Hamburger />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: s(25),
            marginBottom: ms(4),
            fontWeight: "600",
            marginRight: ms(25),
          }}
        >
          Services
        </Text>

        <FontAwesome
          name="bell"
          size={ms(25)}
          color="#02B15F"
          style={{ marginRight: ms(25) }}
        />
        <View style={styles.Bell}>
          <Text style={{ color: "white", fontSize: s(10), fontWeight: "bold" }}>
            3
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.id === "1") {
                  router.push("/Seeds");
                } else if (item.id === "2") {
                  router.push("/Seedlings");
                } else if (item.id === "3") {
                  router.push("/Machinery");
                } else if (item.id === "4") {
                  router.push("/HireWorker");
                } else if (item.id === "6") {
                  router.push("/CropDisease");
                } else {
                  router.push("/CultivationProcess");
                }
              }}
            >
              <ImageCard image={item.image} label={item.label} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? ms(40) : undefined,
    backgroundColor: "#fff",
  },

  Header: {
    flexDirection: "row",
    // marginTop: ms(10),
    alignItems: "center",
    paddingHorizontal: ms(25),
    justifyContent: "space-between",
    marginBottom: ms(12),
  },

  HamCircle: {
    height : Platform.OS === "android" ? vs(40) : vs(40),
    width : Platform.OS === "android" ? s(45) : s(45),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9e9e9d8",
    // padding: ms(9),
    borderRadius: ms(25),
    marginLeft: ms(10),
  },

  HeaderTexts: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },

  Bell: {
    backgroundColor: "red",
    height: ms(14),
    width: ms(14),
    borderRadius: ms(7),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: ms(46),
    top: ms(5),
  },

  list: {
    alignItems: "center",
    // paddingVertical: ms(5),
    // paddingBottom: ms(10),
  },
});
