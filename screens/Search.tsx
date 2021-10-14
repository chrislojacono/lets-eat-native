import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/SearchScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#52a8ff",
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#fafcff"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
