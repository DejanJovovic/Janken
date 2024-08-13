import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Janken from "./components/Janken";

export default function App() {
  return (
    <View style={styles.container}>
      <Janken />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
