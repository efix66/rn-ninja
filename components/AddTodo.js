import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [enteredText, setEnteredText] = useState("");

  const changeHandeler = (textEntered) => {
    setEnteredText(textEntered);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={enteredText}
        onChangeText={changeHandeler}
        placeholder='Enter a todo'
      />
      <Button
        title='Add'
        color={"tomato"}
        onPress={() => addTodo(enteredText)}
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
