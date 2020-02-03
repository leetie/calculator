var displayValue = 0;

//operator functions
function add(a, b) {
  return a + b;
}
function subtract (a, b) {
  return a - b;
}
function multiply (a, b) {
  return a * b;
}
function divide (a, b) {
  return a / b;
}

function operate (a, operator, b) {
  return operator == "multiply" ? multiply(a, b) 
        :operator == "divide" ? divide(a, b) 
        :operator == "subtract" ? subtract(a, b)
        :operator == "add" ? add(a, b)
        :"Error-use +, -, /, or X";
}

//populate display function 

