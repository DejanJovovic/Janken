import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated } from "react-native";
import Constants from "expo-constants";
import DisplayText from "./DisplayText";
import Actions from "./Actions";

export default function Janken() {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [result, setResult] = useState("");
  const [canPlay, setPlay] = useState(true);

  // For Animation
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  function play(choice) {
    /* 3 Choice */
    // 1 = rock
    // 2 = paper
    // 3 = scissors

    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let resultString = "";

    if (choice == 1) {
      resultString = randomComputerChoice === 3 ? "WIN" : "LOSE";
    } else if (choice === 2) {
      resultString = randomComputerChoice === 1 ? "WIN" : "LOSE";
    } else {
      resultString = randomComputerChoice === 2 ? "WIN" : "LOSE";
    }
    if (choice === randomComputerChoice) {
      resultString = "DRAW";
    }

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    // Wait animation hide old result
    setTimeout(() => {
      setResult(resultString);
    }, 300);

    // Animation to hide old result and show new result
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Disable action when animation running
    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 600);
  }

  // Return the view
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.result}>
          <Animated.Text
            style={[styles.resultText, { opacity: fadeAnimation }]}
          >
            {result}
          </Animated.Text>
        </View>
        <View style={styles.screen}>
          {!result ? (
            <Text style={styles.readyText}>Let's Play</Text>
          ) : (
            <DisplayText
              userChoice={userChoice}
              computerChoice={computerChoice}
            />
          )}
        </View>
        <Actions play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
