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

const News1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.news, style]}
      onPress={() => navigation.navigate("News2")}
    >
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Text style={styles.news1}>News</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 30,
    height: 24,
  },
  news1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.exo2Medium,
    color: Color.colorDodgerblue,
    textAlign: "center",
    marginTop: 5,
  },
  news: {
    width: 40,
    alignItems: "center",
  },
});

export default News1;
