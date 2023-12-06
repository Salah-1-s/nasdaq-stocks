import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExploreScreen from "./src/screens/explore";
import Navbar from "./src/core/components/Navbar";
import { Colors } from "./src/core/styles/settings/colors";
import DetailsScreen from "./src/screens/details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Navbar />

          <View style={styles.wrapper}>
            <Stack.Navigator>
              <Stack.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                  headerShown: false,
                  contentStyle: { backgroundColor: Colors.navy100 },
                }}
              />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
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
