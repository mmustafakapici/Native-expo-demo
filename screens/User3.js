import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const User3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.user}>
      <View style={[styles.listchanger, styles.tabbarBorder]}>
        <View style={[styles.headerTopBar, styles.tabbarFlexBox]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group4.png")}
          />
          <Text style={styles.user1}>USER</Text>
          <Image
            style={styles.iconSearch}
            contentFit="cover"
            source={require("../assets/-icon-search.png")}
          />
        </View>
      </View>
      <View style={[styles.userChild, styles.tabbarSpaceBlock]} />
      <View style={[styles.tabbar, styles.tabbarSpaceBlock]}>
        <Pressable
          style={styles.market}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Piyasalar" })
          }
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.market1, styles.user3Typo]}>Market</Text>
        </Pressable>
        <Pressable
          style={styles.market}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Portfolio2" })
          }
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.market1, styles.user3Typo]}>Portfolio</Text>
        </Pressable>
        <Pressable
          style={styles.market}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "Charts" })
          }
        >
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/-icon-analytics2.png")}
          />
          <Text style={[styles.market1, styles.user3Typo]}>Charts</Text>
        </Pressable>
        <Pressable
          style={styles.market}
          onPress={() =>
            navigation.navigate("BottomTabsRoot", { screen: "News2" })
          }
        >
          <Image
            style={styles.groupIcon1}
            contentFit="cover"
            source={require("../assets/group1.png")}
          />
          <Text style={[styles.market1, styles.user3Typo]}>News</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabbarBorder: {
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray,
  },
  tabbarFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  tabbarSpaceBlock: {
    marginTop: 2,
    alignSelf: "stretch",
  },
  user3Typo: {
    marginTop: 5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  groupIcon: {
    width: 22,
    height: 24,
  },
  user1: {
    fontSize: FontSize.size_5xl,
    display: "flex",
    justifyContent: "center",
    width: 131,
    height: 38,
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
    color: Color.colorWhitesmoke,
    alignItems: "center",
  },
  iconSearch: {
    width: 20,
    height: 20,
  },
  headerTopBar: {
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_8xs,
    alignSelf: "stretch",
  },
  listchanger: {
    borderBottomWidth: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  userChild: {
    height: 660,
    overflow: "hidden",
  },
  vectorIcon: {
    height: 26,
    width: 30,
  },
  market1: {
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_sm,
  },
  market: {
    width: 40,
    alignItems: "center",
  },
  vectorIcon1: {
    height: 30,
    width: 30,
  },
  groupIcon1: {
    width: 30,
    height: 24,
  },
  tabbar: {
    borderTopWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray,
  },
  user: {
    flex: 1,
    width: "100%",
    paddingBottom: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorGray,
  },
});

export default User3;
