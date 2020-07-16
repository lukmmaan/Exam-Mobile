import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/components/redux/reducers"
import ReduxThunk from "redux-thunk";
import RootNavigator from './src/RootNavigator/RootNavigator';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!sa</Text>
      <StatusBar style="auto" />
    </View> */}
    <RootNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
