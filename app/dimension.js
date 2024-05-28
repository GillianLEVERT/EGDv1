import { Link } from "expo-router";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const DimensionScreen = () => {
  const [height, onHeightChange] = useState("");
  const [width, onWidthChange] = useState("");
  const [depth, onDepthChange] = useState("");
  const [price, setPrice] = useState(null)

  const calculatePrice = () => {
    const h = parseFloat(height)
    const w = parseFloat(width)
    const d = parseFloat(depth)

    // Prévention de bug ?
    if (isNaN(h) || isNaN(w) || isNaN(d)) {
        alert ("veuillez entrer des dimensions valides.")
        return;
    }
    
    const basePrice = 20
    const baseVolume = 100 * 100 * 50
    const volume = h * w * d
    const calculatedPrice = (volume / baseVolume) * basePrice
    
    setPrice(calculatedPrice.toFixed(2)) // Arrondir à 2 décimales
}
    
  return (
    <View style={styles.container}>
      <Text>Dimension Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onHeightChange}
        value={height}
        placeholder="Hauteur"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onWidthChange}
        value={width}
        placeholder="Largeur"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onDepthChange}
        value={depth}
        placeholder="Profondeur"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Terminer et envoyer le devis" onPress={calculatePrice} />
      </View>
      {price !== null && (
        <Text style={styles.priceText}>Prix estimé: {price} €</Text>
      )}
      <Link href="/">REVENIR EN ARRIERE</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default DimensionScreen;
