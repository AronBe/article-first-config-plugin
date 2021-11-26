import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import introImage from "./assets/introImage.png";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image source={introImage} />
        <Text style={styles.text}>Welcome!</Text>
      </View>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    bottom: 80,
    left: 40,
    fontSize: 36,
    color: "white",
  },
});
