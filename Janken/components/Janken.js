import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated } from "react-native";
import Constants from "expo-constants";

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
  }
}

const styles = StyleSheet.create({});
