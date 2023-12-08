const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Al from "./screens/Al";
import User1 from "./components/User";
import News from "./components/News";
import News1 from "./components/News1";
import Chart from "./components/Chart";
import Chart1 from "./components/Chart1";
import Portfolio from "./components/Portfolio";
import Market from "./components/Market";
import User2 from "./components/User1";
import Portfolio1 from "./components/Portfolio1";
import Market1 from "./components/Market1";
import ListItem from "./components/ListItem";
import Piyasalar from "./screens/Piyasalar";
import User3 from "./screens/User3";
import News2 from "./screens/News2";
import Portfolio2 from "./screens/Portfolio2";
import Charts from "./screens/Charts";
import Palette from "./components/Palette";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Market1 />,
    <Portfolio1 />,
    <Chart />,
    <News />,
    <User2 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Market />,
    <Portfolio />,
    <Chart1 />,
    <News1 />,
    <User1 />,
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
        name="Piyasalar"
        component={Piyasalar}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Portfolio2"
        component={Portfolio2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Charts"
        component={Charts}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News2"
        component={News2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="User3"
        component={User3}
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
              name="Al"
              component={Al}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User1"
              component={User1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News"
              component={News}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News1"
              component={News1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chart"
              component={Chart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chart1"
              component={Chart1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Portfolio"
              component={Portfolio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Market"
              component={Market}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="User2"
              component={User2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Portfolio1"
              component={Portfolio1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Market1"
              component={Market1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListItem"
              component={ListItem}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Al />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
