import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import {Header} from './src/components/common';
import LibraryList from './src/components/LibraryList';

function App() {
  return (

      <SafeAreaView style={styles.fullScreen}>
        <Header title="Tech Stack"/>
        <View style={styles.container}>
          <LibraryList />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fullScreen: {
    flex: 1
  }
});

export default () => {
  return (
    <SafeAreaProvider>
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    </SafeAreaProvider>
  )
}
