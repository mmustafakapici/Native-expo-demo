import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const Palette = () => {
  return (
    <View style={styles.palette}>
      <View style={[styles.down, styles.upPosition]} />
      <View style={[styles.up, styles.upPosition]} />
      <Image
        style={[styles.grayIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/gray.png")}
      />
      <View style={[styles.white, styles.upPosition]} />
      <Image
        style={[styles.pirmaryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pirmary.png")}
      />
      <View style={[styles.bg, styles.upPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  upPosition: {
    bottom: "0%",
    top: "0%",
    width: "16.67%",
    height: "100%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    width: "16.67%",
    height: "100%",
    position: "absolute",
  },
  down: {
    right: "0%",
    left: "83.33%",
    backgroundColor: "#ff6978",
  },
  up: {
    right: "16.67%",
    left: "66.67%",
    backgroundColor: Color.colorAquamarine,
  },
  grayIcon: {
    right: "33.33%",
    left: "50%",
  },
  white: {
    right: "50%",
    left: "33.33%",
    backgroundColor: Color.colorWhitesmoke,
  },
  pirmaryIcon: {
    right: "66.67%",
    left: "16.67%",
  },
  bg: {
    right: "83.33%",
    left: "0%",
    backgroundColor: Color.colorGray,
  },
  palette: {
    width: 300,
    height: 50,
  },
});

export default Palette;
