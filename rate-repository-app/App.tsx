import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ResetPassScreen from "./src/screens/ReadScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import MemberDetails from "./src/screens/ReadScreen";
import UpdateScreen from "./src/screens/EditScreen";
import DeleteScreen from "./src/screens/DeleteScreen";

const Stack = createStackNavigator();

const SplashScreen = () => {
  return (
    <View style={styles.splashContainer}>
      <Image source={require("./assets/WelcomeSplashScreen.png")} style={styles.splashImage} />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPassScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="MemberDetails"
          component={MemberDetails}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  splashImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
