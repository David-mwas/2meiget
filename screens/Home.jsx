import { View, Text, StyleSheet, Platform, StatusBar, ScrollView } from "react-native";
import React from "react";
const Colors = {
  primary: "#387ADF",
  secondary: "#4cbb17",
};

const Home = () => {
  const user = "Maich";
  const station = "MMUST Gate-A";
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>
          Hello, <Text style={styles.text}>{user}</Text> from{" "}
          <Text style={styles.textGreen}>{station}</Text>👋
        </Text>
      </View>
      <View style={styles.stats}>
        <Text style={styles.textStats}>Statistics</Text>
        <View style={styles.display}>
          <View style={styles.dispalyContainer}>
            <Text style={styles.textDisplay}>200</Text>
            <Text>Found IDs</Text>
          </View>
          <View
            style={[
              styles.dispalyContainer,
              { backgroundColor: Colors.primary },
            ]}
          >
            <Text style={styles.textDisplay}>200</Text>
            <Text>Found IDs</Text>
          </View>
        </View>
      </View>
      <View style={styles.stats}>
        <Text style={styles.textRecents}>Recent IDs</Text>
        <ScrollView style={styles.ListContainer} vertical>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
          <View style={styles.listView}>
            <Text style={styles.textList}>1234567</Text>
            <Text style={styles.textList1}>12/2/2024</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#F5FCFF",
    paddingHorizontal: 15,
  },
  welcome: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary,
  },
  textGreen: {
    color: Colors.secondary,
  },
  stats: {
    marginTop: 50,

    justifyContent: "space-between",
  },
  textStats: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textRecents: {
    fontSize: 30,
    fontWeight: "bold",
  },
  display: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dispalyContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
    padding: 10,
    height: 150,
    width: "48%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5.84,
    elevation: 20,
  },
  textDisplay: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
    marginBottom: 20,
  },
  ListContainer: {
    marginTop: 10,
   marginBottom: 100,
  },
  listView: {
    marginBottom: 10,
    backgroundColor: "#d4d4d4",
    gap: 5,
    padding: 10,
    borderRadius: 15,

  },
  textList: {
    fontSize: 25,
    fontWeight: "semibold",
    color: "#494847",
  },
  textList1: {
    fontSize: 13,
    fontWeight: "light",
    color: "#494847",
    alignSelf: "flex-end",
  },
});

export default Home;
