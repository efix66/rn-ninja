import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

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
      Alert.alert("Must enter al least 3 characters", {});
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodo={handleAddTodo} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TodoItem item={item.text} pressHandler={handleDelete(item.id)} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
