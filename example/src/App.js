import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-unity-show';
export default function App() {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(MapView, null)
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
