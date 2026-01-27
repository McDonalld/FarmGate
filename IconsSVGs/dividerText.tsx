import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ms, s } from 'react-native-size-matters';


type DividerWithTextProps = {
  text: string;
};

const DividerWithText = ({text}:DividerWithTextProps) => {
  return (
    <View style={styles.container}>
    <View style={styles.line} />
    <Text style={styles.text} numberOfLines={2} adjustsFontSizeToFit={true} minimumFontScale={0.8}>{text}</Text>
    <View style ={styles.line} />
    </View>
  )
}

export default DividerWithText

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: ms(20)
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc"
    },

     text: {
      fontWeight: Platform.OS==="android"? "400": undefined,
    marginHorizontal: ms(10),
    color: '#aaa',
    fontSize: s(16),
    flexShrink: 1
  },

})