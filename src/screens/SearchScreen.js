import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errmess, setErrMess] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log(err, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      setErrMess("something went wrong");
    }
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
