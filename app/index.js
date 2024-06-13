import React, { useState } from "react";
import { StyleSheet, View, Image, Button } from "react-native";
import { useRouter } from "expo-router";


const images = [
  require("../assets/home2.png"),
  require("../assets/roof1.png"),
  require("../assets/roof2.png"),
];

const HomeScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

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
      <View style={styles.imageStack}>
        <Image
          source={require("../assets/bg.png")}
          style={styles.backgroundImage}
        />
        <Image source={images[currentImageIndex]} style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Previous photos"
          onPress={handlePreviousImage}
          disabled={currentImageIndex === 0}
        />
        <Button
          title="Next photos"
          onPress={handleNextImage}
          disabled={currentImageIndex === images.length - 1}
        />
        <Button title="Dimensions" onPress={() => router.push("/dimension")} />
      </View>
     <View style={styles.buttonContainer}>
        <Button title="Login" onPress={()=> router.push("/fetch")}/>
      </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStack: {
    width: 320,
    height: 440,
    position: "relative",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    opacity: 0.5,
    position: "absolute",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginTop: 20,
  },
});

export default HomeScreen;
