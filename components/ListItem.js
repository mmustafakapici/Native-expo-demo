import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const ListItem = ({ style }) => {
  return (
    <View style={[styles.listItem, style]}>
      <View style={styles.listItem1}>
        <View style={styles.numberParent}>
          <Text style={[styles.number, styles.numberTypo]}>1</Text>
          <View style={styles.symbolframe}>
            <Image
              style={styles.cryptologoIcon}
              contentFit="cover"
              source={require("../assets/cryptologo.png")}
            />
            <Text style={styles.cryptosymbol}>BTC</Text>
          </View>
        </View>
        <Text style={styles.numberTypo}>$34,695.25</Text>
        <View style={styles.pricechangeframeParent}>
          <View style={styles.pricechangeframe}>
            <Image
              style={styles.arrowIcon}
              contentFit="cover"
              source={require("../assets/arrow.png")}
            />
            <Text style={[styles.cryptochange, styles.marketcapTypo]}>
              2.1%
            </Text>
          </View>
          <Text style={[styles.marketcap, styles.marketcapTypo]}>
            $676,400,980,286
          </Text>
        </View>
      </View>
      <View style={styles.listItemChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  numberTypo: {
    textAlign: "left",
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  marketcapTypo: {
    textAlign: "right",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  number: {
    display: "flex",
    width: 20,
    height: 13,
    alignItems: "center",
  },
  cryptologoIcon: {
    width: 15,
    height: 15,
  },
  cryptosymbol: {
    textAlign: "center",
    marginLeft: 5,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  symbolframe: {
    width: 18,
    justifyContent: "center",
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  numberParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    borderRadius: Border.br_12xs,
    width: 10,
    height: 8,
  },
  cryptochange: {
    color: Color.colorAquamarine,
    marginLeft: 4,
  },
  pricechangeframe: {
    width: 35,
    height: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  marketcap: {
    marginLeft: 20,
    color: Color.colorWhitesmoke,
  },
  pricechangeframeParent: {
    flexDirection: "row",
  },
  listItem1: {
    width: 390,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_xl,
    paddingTop: Padding.p_10xs,
    paddingBottom: Padding.p_6xs,
    flexDirection: "row",
    alignItems: "center",
  },
  listItemChild: {
    borderStyle: "solid",
    borderColor: Color.colorDarkgray,
    borderTopWidth: 0.5,
    width: 351,
    height: 1,
    marginTop: 2,
  },
  listItem: {
    alignItems: "center",
  },
});

export default ListItem;
