import { Ionicons } from '@expo/vector-icons'; // for bookmark and plus icons
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ms, s, vs } from 'react-native-size-matters';


type ProductCardProps = {
  image: any; 
  title: string;
  price: string | number;
  unit: string
};

const ProductCard = ({ image, title, price,unit }: ProductCardProps) => {

  const [bookmarked, setBookmarked] = React.useState(false);
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <TouchableOpacity style={styles.bookmark} onPress={() => setBookmarked(!bookmarked)}>
        <Ionicons
         name = { bookmarked ? "bookmark" : "bookmark-outline"}
          size={ms(16)} 
          color= {bookmarked? "green" : "#444"} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection:"row", alignItems: "center"}}>
        <Text style={styles.price}>
          {price}
        </Text>
        <Text style={styles.unit}>
          {unit}
        </Text>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={ms(18)} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: s(145),
    backgroundColor: '#ffffffff',
    borderRadius: ms(10),
    marginBottom: vs(12),
    paddingBottom: vs(10),
    shadowOpacity: 0.08,
    shadowOffset: {
      width: s(2), height: vs(2)
    },
    shadowRadius: ms(4),
    elevation: 2,
  },
  image: {
    width: '100%',
    height: vs(120),
    borderRadius: ms(8),
    marginBottom: vs(8),
  },
  bookmark: {
    position: 'absolute',
    top: vs(8),
    right: s(8),
    backgroundColor: '#ffffffcc',
    borderRadius: ms(4),
    padding: ms(4),
  },
  title: {
    fontWeight: '600',
    fontSize: ms(16),
    marginBottom: vs(4),
    paddingLeft: s(10),
    paddingTop: vs(3)
  },
  price: {
    fontSize: ms(16),
    color: '#000',
    paddingLeft: s(10),
    paddingTop: vs(5),
    paddingBottom: vs(8)
  },
  unit: {
    fontSize: ms(14),
    color: '#999',
    // marginLeft: s(),
    paddingTop: vs(5),
    paddingBottom: vs(8)
  },
  addButton: {
    position: 'absolute',
    bottom: vs(10),
    right: s(10),
    backgroundColor: '#00c853',
    borderRadius: ms(6),
    padding: ms(6),
  },
});

export default ProductCard;
