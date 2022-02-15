import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import SandBox from "./components/SandBox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy a coffe", id: uuidv4() },
    { text: "Create a app", id: uuidv4() },
    { text: "Play on ps5", id: uuidv4() },
  ]);

  const testId = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => (e) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };

  const handleAddTodo = (enteredTodo) => {
    if (enteredTodo.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: enteredTodo, id: uuidv4() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    //<SandBox>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={handleAddTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem
                  item={item.text}
                  pressHandler={handleDelete(item.id)}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    //</SandBox>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
