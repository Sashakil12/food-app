import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../yelp";
const RestaurantShowScreen = ({ navigation }) => {
  const [result, setResult] = React.useState(null);
  const id = navigation.getParam("id");
  const getBusiness = async id => {
    const res = await yelp.get(`/businesses/${id}`);
    setResult(res.data);
  };
  React.useEffect(() => {
    getBusiness(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={url => url}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }}></Image>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 240
  }
});
export default RestaurantShowScreen;
