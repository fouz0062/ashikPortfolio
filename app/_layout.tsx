import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Stack.Screen
          name="about"
          options={{ headerTitle: "about", headerShown: false }}
        />
        <Stack.Screen
          name="skills"
          options={{ headerTitle: "skills", headerShown: false }}
        />
        <Stack.Screen
          name="experience"
          options={{ headerTitle: "experience", headerShown: false }}
        />
        <Stack.Screen
          name="contact"
          options={{ headerTitle: "contact", headerShown: false }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
