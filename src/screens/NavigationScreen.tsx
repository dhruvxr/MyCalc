import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function NavigationScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Calculator</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculator')}>
        <View style={styles.circle} />
        <Text style={styles.label}>Basic</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Graph')}>
        <View style={styles.circle} />
        <Text style={styles.label}>Graph</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Convertor')}>
        <View style={styles.circle} />
        <Text style={styles.label}>Convertor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: 'black',
    borderRadius: 12,
    marginRight: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
});