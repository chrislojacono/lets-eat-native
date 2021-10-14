import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lets Eat!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.colors.babyBlue,
    padding: 20
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.colors.offWhiteHeader,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '90%',
  },
});
