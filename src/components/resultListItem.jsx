import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: result.image_url }}></Image>
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  img: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  },
  rate: {}
});

export default ResultDetail;
