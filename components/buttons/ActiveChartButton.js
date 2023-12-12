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

const ActiveChartButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.chart, style]}
      onPress={() => navigation.navigate("ScreenCharts")}
    >
      <Image
        style={styles.iconAnalytics}
        contentFit="cover"
        source={require("../../assets/-icon-analytics1.png")}
      />
      <Text style={styles.charts}>Charts</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconAnalytics: {
    width: 30,
    height: 30,
  },
  charts: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.exo2Medium,
    color: Color.colorDodgerblue,
    textAlign: "center",
    marginTop: 5,
  },
  chart: {
    width: 40,
    alignItems: "center",
  },
});

export default ActiveChartButton;
