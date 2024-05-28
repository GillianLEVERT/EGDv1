import { Link } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const DimensionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Dimension Screen</Text>
      <Link href="/">REVENIR AU DEBUT</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DimensionScreen;
