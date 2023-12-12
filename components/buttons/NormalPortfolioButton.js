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
import { FontSize, FontFamily, Color } from "../../GlobalStyles";

const NormalPortfolioButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.portfolio, style]}
      onPress={() => navigation.navigate("ScreenPortfolio")}
    >
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../../assets/vector2.png")}
      />
      <Text style={styles.portfolio1}>Portfolio</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 30,
    height: 30,
  },
  portfolio1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.exo2Medium,
    color: Color.colorWhitesmoke,
    textAlign: "center",
    marginTop: 5,
  },
  portfolio: {
    width: 40,
    alignItems: "center",
  },
});

export default NormalPortfolioButton;
