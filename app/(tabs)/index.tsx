import { StyleSheet,Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import useTheme from "@/hooks/useTheme";

export default function Index() {

  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.content}>What we are doing the things </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // By default in column for mobiles
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  content: {
    fontSize: 22,
  }
});
