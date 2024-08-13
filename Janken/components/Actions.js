import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const Actions = ({ play, canPlay }) => {
  return (
    <View style={styles.actions}>
      <TouchableOpacity // Rock
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(1)}
      >
        <FontAwesome5 name={"hand-rock"} size={32} color={colors.handRock} />
      </TouchableOpacity>

      <TouchableOpacity // Paper
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(2)}
      >
        <FontAwesome5 name="hand-paper" size={32} color={colors.handPaper} />
      </TouchableOpacity>

      <TouchableOpacity // Scissors
        disabled={!canPlay}
        style={styles.actionButton}
        onPress={() => play(3)}
      >
        <FontAwesome5
          name="hand-scissors"
          size={32}
          color={colors.handScissors}
          style={{ transform: [{ rotate: "67deg" }] }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  actionButton: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.actionButton,
    borderRadius: 32,
  },
});

export default Actions;
