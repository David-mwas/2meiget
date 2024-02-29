import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";

const Search = () => {
  const [text, setText] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          keyboardType="numeric" // Change the keyboard type here
          placeholder="Enter ID number"
          value={text}
          onChangeText={(e)=>{setText(Number(e))}}      />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Search</Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#F5FCFF",
    marginTop: 100,
    borderRadius: 20,
    height: 70,
  },
  input: {
    width: "70%",
    padding: 10,
    backgroundColor: "#F5FCFF",
    borderRadius: 20,
  },
  button: {
    padding: 10,
    height: "100%",
    backgroundColor: "#0000ff",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Search;
