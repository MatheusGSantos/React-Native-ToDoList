import { ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'

import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'

import { Home } from '@screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.COLORS.GRAY_600,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StatusBar style="light" backgroundColor="transparent" translucent />

          {!fontsLoaded ? (
            <ActivityIndicator color={theme.COLORS.PURPLE} size="large" />
          ) : (
            <Home />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
