import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Felix");
  const [age, setAge] = useState(34);

  const updateName = (enteredValue) => {
    setName(enteredValue);
  };

  const updateAge = (enteredValue) => {
    setAge(enteredValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={updateName}
        />
        <TextInput
          style={styles.input}
          placeholder="age"
          onChangeText={updateAge}
        />
      </View>
      <Text>
        name: {name}, age:{age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "black",
    width: "50%",
    height: 30,
  },
  inputContainer: {
    width: 300,
    height: "15%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
