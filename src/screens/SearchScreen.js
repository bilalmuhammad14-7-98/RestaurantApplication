import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(value) => {
          setTerm(value);
        }}
        onTermSubmit={() => {
          console.log("welcome");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
