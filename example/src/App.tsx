import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { UnityShow } from 'react-native-unity-show';

export default function App() {
  return (
    <View style={styles.container}>
      <UnityShow />
    </View>
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
