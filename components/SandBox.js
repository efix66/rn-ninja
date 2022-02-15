import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

export default SandBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    // flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 2,
  },
  boxTwo: { backgroundColor: "gold", padding: 20, flex: 1 },
  boxThree: { backgroundColor: "coral", padding: 30, flex: 1 },
  boxFour: { backgroundColor: "skyblue", padding: 40, flex: 1 },
});
