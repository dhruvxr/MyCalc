import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalculatorModel from '../models/CalculatorModel';

const calculatorModel = new CalculatorModel();

export default function CalculatorScreen({ navigation }: any) {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const scientificFunctions = ['sin', 'cos', 'tan', 'log', '√'];

  const handleButtonPress = (value: string) => {
    if (value === 'C') {
      setDisplay('0');
      setEquation('');
    } else if (value === '←') {
      setEquation((prev) => (prev.length > 1 ? prev.slice(0, -1) : ''));
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (value === '=') {
      try {
        const result = calculatorModel.calculate(equation);
        setDisplay(result.toString());
        setEquation(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      let updatedEquation = equation;
      let updatedDisplay = display === '0' ? '' : display;

      if (scientificFunctions.includes(value)) {
        updatedEquation += `${value}(`;
        updatedDisplay += `${value}(`;
      } else if (value === 'π') {
        updatedEquation += 'π';
        updatedDisplay += 'π';
      } else {
        updatedEquation += value;
        updatedDisplay += value;
      }

      setEquation(updatedEquation);
      setDisplay(updatedDisplay);
    }
  };

  const buttons = [
    ['sin', 'cos', 'tan', '√'],
    ['%', 'log', '(', ')'],
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['.', '0', '←', '+'],
    ['C', '^', '=', 'π']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#ccc" />
        </TouchableOpacity>
        <Text style={styles.title}>Basic</Text>
      </View>

      <View style={styles.displayBox}>
        <Text style={styles.equation}>{equation}</Text>
        <Text style={styles.display}>{display}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.buttonsContainer}>
        {buttons.map((row, i) => (
          <View key={i} style={styles.buttonRow}>
            {row.map((btn) => (
              <TouchableOpacity key={btn} style={styles.button} onPress={() => handleButtonPress(btn)}>
                <Text style={styles.buttonText}>{btn}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3d4e',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginLeft: 12,
    color: '#d0d0ff',
    fontWeight: '600',
  },
  displayBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    minHeight: 100,
    justifyContent: 'center',
  },
  equation: {
    fontSize: 20,
    color: '#555',
    textAlign: 'right',
  },
  display: {
    fontSize: 36,
    color: '#000',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#5c5cff',
    padding: 20,
    borderRadius: 12,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
