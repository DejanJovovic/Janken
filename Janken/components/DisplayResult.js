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

const styles = StyleSheet.create({});

export default DisplayResult;
