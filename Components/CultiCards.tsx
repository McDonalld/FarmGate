import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ms, s, vs } from 'react-native-size-matters'

type CultiCardsProps = {
    text: string,
    active: boolean
}

export default function CultiCards({text, active=false} : CultiCardsProps) {
  return (
    
    <View style={[styles.container, active && styles.activeContainer]}>
      <Text style={[styles.TextS, active && styles.activeText]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0eeeeff",
        justifyContent: "center",
        alignItems: "center",
        marginRight: ms(8),
        alignSelf: "flex-start",
        paddingHorizontal: s(10),
        paddingVertical: vs(10),
        borderRadius: ms(5),
        

    },

    TextS: {
        fontSize: ms(16),
        fontWeight: "500",
        color: "#acacacff",
        
    },

     activeContainer: {
      
    backgroundColor: "#03bc50ff",
    justifyContent: "center",
        alignItems: "center",
        marginRight: ms(8),
        alignSelf: "flex-start",
        paddingHorizontal: s(10),
        paddingVertical: vs(10),
        borderRadius: ms(5),   // active green
  },
 
  activeText: {
    color: "#fff",
    fontSize: ms(16),
        fontWeight: "500" // active text = white
  }
})