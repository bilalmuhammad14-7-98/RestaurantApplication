import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errmess] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errmess ? <Text>{errmess}</Text> : null}
      <Text>Hello {results.length}</Text>
      <ResultsList results={filterResults("$")} title="Cost Effective" />
      <ResultsList results={filterResults("$$")} title="Bit Pricer" />
      <ResultsList results={filterResults("$$$")} title="Big spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
