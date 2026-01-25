import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import Router from './Router';
import "../global.css"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import Clarity from "@microsoft/react-native-clarity"
import { RealmProvider } from '@realm/react';
import { schema } from './database/schema';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  
  useEffect(() => {
    if(!__DEV__){
      Clarity.initialize("t1eaql5ftm")
    }
  }, [])

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <RealmProvider schema={schema}>
          <GestureHandlerRootView>
            <Router/>
          </GestureHandlerRootView>
      </RealmProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
