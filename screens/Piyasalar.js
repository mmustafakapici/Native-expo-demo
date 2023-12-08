import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, SectionList, Pressable } from "react-native";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const Piyasalar = () => {
  const [listItemsSectionListData, setListItemsSectionListData] = useState([]);

  return (
    <View style={[styles.piyasalar, styles.frameFlexBox]}>
      <View style={[styles.headerTopBar, styles.tabbarFlexBox]}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
        <Text style={styles.markets}>MARKETS</Text>
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <View style={[styles.listCategories, styles.frameSpaceBlock]}>
        <Text style={styles.cryptocurrency}>Cryptocurrency</Text>
        <Text style={styles.cryptocurrency}>NFT</Text>
        <Text style={styles.cryptocurrency}>Categories</Text>
        <Text style={styles.cryptocurrency}>Exchanges</Text>
        <Text style={styles.cryptocurrency}>Derivatives</Text>
      </View>
      <View style={[styles.frame, styles.frameSpaceBlock]}>
        <View style={styles.list}>
          <View style={[styles.colNames, styles.tabbarFlexBox]}>
            <View style={styles.numberParent}>
              <Text style={styles.coinTypo}>NUMBER</Text>
              <Text style={[styles.coin, styles.coinTypo]}>COIN</Text>
            </View>
            <Text style={styles.coinTypo}>PRICE</Text>
            <View style={styles.hParent}>
              <Text style={styles.coinTypo}>24H</Text>
              <Text style={[styles.marketcap, styles.coinTypo]}>MARKETCAP</Text>
            </View>
          </View>
          <SectionList
            style={styles.listItems}
            sections={listItemsSectionListData}
            renderItem={(props) => props.item}
            renderSectionHeader={(props) => props.section.headerComponent}
            contentContainerStyle={styles.listItemsSectionListContent}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemsSectionListContent: {
    flexDirection: "column",
  },
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  tabbarFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  coinTypo: {
    fontSize: FontSize.size_7xs,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
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
  markets: {
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
    paddingHorizontal: Padding.p_xl,
    alignItems: "center",
  },
  cryptocurrency: {
    fontSize: FontSize.size_5xs,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  listCategories: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  coin: {
    marginLeft: 15,
  },
  numberParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  marketcap: {
    marginLeft: 81,
  },
  hParent: {
    flexDirection: "row",
  },
  colNames: {
    width: 390,
    paddingVertical: 0,
  },
  listItems: {
    flex: 1,
  },
  list: {
    height: 657,
    justifyContent: "space-between",
    alignItems: "center",
  },
  frame: {
    alignItems: "center",
    overflow: "hidden",
  },
  piyasalar: {
    width: "100%",
    paddingBottom: 0,
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.colorGray,
  },
});

export default Piyasalar;
