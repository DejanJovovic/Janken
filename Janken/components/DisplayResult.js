import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../config/colors";

const ICONS = ["hand-rock", "hand-paper", "hand-scissors"];

const DisplayResult = ({ userChoice, computerChoice }) => {
  return (
    <>
      <View style={styles.column}>
        <FontAwesome5
          name={ICONS[userChoice - 1]}
          size={64}
          color={colors.actionButton}
          solid
          style={userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
        />

        <Text style={styles.playerName}>You</Text>
      </View>
      <View style={styles.column}>
        <FontAwesome5
          name={ICONS[computerChoice - 1]}
          size={64}
          color={colors.actionButton}
          solid
          style={
            computerChoice === 3 ? styles.scissorsRightIcon : styles.rightIcon
          }
        />
        <Text style={styles.playerName}>Computer</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playerName: {
    color: colors.playerName,
    marginTop: 16,
    fontSize: 16,
  },
  leftIcon: {
    transform: [{ rotateZ: "80deg" }],
  },
  scissorsLeftIcon: {
    transform: [{ rotateZ: "180deg" }, { rotateX: "180deg" }],
  },
  rightIcon: {
    transform: [
      { rotateZ: "180deg" },
      { rotateY: "180deg" },
      { rotateX: "180deg" },
    ],
  },
});

export default DisplayResult;
