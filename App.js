import React, { useState } from "react";
import { StyleSheet, View, Image, Button } from "react-native";

const images = [
  require("./assets/home2.png"),
  require("./assets/background-image2.png"),
  require("./assets/favicon.png"),
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={handlePreviousImage} disabled={currentImageIndex === 0} />
        <Button title="Next" onPress={handleNextImage} disabled={currentImageIndex === images.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginBottom: 20,
  },
});

export default App;
