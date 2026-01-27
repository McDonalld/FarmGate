import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ms, s, vs } from "react-native-size-matters";

type cropsDetails = {
    title: string
    Description: any
    image : any
    Description2: string
}


export default function Crops({title, Description, image, Description2}: cropsDetails) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={{ width: s(130), height: vs(120) }}
      />

      <View style={{ flex: 1, marginLeft: ms(10) }}>
        <Text style={{fontSize: 22, fontWeight: '500', marginTop: 5}}>{title}</Text>
        <Text style={{ marginTop: ms(10)}} >
          {Description} 
        </Text>
        <Text  >
        {Description2}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "#06ba51ff",
            padding: ms(5),
            borderRadius: ms(4),
            marginBottom: ms(5),
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "500" }}>Read Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    resizeMode: "contain",
    backgroundColor: "#fdfdfdff",
    overflow: "hidden",
    borderRadius: ms(15),
    marginHorizontal: 30,
    marginTop: -10
  },
});
