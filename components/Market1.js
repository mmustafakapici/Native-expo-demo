import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Market1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.market, style]}
      onPress={() => navigation.navigate("Piyasalar")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={styles.market1}>Market</Text>
    </Pressable>
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
    color: Color.colorWhitesmoke,
    textAlign: "center",
    marginTop: 5,
  },
  market: {
    width: 40,
    alignItems: "center",
  },
});

export default Market1;
