import React from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/searchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultsList";
const Search = () => {
  const [term, setTerm] = React.useState("");
  const [searchApi, err, results] = useResults();
  const filterResultByPrice = price => {
    results.filter(res => res.price === price);
  };

  return (
    <View>
      <SearchBar term onTermSubmit={() => searchApi(term)} onInput={setTerm} />
      <ResultsList results={filterResultByPrice("$")} title="Cost effective" />
      <ResultsList results={filterResultByPrice("$$")} title="Pricier" />
      <ResultsList results={filterResultByPrice("$$$")} title="Big spender" />
      <Text>{!err ? `We have found ${results.length}` : `${err}`}</Text>
    </View>
  );
};

export default Search;
