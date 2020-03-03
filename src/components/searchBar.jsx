import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onInput, onTermSubmit }) => {
  return (
    <View style={styles.bgc}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        onChangeText={onInput}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgc: {
    backgroundColor: "#f0eeee",
    height: 50,
    marginVertical: 15,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row"
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15
  },
  input: {
    borderColor: "black",
    fontSize: 18,
    flex: 1
  }
});
export default SearchBar;
