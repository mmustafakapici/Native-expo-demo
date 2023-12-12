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

const NormalUserButton = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.user, style]}
      onPress={() => navigation.navigate("ScreenUser")}
    >
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../../assets/group3.png")}
      />
      <Text style={styles.user1}>User</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    width: 33,
    height: 38,
  },
  user1: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.exo2Medium,
    color: Color.colorWhitesmoke,
    textAlign: "center",
    marginTop: 5,
  },
  user: {
    width: 40,
    alignItems: "center",
  },
});

export default NormalUserButton;
