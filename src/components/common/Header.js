import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text} from 'react-native-elements';

export default function Header({title}) {
  return (
      <View style={styles.container}>
        <Text h3>{title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: '#f8f8f8'
  },
});
