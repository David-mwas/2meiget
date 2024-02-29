import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  // Dummy data
  const defaultData = {
    email: "example@example.com",
    username: "example_user",
    password: "password123",
  };

  // State to hold the data
  const [data, setData] = useState(defaultData);

  // Function to reset the data to default
  const resetData = () => {
    setData(defaultData);
  };

  // Function to change the data
  const changeData = () => {
    const newData = { ...data, email: "new@example.com" }; // Example change, you can modify this as needed
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSpace} />
      <View style={styles.field}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          defaultValue={data.email}
        />
      </View>
      <View style={styles.field}>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          defaultValue={data.username}
        />
      </View>
      <View style={styles.field}>
        <Text>Password:</Text>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Enter your password"
          secureTextEntry={true}
          defaultValue={data.password}
        />
      </View>
      <View style={styles.field1}>
        <TouchableOpacity style={styles.button} onPress={changeData}>
          <Text style={styles.buttonText}>Change Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetData}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  topSpace: {
    height: 100,
  },
  field: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 10,
  },
  field1: {
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  passwordInput: {
    backgroundColor: "lightgray",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Profile;
