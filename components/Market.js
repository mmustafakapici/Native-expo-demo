import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Market = ({ style }) => {
  return (
    <View style={[styles.market, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.market1}>Market</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 30,
    height: 26,
  },
  market1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.exo2Medium,
    color: Color.colorDodgerblue,
    textAlign: "center",
    marginTop: 5,
  },
  market: {
    width: 40,
    alignItems: "center",
  },
});

export default Market;
