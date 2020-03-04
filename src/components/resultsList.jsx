import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./resultListItem";
function resultsList({ title, results }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={res => res.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item}>{item.name}</ResultDetail>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});
export default resultsList;
