import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <View style={styles.itemContains}>
      <Text style={styles.item}>{item}</Text>
      <TouchableOpacity
        onPress={() => {
          pressHandler();
        }}>
        <MaterialIcons name='delete' size={24} color='red' />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContains: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
