import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "./src/screens/explore";
import Navbar from "./src/core/components/Navbar";
import { Colors } from "./src/core/styles/settings/colors";
import DetailsScreen from "./src/screens/details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navbar />

        <View style={styles.wrapper}>
          <Stack.Navigator>
            <Stack.Screen
              name="Explore"
              component={ExploreScreen}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: Colors.navy100 },
              }}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  wrapper: {
    height: "100%",
    paddingHorizontal: 18,
    backgroundColor: Colors.navy100,
  },
});
