import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const ScreenNews = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.news}>
      <View style={[styles.listchanger, styles.tabbarBorder]}>
        <View style={[styles.headerTopBar, styles.tabbarFlexBox1]}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group4.png")}
          />
          <Text style={styles.news1}>NEWS</Text>
          <Image
            style={styles.iconSearch}
            contentFit="cover"
            source={require("../assets/-icon-search.png")}
          />
        </View>
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
  tabbarFlexBox1: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabbarFlexBox: {
    marginTop: 2,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  news3Typo: {
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
  news1: {
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  listchanger: {
    borderBottomWidth: 1,
    alignSelf: "stretch",
    borderStyle: "solid",
    alignItems: "center",
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
  tabbar: {
    borderTopWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
    backgroundColor: Color.colorGray,
  },
  news: {
    flex: 1,
    width: "100%",
    paddingBottom: 0,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Color.colorGray,
  },
});

export default ScreenNews;
