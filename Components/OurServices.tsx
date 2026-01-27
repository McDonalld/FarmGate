import React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import { ms, s, vs } from 'react-native-size-matters';

type ImageCardProps = {
  image: any,
  label: string
}

const ImageCard = ({ image, label }:ImageCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: s(140),
    height: Platform.OS==="ios"? vs(160):vs(160),
    borderRadius: 15,
    marginHorizontal: ms(10),
    marginTop: 10
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    
    
  },
  imageStyle: {
    borderRadius: 15,
    
  },
  labelContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ImageCard;
