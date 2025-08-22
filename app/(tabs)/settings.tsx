import { View, Text, ScrollView, Linking } from "react-native";
import React from "react";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ProgressStats from "@/components/ProgressStats";
import Preferences from "@/components/Preferences";
import DangerZone from "@/components/DangerZone";
import { createHomeStyles } from "@/assets/styles/home.styles";

const settings = () => {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);
  const homeStyle = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.container}
    >
      <SafeAreaView style={settingsStyles.safeArea}>
        {/* HEADER */}
        <View style={settingsStyles.header}>
          <View style={settingsStyles.titleContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.iconContainer}
            >
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingsStyles.title}>Settings</Text>
          </View>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={settingsStyles.scrollView}
          contentContainerStyle={[
            settingsStyles.content,
            { paddingBottom: 24 },
          ]}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          <Preferences />
          <DangerZone />

          {/* FOOTER */}
          <View style={{ alignItems: "center", marginTop: 16 }}>
            <Text
              style={[
                homeStyle.subtitle,
                { textAlign: "center", color: colors.textMuted, fontSize: 13 },
              ]}
            >
              Created by{" "}
              <Text
                style={{
                  color: colors.primary,
                  textDecorationLine: "underline",
                  fontWeight: "600",
                }}
                onPress={() =>
                  Linking.openURL(
                    "https://linktr.ee/SarthakKrishak?utm_source=linktree_profile_share&ltsid=34e1ae65-96cf-4ed6-9038-ddfd95e7afdc"
                  )
                }
              >
                Sarthak Krishak
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default settings;
