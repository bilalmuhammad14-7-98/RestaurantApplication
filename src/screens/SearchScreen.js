import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errmess] = useResults();

  const filterResults = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errmess ? <Text>{errmess}</Text> : null}
      {/* <Text>Hello {results.length}</Text> */}
      <ScrollView>
        <ResultsList
          results={filterResults("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList
          results={filterResults("$$")}
          title="Bit Pricer"
          navigation={navigation}
        />
        <ResultsList
          results={filterResults("$$$")}
          title="Big spender"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
});

export default SearchScreen;
