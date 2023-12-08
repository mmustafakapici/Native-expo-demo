import * as React from "react";
import { useEffect, useState } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable , FlatList,SectionList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, Color, FontFamily, Border } from "../GlobalStyles";

import { fetchCoins } from "../api/CoinGecko";

const Portfolio2 = () => {
  const navigation = useNavigation();
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoins();
      setCoins(data);
    };

    getCoins();
  }, []);

  return (
    <View style={[styles.portfolio, styles.frameFlexBox]}>
      <View style={[styles.headerTopBar, styles.listFlexBox]}>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group4.png")}
        />
        <Text style={[styles.portfolio1, styles.portfolio1FlexBox]}>
          PORTFOLIO
        </Text>
        <Image
          style={styles.iconSearch}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
      </View>

      <View style={[styles.frame, styles.frameSpaceBlock]}>
        <View style={styles.list}>
          <View style={[styles.colNames, styles.listFlexBox]}>
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

          <View style={styles.listItems}>
          <FlatList
          data={coins}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <View style={[styles.listItem1, styles.listFlexBox]}>
                <View style={styles.numberParent}>
                  <Text style={[styles.number1, styles.number1Typo]}>#</Text>
                  <View style={[styles.symbolframe, styles.portfolio1FlexBox]}>
                    <Image
                      style={styles.cryptologoIcon}
                      contentFit="cover"
                      source={{ uri: item.image }}
                    />
                    <Text style={styles.cryptosymbol}> {item.name}({item.symbol.toUpperCase()})</Text>
                  </View>
                </View>
                <Text style={styles.number1Typo}>${item.current_price}</Text>
                <View style={styles.hParent}>
                  <View style={styles.pricechangeframe}>
                    <Image
                      style={styles.arrowIcon}
                      contentFit="cover"
                      source={require("../assets/arrow.png")}
                    />
                    <Text style={[styles.cryptochange, styles.marketcap1Typo]}>
                    {item.price_change_percentage_24h.toFixed(2)}%
                    </Text>
                  </View>
                  <Text style={[styles.marketcap1, styles.marketcap1Typo]}>
                    ${item.market_cap}
                  </Text>
                </View>
              </View>
              <View style={[styles.listItemChild, styles.tabbarBorder]} />
            </View>
          )}
          keyExtractor={(item) => item.id}
          />
          </View>


          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  listFlexBox: {
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  portfolio1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameSpaceBlock: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  coinTypo: {
    fontSize: FontSize.size_7xs,
    color: Color.colorDarkgray,
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  number1Typo: {
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  marketcap1Typo: {
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  tabbarBorder: {
    marginTop: 2,
    borderColor: Color.colorDarkgray,
    borderStyle: "solid",
  },
  market1Typo: {
    fontSize: FontSize.size_sm,
    marginTop: 5,
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  groupIcon: {
    width: 22,
    height: 24,
  },
  portfolio1: {
    fontSize: FontSize.size_5xl,
    width: 131,
    height: 38,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
    justifyContent: "center",
    color: Color.colorWhitesmoke,
  },
  iconSearch: {
    height: 20,
    width: 20,
  },
  headerTopBar: {
    paddingTop: Padding.p_11xl,
    paddingBottom: Padding.p_8xs,
    alignSelf: "stretch",
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
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  number1: {
    height: 13,
    width: 20,
    display: "flex",
    alignItems: "center",
  },
  cryptologoIcon: {
    width: 25,
    height: 25,
  },
  cryptosymbol: {
    marginLeft: 5,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.exo2Medium,
    fontWeight: "500",
  },
  symbolframe: {
    width: 60,
    marginLeft: 15,
    flexDirection: "row",
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
  marketcap1: {
    marginLeft: 20,
    color: Color.colorWhitesmoke,
  },
  listItem1: {
    width: 390,
    paddingTop: Padding.p_10xs,
    paddingBottom: Padding.p_6xs,
    alignItems: "center",
  },
  listItemChild: {
    borderTopWidth: 0.5,
    width: 351,
    height: 1,
  },
  listItem: {
    alignItems: "center",
  },
  listItems: {
    height: 620,
    marginTop: 33,
    alignItems: "center",
  },
  list: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  vectorIcon1: {
    height: 30,
    width: 30,
  },
  market1: {
    color: Color.colorWhitesmoke,
  },
  market: {
    width: 40,
    alignItems: "center",
  },
  groupIcon1: {
    width: 30,
    height: 24,
  },
  groupIcon2: {
    width: 33,
    height: 38,
  },
  tabbar: {
    borderTopWidth: 1,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_3xs,
    paddingHorizontal: Padding.p_xl,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.colorGray,
  },
  frame: {
    alignItems: "center",
    overflow: "hidden",
  },
  portfolio: {
    flex: 1,
    width: "100%",
    paddingBottom: 0,
    alignItems: "center",
    backgroundColor: Color.colorGray,
  },
});

export default Portfolio2;
