import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <Link href="/"><Text>REVENIR AU DEBUT</Text></Link>
      <Link href="/dimension"><Text>REVENIR SUR DIMENSION</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
