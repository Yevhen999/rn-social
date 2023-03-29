import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CommentsScreen = () => {
  return (
    <View>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text>CommentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CommentsScreen;
