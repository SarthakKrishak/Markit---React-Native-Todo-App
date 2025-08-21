import { StyleSheet,Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const { toggleDarkMode,colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);


  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
