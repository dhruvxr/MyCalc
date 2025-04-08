export default class CalculatorModel {
    calculate(equation: string): number {
      equation = equation.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      equation = equation.replace(/sin/g, 'Math.sin');
      equation = equation.replace(/cos/g, 'Math.cos');
      equation = equation.replace(/tan/g, 'Math.tan');
      equation = equation.replace(/log/g, 'Math.log10');
      equation = equation.replace(/√/g, 'Math.sqrt');
      equation = equation.replace(/π/g, 'Math.PI');
      return eval(equation);
    }
  }