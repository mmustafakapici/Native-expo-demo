import * as React from "react";
import { useState,useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, SectionList, Pressable , FlatList,  SafeAreaView} from "react-native";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";


import { fetchCoins } from "../api/CoinGecko";


const ScreenMarkets = () => {
 
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchCoins();
      setCoins(data);
    };

    getCoins();

    //120sec refresh
    const interval = setInterval(() => {
      getCoins();
    }, 120000);


    return () => clearInterval(interval);

  }, []);




  return (
    <SafeAreaView style={[styles.piyasalar, styles.frameFlexBox]}>



  
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
                    <Text style={styles.cryptosymbol}> {item.name}</Text>
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
    </SafeAreaView>
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

export default ScreenMarkets;
