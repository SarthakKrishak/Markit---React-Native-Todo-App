import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";

const TabsLayout = () => {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted + "80", // More muted inactive color
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopWidth: 0.5,
          borderTopColor: colors.textMuted + "15", // Even more subtle border
          height: 85, // Slightly reduced height for sleeker look
          paddingBottom: 25,
          paddingTop: 8,
          paddingHorizontal: 20, // Added horizontal padding
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.06,
          shadowRadius: 8,
          elevation: 12,
          // Add blur effect for modern glass-like appearance
          backdropFilter: "blur(20px)",
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500", // Slightly lighter weight for elegance
          marginTop: 4,
          letterSpacing: 0.3, // Subtle letter spacing
        },
        tabBarIconStyle: {
          marginBottom: 2, // Better icon spacing
        },
        tabBarItemStyle: {
          paddingVertical: 8,
          borderRadius: 12, // Rounded tab items
          marginHorizontal: 8,
        },
        tabBarActiveBackgroundColor: colors.primary + "08", // Subtle active background
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
