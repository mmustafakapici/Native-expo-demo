const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";





import NormalNewsButton from "./components/buttons/NormalNewsButton";
import NormalChartButton from "./components/buttons/NormalChartButton";
import NormalPortfolioButton from "./components/buttons/NormalPortfolioButton";
import NormalMarketButton from "./components/buttons/NormalMarketButton";
import NormalUserButton from "./components/buttons/NormalUserButton";



import ActiveUserButton from "./components/buttons/ActiveUserButton";
import ActiveNewsButton from "./components/buttons/ActiveNewsButton";
import ActiveChartButton from "./components/buttons/ActiveChartButton";
import ActivePortfolioButton from "./components/buttons/ActivePortfolioButton";
import ActiveMarketButton from "./components/buttons/ActiveMarketButton";


import ScreenSplash from "./screens/00-ScreenSplash";
import ScreenMarkets from "./screens/01-ScreenMarkets";
import ScreenPortfolio from "./screens/02-ScreenPortfolio";
import ScreenCharts from "./screens/03-ScreenCharts";
import ScreenNews from "./screens/04-ScreenNews";
import ScreenUser from "./screens/05-ScreenUser";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <NormalMarketButton />,
    <NormalPortfolioButton />,
    <NormalChartButton />,
    <NormalNewsButton />,
    <NormalUserButton />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <ActiveMarketButton />,
    <ActivePortfolioButton />,
    <ActiveChartButton />,
    <ActiveNewsButton />,
    <ActiveUserButton />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Piyasalar"
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#020612",
              borderStyle: "solid",
              borderColor: "#999",
              borderTopWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingTop: 20,
              paddingBottom: 10,
              height: 87.9,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="ScreenMarkets"
        component={ScreenMarkets}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ScreenPortfolio"
        component={ScreenPortfolio}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ScreenCharts"
        component={ScreenCharts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ScreenNews"
        component={ScreenNews}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ScreenUser"
        component={ScreenUser}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Exo2-Medium": require("./assets/fonts/Exo2-Medium.ttf"),
    "Exo2-Bold": require("./assets/fonts/Exo2-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="ScreenSplash"
              component={ScreenSplash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActiveUserButton"
              component={ActiveUserButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NormalNewsButton"
              component={NormalNewsButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActiveNewsButton"
              component={ActiveNewsButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NormalChartButton"
              component={NormalChartButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActiveChartButton"
              component={ActiveChartButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActivePortfolioButton"
              component={ActivePortfolioButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActiveMarketButton"
              component={ActiveMarketButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NormalUserButton"
              component={NormalUserButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NormalPortfolioButton"
              component={NormalPortfolioButton}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NormalMarketButton"
              component={NormalMarketButton}
              options={{ headerShown: false }}
            />
            
          </Stack.Navigator>
        ) : (
          <ScreenSplash />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
