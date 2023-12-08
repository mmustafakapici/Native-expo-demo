import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Al = () => {
  return (
    <View style={styles.al}>
      <View style={styles.logoGroup}>
        <Text style={[styles.ailayzer, styles.ailayzerTypo]}>AILAYZER</Text>
        <Text style={[styles.aiPoweredDataAnalysis, styles.ailayzerTypo]}>
          AI-POWERED DATA ANALYSIS
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ailayzerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.exo2Bold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  ailayzer: {
    fontSize: 48,
    color: Color.colorWhitesmoke,
  },
  aiPoweredDataAnalysis: {
    fontSize: 16,
    color: Color.colorDarkgray,
  },
  logoGroup: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  al: {
    backgroundColor: Color.colorGray,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    paddingHorizontal: 86,
    paddingVertical: 383,
  },
});

export default Al;
