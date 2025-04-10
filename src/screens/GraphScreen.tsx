import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';
import { evaluate } from 'mathjs';

const screenWidth = Dimensions.get('window').width;

export default function GraphScreen({ navigation }: any) {
  const [equation, setEquation] = useState('x^2');
  const [dataPoints, setDataPoints] = useState<number[]>([]);
  const [xLabels, setXLabels] = useState<string[]>([]);

  const handlePlot = () => {
    try {
      const expr = equation.replace(/y\s*=\s*/i, '').toLowerCase(); 
      const points: number[] = [];
      const labels: string[] = [];

      for (let x = -10; x <= 10; x++) {
        const scope = { x };
        const y = evaluate(expr, scope);
        points.push(typeof y === 'number' && isFinite(y) ? y : 0);
        labels.push(x.toString());
      }

      setDataPoints(points);
      setXLabels(labels);
    } catch (error) {
      console.warn('Invalid equation:', error);
      setDataPoints([]);
      setXLabels([]);
    }
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={28} color="#ccc" />
        </TouchableOpacity>
        <Text style={styles.title}>Graph Plotter</Text>
      </View>

      {dataPoints.length > 0 && (
        <LineChart
          data={{
            labels: xLabels,
            datasets: [{ data: dataPoints }],
          }}
          width={screenWidth - 32}
          height={300}
          chartConfig={{
            backgroundGradientFrom: '#2b2b39',
            backgroundGradientTo: '#2b2b39',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: () => '#fff',
            propsForDots: {
              r: '3',
              strokeWidth: '1',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.chart}
          withInnerLines={true}
          fromZero={false}
        />
      )}

      <Text style={styles.label}>Enter Equation:</Text>
      <TextInput
        style={styles.input}
        value={equation}
        onChangeText={setEquation}
        placeholder="e.g. y = x^2 + 2x + 1"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={handlePlot}>
        <Text style={styles.buttonText}>Plot Graph</Text>
      </TouchableOpacity>
    </ScrollView>
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
  chart: {
    borderRadius: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#2b2b39',
    color: '#fff',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#6366f1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
