import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/searchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/resultsList";
const Search = () => {
  const [term, setTerm] = React.useState("");
  const [searchApi, results, err] = useResults();
  const filterResultByPrice = price => {
    return results.filter(res => res.price === price);
  };

  return (
    <>
      <SearchBar term onTermSubmit={() => searchApi(term)} onInput={setTerm} />
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost effective"
        />
        <ResultsList results={filterResultByPrice("$$")} title="Pricier" />
        <ResultsList results={filterResultByPrice("$$$")} title="Big spender" />
      </ScrollView>
    </>
  );
};

export default Search;
