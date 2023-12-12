import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const ScreenCharts = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.charts}>
      <View style={[styles.headerTopBar, styles.tabbarFlexBox]}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
        <Text style={styles.charts1}>CHARTS</Text>
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.chartsChild, styles.tabbarSpaceBlock]} />
     
    </View>
  );
};

const styles = StyleSheet.create({
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
  market1Typo: {
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
  charts1: {
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
    justifyContent: "space-between",
    flexDirection: "row",
  },
  chartsChild: {
    height: 660,
    overflow: "hidden",
  },
  vectorIcon: {
    height: 26,
    width: 30,
  },
  market1: {
    color: Color.colorWhitesmoke,
    marginTop: 5,
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
  groupIcon2: {
    width: 33,
    height: 38,
  },
  tabbar: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderTopWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray,
  },
  charts: {
    flex: 1,
    width: "100%",
    paddingBottom: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorGray,
  },
});

export default ScreenCharts;
