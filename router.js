import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import PostsScreen from "./screens/mainScreen/PostsScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {!focused ? (
                <Ionicons
                  name="grid-outline"
                  size={24}
                  color="rgba(33, 33, 33, 0.8)"
                />
              ) : (
                <Ionicons name="grid-outline" size={24} color="#FF6C00" />
              )}
            </View>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {!focused ? (
                <Ionicons name="add" size={24} color="rgba(33, 33, 33, 0.8)" />
              ) : (
                <Ionicons name="add" size={24} color="#FF6C00" />
              )}
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {!focused ? (
                <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
              ) : (
                <Feather name="user" size={24} color="#FF6C00" />
              )}
            </View>
          ),
        }}
        name="Create"
        component={CreateScreen}
      />
    </MainTab.Navigator>
  );
};

export default useRoute;
