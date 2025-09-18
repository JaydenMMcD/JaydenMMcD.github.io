// Store valid results
let results = [];

// Start HTML table for computations
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
  // Prompt user for first number
  let x = prompt("Enter the first number (Cancel to quit):");
  if (x === null) break; // Exit loop if Cancel clicked

  // Prompt user for second number
  let y = prompt("Enter the second number (Cancel to quit):");
  if (y === null) break;

  // Prompt user for operator
  let operator = prompt("Enter operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;

  // Convert inputs to numbers
  let num1 = parseFloat(x);
  let num2 = parseFloat(y);

  // Check for valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    result = "Error: Non-numeric input";
  } else {
    // Perform operation based on operator
    switch (operator) {
      case "+":
        result = num1 + num2;
        results.push(result);
        break;
      case "-":
        result = num1 - num2;
        results.push(result);
        break;
      case "*":
        result = num1 * num2;
        results.push(result);
        break;
      case "/":
        if (num2 === 0) {
          result = "Error: Division by zero";
        } else {
          result = num1 / num2;
          results.push(result);
        }
        break;
      case "%":
        result = num1 % num2;
        results.push(result);
        break;
      default:
        result = "Error: Invalid operator";
    }
  }

  // Add row to table
  document.write(
    "<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>"
  );
}

document.write("</table>");

// Create summary table only if we have valid results
if (results.length > 0) {
  let min = Math.min(...results);
  let max = Math.max(...results);
  let total = results.reduce((a, b) => a + b, 0);
  let avg = total / results.length;

  // Write summary table
  document.write("<h2>Summary of Results</h2>");
  document.write("<table>");
  document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
  document.write("</table>");
} else {
  document.write("<p>No valid results to summarize.</p>");
}
