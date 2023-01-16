import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";

import { ThemeProvider } from "styled-components/native";

import theme from "./src/global/styles/theme";
import { Text } from "@components/Text";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  return !fontsLoaded ? (
    <ActivityIndicator />
  ) : (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text size="lg" color="blue" fontWeight="bold">
          Text1
        </Text>
        <Text>Text2</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
