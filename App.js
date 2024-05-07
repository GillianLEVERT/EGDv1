import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, PanResponder } from "react-native";

const images = [
  require("./assets/home2.png"),
  require("./assets/background-image2.png"),
  require("./assets/favicon.png"),
];

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (gestureState) => {
        if (gestureState.dx > 50) {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        } else if (gestureState.dx < -50) {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        }
      },
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.imageContainer}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#123",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
    backgroundColor: "#123",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
